/**
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 */
var Reflux = require('reflux');
var cu_events_1 = require('cu-events');
var AnnouncementsStore = {
    create: function () {
        var actions = Reflux.createActions(['start', 'stop']);
        var store = Reflux.createStore({
            handles: cu_events_1["default"].handlesAnnouncements,
            listenables: actions,
            init: function () {
                // Initialise the store is basic info.  This is so that React components
                // can use the Store to initialise their state in getDefaultState().
                this.info = {
                    message: "",
                    type: -1
                };
            },
            start: function () {
                console.log('in AnnouncementStore:start()');
                var store = this;
                // If this store has already been started, then ingore subsequent start 
                // request
                if (this.started)
                    return;
                this.started = true;
                // Listen to the event group for this unit frame
                cu_events_1["default"].on(this.handles.topic, function (announcement) {
                    // Update store info
                    store.info = {
                        message: announcement.message,
                        type: announcement.type
                    };
                    // Trigger changed notification for this store
                    store.trigger(store.info);
                });
            },
            stop: function () {
                // TODO
            }
        });
        return {
            store: store,
            actions: actions
        };
    }
};
exports.__esModule = true;
exports["default"] = AnnouncementsStore;
