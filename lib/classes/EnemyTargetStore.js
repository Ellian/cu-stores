/**
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 */
var Reflux = require('reflux');
var cu_events_1 = require('cu-events');
var _UnitFrame_1 = require('./_UnitFrame');
var EnemyTargetStore = Reflux.createStore({
    mixins: [_UnitFrame_1["default"]],
    handles: cu_events_1["default"].handlesEnemyTarget,
    listenables: cu_events_1["default"].handlesEnemyTarget.action
});
exports.__esModule = true;
exports["default"] = EnemyTargetStore;
