'use strict';

const test = require('tap');
const net = require('net');

const mdsf = require('mdsf');

const jstp = require('../..');

const app = require('../fixtures/application');
const application = new jstp.Application(app.name, app.interfaces);

const serverConfig = {
  applications: [application],
  authPolicy: app.authCallback,
};

const Transport = require('../mock/transport');

let server;
let connection;

test.beforeEach(done => {
  server = jstp.net.createServer(serverConfig);
  server.listen(0, () => done());
});

test.afterEach(done => {
  if (connection) {
    connection.close();
    connection = null;
  }
  server.close();
  done();
});

test.test('must perform an anonymous handshake manually', test => {
  const client = {
    application: new jstp.Application('jstp', {}),
    reconnector: () => {},
  };
  const port = server.address().port;
  const socket = net.connect(port);
  socket.on('error', () =>
    test.fail('must create socket and connect to server')
  );
  socket.on('connect', () => {
    const transport = new jstp.net.Transport(socket);
    connection = new jstp.Connection(transport, null, client);
    connection.handshake(app.name, null, null, (error, session) => {
      test.assertNot(error, 'handshake must not return an error');
      test.equal(connection.username, null, 'username must be null');
      test.assert(
        session instanceof jstp.Session,
        'session must be an instance of jstp.Session'
      );
      test.end();
    });
  });
});

test.test('must perform an anonymous handshake', test => {
  const port = server.address().port;
  jstp.net.connect(app.name, null, port, (error, conn, session) => {
    connection = conn;
    test.assertNot(error, 'handshake must not return an error');
    test.equal(connection.username, null, 'username must be null');
    test.assert(
      session instanceof jstp.Session,
      'session must be an instance of jstp.Session'
    );
    test.end();
  });
});

test.test('must perform a handshake with credentials', test => {
  const client = {
    connectPolicy: new jstp.SimpleConnectPolicy(app.login, app.password),
    reconnector: () => {},
  };
  const port = server.address().port;
  jstp.net.connect(app.name, client, port, (error, conn, session) => {
    connection = conn;
    test.assertNot(error, 'handshake must not return an error');
    test.equal(
      connection.username,
      app.login,
      'username must be same as the one passed with handshake'
    );
    test.assert(
      session instanceof jstp.Session,
      'session must be an instance of jstp.Session'
    );
    test.equal(
      session.username,
      app.login,
      'session username must be same as the one passed with handshake'
    );
    test.end();
  });
});

test.test('must not perform a handshake with invalid credentials', test => {
  const client = {
    connectPolicy: new jstp.SimpleConnectPolicy(app.login, '__incorrect__'),
    reconnector: () => {},
  };
  const port = server.address().port;
  jstp.net.connect(app.name, client, port, error => {
    test.assert(error, 'handshake must return an error');
    test.equal(
      error.code,
      jstp.ERR_AUTH_FAILED,
      'error code must be ERR_AUTH_FAILED'
    );
    test.end();
  });
});

test.test('must handle nonexistent application error', test => {
  const port = server.address().port;
  const client = { reconnector: () => {} };
  jstp.net.connect('__nonexistentApp__', client, port, error => {
    test.assert(error, 'handshake must return an error');
    test.equal(
      error.code,
      jstp.ERR_APP_NOT_FOUND,
      'error code must be ERR_APP_NOT_FOUND'
    );
    test.end();
  });
});

test.test('must not accept handshakes on a client', test => {
  const transport = new Transport();

  const handshake = {
    handshake: [0, app.name],
  };
  const response = {
    handshake: [0],
    error: [jstp.ERR_NOT_A_SERVER],
  };

  transport.on('dataSent', data => {
    test.equal(
      data,
      mdsf.stringify(response),
      'client must return ERR_NOT_A_SERVER'
    );
    test.end();
  });

  // `connection` is being used in an implicit way
  // `connection._processHandshakeRequest` is being tested
  // eslint-disable-next-line no-unused-vars
  const connection = new jstp.Connection(transport, null, {
    reconnector: () => {},
  });
  transport.emitMessage(handshake);
});

test.test(
  'must drop connection after HANDSHAKE_TIMEOUT if no handshake received',
  test => {
    test.plan(3);
    server.on('handshakeTimeout', () => {
      test.pass('handshake timeout must occur');
    });

    const port = server.address().port;
    const connection = net.connect(port, error => {
      test.assertNot(error, 'must connect to server');
    });
    connection.on('close', () => {
      test.pass('connection must be closed');
    });
  }
);
