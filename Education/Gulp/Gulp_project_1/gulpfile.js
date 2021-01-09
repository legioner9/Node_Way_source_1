'use strict';

const {src, dest, watch, series, parallel} = require('gulp');
const del = require('del');

const tN = (callback)=> {
    // что-то делаем
    console.log('Привет, Gulp!');
    callback();
}

function yourTask_1() {
    return src('app/assets/css/**.css')   // выбираем все css-файлы
        // что-то делаем
        .pipe(dest('dist/assets/css/'))   // и выгружаем
}
function yourTask_2() {
    return src('app/assets/css/**.css')   // выбираем все css-файлы
        // что-то делаем
        .pipe(dest('dist/assets/css/'))   // и выгружаем
}

function clean() {
    return del('./dist/');
}
exports.clean = clean;

// src (sourse) - выбираем файлы для обработки;
// dest (destination) - место назначения.
// app/**/*.* - выбор всех файлов в папке app;
// app/js/**/*.js - выбор всех js файлов в папке js;
// app/**/*.{css,js} - все css и js файлы в папке app;
// app/{folder1,folder2}/**/*.{js,css} - все js и css-файлы в папках folder1 и folder2;
// ['app/**/*.css', 'app/**/*.js'] - получаем сначала все css, потом все js в папке app;
// ['app/**/*.*', '!app/**/*.js'] - все файлы в папке app, кроме js-файлов. (! - знак исключения).

exports.parallel_series = series(clean() , series (yourTask_1,yourTask_2))

