'use strict';

const vm = require ( 'vm' );

debugger
let d;
vm.measureMemory ( { mode: 'summary' } )
    .then ( d => { console.log({d})} );

//(node:11284) ExperimentalWarning: vm.measureMemory is an experimental feature. This feature could change at any time
// (Use `node --trace-warnings ...` to show where the warning was created)

debugger

