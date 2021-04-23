const { _require } = require ( 'st_require' );
const WS = _require ( 'ws' );


const wss = new WS.Server ( { port: 3000 } );
debugger
wss.on ( 'connection', ws => {
    ws.on('message', message =>{

        wss.clients.forEach(client =>{
            if(client.readyState === WS.OPEN){
                client.send(message);
            }

        })

    })
    ws.send ( 'Connect is existing' );
} );
