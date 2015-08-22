var Reflux = require('reflux');
var cu_events_1 = require('cu-events');
var _UnitFrame_1 = require('./_UnitFrame');
var EnemyTargetStore = {
    create: function () {
        return Reflux.createStore({
            mixins: [_UnitFrame_1["default"]],
            handles: cu_events_1["default"].handlesEnemyTarget
        });
    }
};
exports.__esModule = true;
exports["default"] = EnemyTargetStore;
