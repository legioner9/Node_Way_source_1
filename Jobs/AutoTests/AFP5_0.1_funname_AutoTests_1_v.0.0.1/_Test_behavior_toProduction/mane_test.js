const Arht = require ( 'st_arht' );
const arht_fm = Arht.SetArchetype.FunctionARHT.AtOut_fm;
const Func_examp = require ( '../index' );

// event report out (export from) Func_examp:

// Func_examp.event.once ( '_start', function ( ENV ) {
//     Func_examp.dirDeepOptions ( ENV );
// }, Func_examp );
//
// Func_examp.event.once ( '_innerState', function ( innerState ) {
//     Func_examp.dirDeepOptions ( innerState );
// }, Func_examp );

Func_examp.event.once('send_from_func',d => console.log(' send_from_func = ',d))

// define report behaviour :

Func_examp.mode.log = true;
Func_examp.mode.deb = true;
Func_examp.mode.debLog = true;
Func_examp.mode.logFs = true;
Func_examp.mode.stack = true;

// BOUNDEN CALL define root_path
arht_fm.before ( Func_examp, module );
debugger

// RUN the Function
Func_examp ();

debugger
// AFTER Func_examp () , s.t. 'externalState' not exists yet > event transport to (import to) Func_examp:
Func_examp.event.emit ( 'send_to_func', 'content to send_to_func' ); //
Func_examp.event.emit ( 'send_to_func_ce', 'content to send_to_func_ce' ); //

debugger
