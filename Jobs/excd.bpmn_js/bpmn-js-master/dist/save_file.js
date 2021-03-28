const Fs = require ( 'fs' );

const save_file = ( path, data ) => {
Fs.writeFileSync(path,data)
};
