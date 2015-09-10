/**
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 */
'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj['default'] = obj; return newObj; } }

var _reflux = require('reflux');

var Reflux = _interopRequireWildcard(_reflux);

var _cuEvents = require('cu-events');

var _cuEvents2 = _interopRequireDefault(_cuEvents);

var AnnouncementsStore = {
    create: function create() {
        var actions = Reflux.createActions(['start', 'stop']);
        var store = Reflux.createStore({
            handles: _cuEvents2['default'].handlesAnnouncements,
            listenables: actions,
            init: function init() {
                // Initialise the store is basic info.  This is so that React components
                // can use the Store to initialise their state in getDefaultState().
                this.info = {
                    message: "",
                    type: -1
                };
            },
            start: function start() {
                console.log('in AnnouncementStore:start()');
                var store = this;
                // If this store has already been started, then ingore subsequent start
                // request
                if (this.started) return;
                this.started = true;
                // Listen to the event group for this unit frame
                _cuEvents2['default'].on(this.handles.topic, function (announcement) {
                    // Update store info
                    store.info = {
                        message: announcement.message,
                        type: announcement.type
                    };
                    // Trigger changed notification for this store
                    store.trigger(store.info);
                });
            },
            stop: function stop() {
                // TODO
            }
        });
        return {
            store: store,
            actions: actions
        };
    }
};
exports['default'] = AnnouncementsStore;
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3RzL2NsYXNzZXMvdHMvY2xhc3Nlcy9Bbm5vdW5jZW1lbnRzU3RvcmUudHMiXSwibmFtZXMiOlsiY3JlYXRlIiwiY3JlYXRlLmluaXQiLCJjcmVhdGUuc3RhcnQiLCJjcmVhdGUuc3RvcCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O3NCQU13QixRQUFROztJQUFwQixNQUFNOzt3QkFDQyxXQUFXOzs7O0FBRTlCLElBQU0sa0JBQWtCLEdBQUc7QUFDekIsVUFBTSxFQUFBLGtCQUFBO0FBQ0pBLFlBQU1BLE9BQU9BLEdBQUdBLE1BQU1BLENBQUNBLGFBQWFBLENBQUNBLENBQUNBLE9BQU9BLEVBQUVBLE1BQU1BLENBQUNBLENBQUNBLENBQUNBO0FBQ3hEQSxZQUFNQSxLQUFLQSxHQUFHQSxNQUFNQSxDQUFDQSxXQUFXQSxDQUFDQTtBQUMvQkEsbUJBQU9BLEVBQUVBLHNCQUFPQSxvQkFBb0JBO0FBQ3BDQSx1QkFBV0EsRUFBRUEsT0FBT0E7QUFDcEJBLGdCQUFJQSxFQUFBQSxnQkFBQUE7OztBQUdGQyxvQkFBSUEsQ0FBQ0EsSUFBSUEsR0FBR0E7QUFDVkEsMkJBQU9BLEVBQUVBLEVBQUVBO0FBQ1hBLHdCQUFJQSxFQUFFQSxDQUFDQSxDQUFDQTtpQkFDVEEsQ0FBQ0E7YUFDSEE7QUFDREQsaUJBQUtBLEVBQUFBLGlCQUFBQTtBQUNIRSx1QkFBT0EsQ0FBQ0EsR0FBR0EsQ0FBQ0EsOEJBQThCQSxDQUFDQSxDQUFDQTtBQUM1Q0Esb0JBQU1BLEtBQUtBLEdBQUdBLElBQUlBLENBQUNBOzs7QUFJbkJBLG9CQUFJQSxJQUFJQSxDQUFDQSxPQUFPQSxFQUFFQSxPQUFPQTtBQUN6QkEsb0JBQUlBLENBQUNBLE9BQU9BLEdBQUdBLElBQUlBLENBQUNBOztBQUdwQkEsc0NBQU9BLEVBQUVBLENBQUNBLElBQUlBLENBQUNBLE9BQU9BLENBQUNBLEtBQUtBLEVBQUVBLFVBQUNBLFlBQWlCQSxFQUFBQTs7QUFHOUNBLHlCQUFLQSxDQUFDQSxJQUFJQSxHQUFHQTtBQUNYQSwrQkFBT0EsRUFBRUEsWUFBWUEsQ0FBQ0EsT0FBT0E7QUFDN0JBLDRCQUFJQSxFQUFFQSxZQUFZQSxDQUFDQSxJQUFJQTtxQkFDeEJBLENBQUNBOztBQUdGQSx5QkFBS0EsQ0FBQ0EsT0FBT0EsQ0FBQ0EsS0FBS0EsQ0FBQ0EsSUFBSUEsQ0FBQ0EsQ0FBQ0E7aUJBQzNCQSxDQUFDQSxDQUFDQTthQUNKQTtBQUNERixnQkFBSUEsRUFBQUEsZ0JBQUFBOzthQUVIRztTQUNGSCxDQUFDQSxDQUFDQTtBQUVIQSxlQUFPQTtBQUNMQSxpQkFBS0EsRUFBRUEsS0FBS0E7QUFDWkEsbUJBQU9BLEVBQUVBLE9BQU9BO1NBQ2pCQSxDQUFDQTtLQUNIQTtDQUNGLENBQUM7cUJBQ2Esa0JBQWtCIiwiZmlsZSI6InRzL2NsYXNzZXMvQW5ub3VuY2VtZW50c1N0b3JlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBUaGlzIFNvdXJjZSBDb2RlIEZvcm0gaXMgc3ViamVjdCB0byB0aGUgdGVybXMgb2YgdGhlIE1vemlsbGEgUHVibGljXG4gKiBMaWNlbnNlLCB2LiAyLjAuIElmIGEgY29weSBvZiB0aGUgTVBMIHdhcyBub3QgZGlzdHJpYnV0ZWQgd2l0aCB0aGlzXG4gKiBmaWxlLCBZb3UgY2FuIG9idGFpbiBvbmUgYXQgaHR0cDovL21vemlsbGEub3JnL01QTC8yLjAvLlxuICovXG5cbmltcG9ydCAqIGFzIFJlZmx1eCBmcm9tICdyZWZsdXgnO1xuaW1wb3J0IGV2ZW50cyBmcm9tICdjdS1ldmVudHMnO1xuXG5jb25zdCBBbm5vdW5jZW1lbnRzU3RvcmUgPSB7XG4gIGNyZWF0ZSgpIHtcbiAgICBjb25zdCBhY3Rpb25zID0gUmVmbHV4LmNyZWF0ZUFjdGlvbnMoWydzdGFydCcsICdzdG9wJ10pO1xuICAgIGNvbnN0IHN0b3JlID0gUmVmbHV4LmNyZWF0ZVN0b3JlKHtcbiAgICAgIGhhbmRsZXM6IGV2ZW50cy5oYW5kbGVzQW5ub3VuY2VtZW50cyxcbiAgICAgIGxpc3RlbmFibGVzOiBhY3Rpb25zLFxuICAgICAgaW5pdCgpIHtcbiAgICAgICAgLy8gSW5pdGlhbGlzZSB0aGUgc3RvcmUgaXMgYmFzaWMgaW5mby4gIFRoaXMgaXMgc28gdGhhdCBSZWFjdCBjb21wb25lbnRzXG4gICAgICAgIC8vIGNhbiB1c2UgdGhlIFN0b3JlIHRvIGluaXRpYWxpc2UgdGhlaXIgc3RhdGUgaW4gZ2V0RGVmYXVsdFN0YXRlKCkuXG4gICAgICAgIHRoaXMuaW5mbyA9IHtcbiAgICAgICAgICBtZXNzYWdlOiBcIlwiLFxuICAgICAgICAgIHR5cGU6IC0xXG4gICAgICAgIH07XG4gICAgICB9LFxuICAgICAgc3RhcnQoKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdpbiBBbm5vdW5jZW1lbnRTdG9yZTpzdGFydCgpJyk7XG4gICAgICAgIGNvbnN0IHN0b3JlID0gdGhpcztcblxuICAgICAgICAvLyBJZiB0aGlzIHN0b3JlIGhhcyBhbHJlYWR5IGJlZW4gc3RhcnRlZCwgdGhlbiBpbmdvcmUgc3Vic2VxdWVudCBzdGFydFxuICAgICAgICAvLyByZXF1ZXN0XG4gICAgICAgIGlmICh0aGlzLnN0YXJ0ZWQpIHJldHVybjtcbiAgICAgICAgdGhpcy5zdGFydGVkID0gdHJ1ZTtcblxuICAgICAgICAvLyBMaXN0ZW4gdG8gdGhlIGV2ZW50IGdyb3VwIGZvciB0aGlzIHVuaXQgZnJhbWVcbiAgICAgICAgZXZlbnRzLm9uKHRoaXMuaGFuZGxlcy50b3BpYywgKGFubm91bmNlbWVudDogYW55KSA9PiB7XG5cbiAgICAgICAgICAvLyBVcGRhdGUgc3RvcmUgaW5mb1xuICAgICAgICAgIHN0b3JlLmluZm8gPSB7XG4gICAgICAgICAgICBtZXNzYWdlOiBhbm5vdW5jZW1lbnQubWVzc2FnZSxcbiAgICAgICAgICAgIHR5cGU6IGFubm91bmNlbWVudC50eXBlXG4gICAgICAgICAgfTtcblxuICAgICAgICAgIC8vIFRyaWdnZXIgY2hhbmdlZCBub3RpZmljYXRpb24gZm9yIHRoaXMgc3RvcmVcbiAgICAgICAgICBzdG9yZS50cmlnZ2VyKHN0b3JlLmluZm8pO1xuICAgICAgICB9KTtcbiAgICAgIH0sXG4gICAgICBzdG9wKCkge1xuICAgICAgICAvLyBUT0RPXG4gICAgICB9XG4gICAgfSk7XG5cbiAgICByZXR1cm4ge1xuICAgICAgc3RvcmU6IHN0b3JlLFxuICAgICAgYWN0aW9uczogYWN0aW9uc1xuICAgIH07XG4gIH1cbn07XG5leHBvcnQgZGVmYXVsdCBBbm5vdW5jZW1lbnRzU3RvcmU7XG4iXSwic291cmNlUm9vdCI6Ii4uLyJ9