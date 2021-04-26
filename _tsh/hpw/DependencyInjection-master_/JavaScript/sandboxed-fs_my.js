const Fs = require ( 'fs' );
const Path = require ( 'path' );

const wrapFunction = ( key, fn ) => {

    return ( ...args ) => {
        debugger
        const arr_path = args[0].split ( '/' );
        const wrap_path = Path.join ( arr_path[arr_path.length - 1] );
        args[0] = wrap_path;

        return fn ( ...args );
    };
};

const cloneInterface = anInterface => {

    const clone = {};
    for ( const key in anInterface ) {
        const fn = anInterface[key];
        clone[key] = wrapFunction ( key, fn );
    }

    return clone;
};

// const clone_Fs = cloneInterface ( Fs );

// clone_Fs.readFile ( '../../src/README.md', 'utf-8', ( err, data ) => {
//     debugger
//     if ( err ) throw err;
//     console.log ( { data } );
// } );
clone_Fs.bind = path => {
    const wraped = Object.assign({}, Fs)
    debugger
}
module.exports = clone_Fs;

