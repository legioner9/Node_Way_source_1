const xml2js = require('xml2js');
const fs = require('fs');
const  xml2json = require('xml2json');




const parseString = xml2js.parseString;
const sxml = fs.readFileSync('./xml/1.xml','utf-8');
const sxml_max = fs.readFileSync('./xml/min_proj.bpmn.xml','utf-8');

const sjson = xml2json.toJson(sxml);
const sobj = JSON.parse(sjson);
const sobj_max = JSON.parse(xml2json.toJson(sxml_max));
debugger