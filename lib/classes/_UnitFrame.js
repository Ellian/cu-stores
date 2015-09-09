/**
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 */
var cu_events_1 = require('cu-events');
var cu_core_1 = require('cu-core');
var _UnitFrame = {
    started: false,
    init: function () {
        // Initialise the store is basic info.  This is so that React components
        // can use the Store to initialise their state in getDefaultState().
        this.info = new cu_core_1.Combatant({});
    },
    start: function () {
        var store = this;
        // If this store has already been started, then ingore subsequent start 
        // request
        if (this.started)
            return;
        this.started = true;
        // Listen to the event group for this unit frame
        cu_events_1["default"].on(this.handles.topic, function (instance) {
            // Update store info
            store.info = instance;
            // Trigger changed notification for this store
            store.trigger(store.info);
        });
    },
    stop: function () {
        // TODO()
    }
};
exports.__esModule = true;
exports["default"] = _UnitFrame;
