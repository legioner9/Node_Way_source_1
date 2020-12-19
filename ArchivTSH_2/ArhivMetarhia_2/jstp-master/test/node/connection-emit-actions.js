'use strict';

const test = require('tap');
const net = require('net');
const EventEmitter = require('events');

const jstp = require('../..');

const app = require('../fixtures/application');

const HEARTBEAT_INTERVAL = 100;

const application = new jstp.Application(app.name, app.interfaces);
const serverConfig = {
  applications: [application],
  authPolicy: app.authCallback,
  heartbeatInterval: HEARTBEAT_INTERVAL,
};

let server;
let logger;
let connection;

test.beforeEach(done => {
  server = jstp.net.createServer(serverConfig);
  server.listen(0, () => {
    const port = server.address().port;
    logger = new EventEmitter();
    jstp.net.connect(app.name, { logger }, port, 'localhost', (error, conn) => {
      test.assertNot(error, 'must connect to server and perform handshake');
      connection = conn;
      done();
    });
  });
});

test.afterEach(done => {
  if (connection) {
    connection.close();
    connection = null;
  }
  server.close();
  done();
});

test.test(
  'must emit server and client events upon anonymous handshake',
  test => {
    test.plan(7);

    const client = {
      application: new jstp.Application('jstp', {}),
      reconnector: () => {},
    };

    server.once(
      'handshakeRequest',
      (serverConnection, applicationName, authStrategy) => {
        test.assert(serverConnection, 'must return connection object');
        test.equal(applicationName, app.name, 'application name must match');
        test.equal(
          authStrategy,
          'anonymous',
          'auth strategy must be anonymous by default'
        );
      }
    );

    const port = server.address().port;
    const socket = net.connect(port);
    socket.on('error', () => {
      test.fail('must create socket and connect to server');
    });
    socket.on('connect', () => {
      const transport = new jstp.net.Transport(socket);
      const connection = new jstp.Connection(transport, null, client);

      connection.on('handshake', (error, ok) => {
        test.assertNot(error, 'handshake must not return an error');
        test.assert(ok, 'handshake must return ok');
      });

      connection.handshake(app.name, null, null, error => {
        test.assertNot(error, 'handshake must not return an error');
        test.equal(connection.username, null, 'username must be null');
        connection.close();
      });
    });
  }
);

test.test(
  'must emit server and client events login authentication strategy',
  test => {
    test.plan(7);

    const logger = new EventEmitter();
    const client = {
      application: new jstp.Application('jstp', {}),
      reconnector: () => {},
      logger,
    };

    server.once(
      'handshakeRequest',
      (serverConnection, applicationName, authStrategy) => {
        test.assert(serverConnection, 'must return connection object');
        test.equal(applicationName, app.name, 'application name must match');
        test.equal(
          authStrategy,
          'login',
          "authentication strategy must be 'login'"
        );
      }
    );

    const port = server.address().port;
    const socket = net.connect(port);
    socket.on('error', () => {
      test.fail('must create socket and connect to server');
    });
    socket.on('connect', () => {
      const transport = new jstp.net.Transport(socket);
      const connection = new jstp.Connection(transport, null, client);

      logger.on('handshake', (error, ok) => {
        test.assertNot(error, 'handshake must not return an error');
        test.assert(ok, 'handshake must return ok');
      });

      connection.handshake(app.name, app.login, app.password, error => {
        test.assertNot(error, 'handshake must not return an error');
        test.equal(connection.username, app.login, 'username must match');
        connection.close();
      });
    });
  }
);

test.test(
  'must emit event on call without arguments and with a return value',
  test => {
    test.plan(5);

    const iface = 'calculator';
    const methodName = 'answer';
    const args = [];

    server
      .getClientsArray()[0]
      .on('call', (actualInterfaceName, actualMethodName, actualArgs) => {
        test.equal(actualInterfaceName, iface, 'method interface must match');
        test.equal(
          actualMethodName,
          methodName,
          'method name must be equal to the called one'
        );
        test.strictSame(
          actualArgs,
          args,
          'method arguments must be equal to the passed ones'
        );
      });

    logger.on('callback', (error, ok) => {
      test.assertNot(error, 'callMethod must not return an error');
      test.strictSame(ok, [42], 'ok contents must match');
    });

    connection.callMethod(iface, methodName, args);
  }
);

test.test('must emit event upon inspect message', test => {
  const expectedInterfaces = Object.keys(app.interfaces);
  const expectedTests = expectedInterfaces.length;

  test.plan(expectedTests);
  server.getClientsArray()[0].on('inspect', interfaceName => {
    test.assert(
      expectedInterfaces.includes(interfaceName),
      'inspect event interface must be one of expected'
    );
  });

  expectedInterfaces.forEach(iface => {
    connection.inspectInterface(iface);
  });
});

test.test('must emit messages in development mode', test => {
  test.plan(4);

  const clientOutgoingMessage = { call: [1, 'calculator'], answer: [] };
  const serverOutgoingMessage = { callback: [1], ok: [42] };

  server.getClientsArray()[0].on('outgoingMessage', message => {
    if (message.ping || message.pong) {
      return;
    }
    test.strictSame(
      message,
      serverOutgoingMessage,
      'server outgoing message must match'
    );
  });
  server.getClientsArray()[0].on('incomingMessage', message => {
    if (message.ping || message.pong) {
      return;
    }
    test.strictSame(
      message,
      clientOutgoingMessage,
      'server incoming message must match the one sent from client'
    );
  });
  logger.on('outgoingMessage', message => {
    if (message.ping || message.pong) {
      return;
    }
    test.strictSame(
      message,
      clientOutgoingMessage,
      'client outgoing message must match'
    );
  });
  logger.on('incomingMessage', message => {
    if (message.ping || message.pong) {
      return;
    }
    test.strictSame(
      message,
      serverOutgoingMessage,
      'client incoming message must match the one sent from server'
    );
  });

  connection.callMethod('calculator', 'answer', []);
});

test.test('must emit heartbeat messages in development mode', test => {
  test.plan(4);
  const received = {
    serverPing: false,
    serverPong: false,
    clientPing: false,
    clientPong: false,
  };

  server.getClientsArray()[0].on('incomingMessage', message => {
    if (message.ping !== undefined) {
      received.serverPing = true;
    } else if (message.pong !== undefined) {
      received.serverPong = true;
    }
  });
  logger.on('incomingMessage', message => {
    if (message.ping !== undefined) {
      received.clientPing = true;
    } else if (message.pong !== undefined) {
      received.clientPong = true;
    }
  });

  connection.startHeartbeat(HEARTBEAT_INTERVAL);
  setTimeout(() => {
    test.assert(received.serverPing, 'server must receive ping message');
    test.assert(received.serverPong, 'server must receive pong message');
    test.assert(received.clientPing, 'client must receive ping message');
    test.assert(received.clientPing, 'client must receive pong message');
  }, 3 * HEARTBEAT_INTERVAL);
});
