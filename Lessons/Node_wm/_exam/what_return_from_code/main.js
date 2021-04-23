'use strict';
const vm = require ( 'vm' );
debugger
const is = vm.runInThisContext( `d => d+3` );
console.log(is ( 5 ));
