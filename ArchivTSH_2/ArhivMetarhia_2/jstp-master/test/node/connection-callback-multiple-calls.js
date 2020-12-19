'use strict';

const test = require('tap');
const jstp = require('../..');

const app = new jstp.Application('app', {});

let server;

test.beforeEach(done => {
  server = jstp.net.createServer({ applications: [app] });
  server.listen(0, done);
});

test.afterEach(done => {
  server.close(done);
});

test.test('must call connect callback once on successful connect', test => {
  test.plan(1);
  const port = server.address().port;
  const client = { reconnector: () => {} };
  jstp.net.connect(app.name, client, port, (error, connection) => {
    test.assertNot(error, 'must not return error');
    connection.getTransport().destroy();
    connection.on('error', () => {
      // dismiss
    });
    connection.emitRemoteEvent('someService', 'someEvent', []);
  });
});

const invalidAddress = {
  host: '__invalid_host__',
};

test.test('must call connect callback once on error on connect', test => {
  test.plan(1);
  jstp.net.connect(app.name, null, invalidAddress, error => {
    test.assert(error, 'must return error');
  });
});
