'use strict';

const { src, dest, watch, series, parallel } = require ( 'gulp' );
const _del = require ( 'del' );

const copy = function () {
    return src ( 'dist/*' )
        .pipe ( dest ( 'app' ) );
};

exports.copy_2 = function () {
    return src ( 'a' )
        .pipe ( dest ( 'app' ) );
};

const del = function () {
    _del ( 'app' );
};

exports.del = del;
exports.copy = copy;

exports.ser = series ( del, copy );

debugger

del ();

