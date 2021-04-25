const { _require } = require ( 'st_require' );
const arht = new ( _require ( '_aop' ).archetypes.class.arht );
const _node = _require ( '_node' );
const _utest = _require ( '_utest' );

const PRSING_TIMEOUT = 1000;
const EXECUTION_TIMEOUT = 5000;

const { wm } = _node;

const __node = Object.assign ( {}, _node );
delete __node.fs



