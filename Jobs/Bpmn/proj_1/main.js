'use strict'

const Fs = require('fs');

const pars = require('./lib/pars');
const tasks = require('./lib/tasks')
debugger
const o = Fs.readFileSync('./xml/1.xml')

const obj_from_xml = pars('./xml/1.xml');
debugger
