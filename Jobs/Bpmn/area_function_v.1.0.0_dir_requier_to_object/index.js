const { _require } = require ( 'st_require' );
const arht = _require ( '_aop' ).archetypes.function.arht;
const Fs = require('fs');
const Path = require('path');

const Func_examp = function() {

    // BOUNDEN CALL define inner Env fnd Utils
    const _e = arht.env ( Func_examp );
    const _u = arht.utils ( Func_examp );
    _u._deb ();
    _u._log ( 'mes _u._log' );
    _u._log_deb ( 'mes _u._log_deb' );
    _u._fsLog ( 'mes from _u._fsLog' );
    _u._fsLogErr ( 'mes from _u._fsLogErr' );
    _u._console_obj ( { a: 'aa' } );
    _u._stack('This from _stack')

    _u._emit ( 'ev_from_func', 'mes ev_from_func' );
    _u._on ( 'ev_to_func', d => console.log ( 'function listener getting that: ', d ) );
    _u._once ( 'ev_ce_to_func', d => console.log ( 'function listener getting that: ', d ) );

    _u._emit( '_start', _e);
    _u._emit( '_innerState', _e.INNER);

    const return_in_point = {any:'any_body'}
    _u._emit('_point_event',return_in_point)

// _________Func_examp AREA:____________________________________________________

    const obj_exports = {};
    const arr_path = Fs.readdirSync ( __dirname );

    const st_fs = _require( 'st_fs');
    arr_path.forEach ( item => {
        debugger
        if ( item !== 'index.js' && item !== 'Box' && item !== 'Ctrl' && item !== 'README.md' && item !== 'package.json' ) {

            obj_exports[item] = ( require ( Path.join ( __dirname, item, 'index.js' ) ) );
        }
    } );



};

arht.methods ( Func_examp );
arht.property ( Func_examp );

module.exports = Func_examp;
