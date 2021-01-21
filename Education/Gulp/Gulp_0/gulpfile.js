'use strict';

const { src, dest, watch, series, parallel } = require ( 'gulp' );
const del = require ( 'del' );

exports.copy =function(){
    src('./dist/*')
        .pipe(dest('/app/*'))
}


