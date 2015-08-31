/**
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 */
var Reflux = require('reflux');
var cu_events_1 = require('cu-events');
var ControlGameScoreStore = Reflux.createStore({
    handles: cu_events_1["default"].handlesControlGameScore,
    listenables: cu_events_1["default"].handlesControlGameScore.action,
    start: function () {
        console.log("ControlGameScoreStore: start()");
        var store = this;
        // If this store has already been started, then ingore subsequent start 
        // request
        if (this.started)
            return;
        this.started = true;
        // Initialise the store is basic info.  This is so that React components
        // can use the Store to initialise their state in getDefaultState().
        store.info = {};
        // Listen to the event group for this unit frame
        cu_events_1["default"].on(this.handles.name, function (controlGameScore) {
            // Update store info
            store.info = controlGameScore;
            // Trigger changed notification for this store
            store.trigger(store.info);
        });
    },
    stop: function () {
        console.log("ControlGameScoreStore: stop()");
        // TODO
    }
});
exports.__esModule = true;
exports["default"] = ControlGameScoreStore;
