'use strict';

const intl = Intl;
const out_1 = new Intl.NumberFormat().format(2345234.234) // "2 345 234,234"
const out_2 = new Intl.NumberFormat('de-DE').format(2345234.234) // "2.345.234,234"
const out_3 = new Intl.NumberFormat("zh-HK").format(2345234.234) // "2,345,234.234"
const out_4 = new Intl.NumberFormat().format(2345234.234) // "2 345 234,234"


debugger
