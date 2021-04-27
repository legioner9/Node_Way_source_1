'use strict';

const Fs = require ( 'fs' );

const coniunctum = {
    console: 'global',
    fs: 'native',
    ncp: 'modules',
};

const arr_dir = Fs.readdirSync ( __dirname ).filter ( name => {
    const arr = name.split ( '.' );
    debugger
    return arr[arr.length - 1] === 'mod';
} );

