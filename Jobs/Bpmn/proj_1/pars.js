'use strict'

const fs = require('fs');
const  xml2json = require('xml2json');

module.exports = function(path_to_xml){
debugger
try{const xml = fs.readFileSync(path_to_xml,'utf-8');}
catch (e){
    console.log(e.message);
}

const sobj_max = JSON.parse(xml2json.toJson(sxml_max));

return sobj_max

}