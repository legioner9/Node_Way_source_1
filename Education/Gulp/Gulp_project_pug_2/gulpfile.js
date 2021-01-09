'use strict';

const {src, dest, watch, series, parallel} = require('gulp');
const del = require('del');

const tsk = (callback)=> {
    // что-то делаем
    console.log('Привет, Gulp!');
    callback();
}

