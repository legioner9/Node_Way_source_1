const Path = require ( 'path' );
const s_Fs = require ( 'st_ini_fs' );
const { arht } = require ( 'st_ini_arht' );

const arr_names = Object.getOwnPropertyNames ( s_Fs );
arr_names.map ( item => arht.before ( s_Fs[item], module ) );
