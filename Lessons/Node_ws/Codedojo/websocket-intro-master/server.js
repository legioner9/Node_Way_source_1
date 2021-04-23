const { _require } = require ( 'st_require' );
const WS = _require ( 'ws' );
debugger

const wss = new WS.Server ( { port: 3000 } );

wss.on ( 'connection', ws => {
    ws.send ( 'Connect is existing' );
} );
