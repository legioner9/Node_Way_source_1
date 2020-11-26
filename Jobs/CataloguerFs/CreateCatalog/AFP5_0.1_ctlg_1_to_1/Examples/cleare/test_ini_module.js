const Path = require ( 'path' );
const s_Fs = require ( 'st_ini_fs' );
const { arht } = require ( 'st_ini_arht' );
const { anlsFs_1 } = require ( 'st_ini_catFs' );

const arr_names = Object.getOwnPropertyNames ( s_Fs );
arr_names.map ( item => arht.before ( s_Fs[item], module ) );

const funcExamp = require ( '../../index' );
arht.before ( funcExamp, module );

// MODE for behavior
// funcExamp.mode.log = true;
// funcExamp.mode.deb = true;
// funcExamp.mode.debLog = true;
funcExamp.mode.logFs = true;
// funcExamp.mode.stack = true;
funcExamp.preset = { if_basename: true };
debugger
// anlsFs_1.mode.deb = true;
const obj_cat = anlsFs_1 ( 'DIR_root' );
funcExamp ();

debugger
