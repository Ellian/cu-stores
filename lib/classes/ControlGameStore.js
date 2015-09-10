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

var ControlGameStore = {
    create: function create() {
        var actions = Reflux.createActions(['start', 'stop']);
        var store = Reflux.createStore({
            handles: _cuEvents2['default'].handlesControlGame,
            listenables: actions,
            init: function init() {
                // Initialise the store is basic info.  This is so that React components
                // can use the Store to initialise their state in getDefaultState().
                this.info = {};
            },
            start: function start() {
                var store = this;
                // If this store has already been started, then ingore subsequent start
                // request
                if (this.started) return;
                this.started = true;
                // Listen to the event group for this unit frame
                _cuEvents2['default'].on(this.handles.topic, function (controlGame) {
                    // Update store info
                    store.info = controlGame;
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
exports['default'] = ControlGameStore;
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3RzL2NsYXNzZXMvdHMvY2xhc3Nlcy9Db250cm9sR2FtZVN0b3JlLnRzIl0sIm5hbWVzIjpbImNyZWF0ZSIsImNyZWF0ZS5pbml0IiwiY3JlYXRlLnN0YXJ0IiwiY3JlYXRlLnN0b3AiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztzQkFNd0IsUUFBUTs7SUFBcEIsTUFBTTs7d0JBQ0MsV0FBVzs7OztBQUU5QixJQUFNLGdCQUFnQixHQUFHO0FBQ3ZCLFVBQU0sRUFBQSxrQkFBQTtBQUNKQSxZQUFNQSxPQUFPQSxHQUFHQSxNQUFNQSxDQUFDQSxhQUFhQSxDQUFDQSxDQUFDQSxPQUFPQSxFQUFFQSxNQUFNQSxDQUFDQSxDQUFDQSxDQUFDQTtBQUN4REEsWUFBTUEsS0FBS0EsR0FBR0EsTUFBTUEsQ0FBQ0EsV0FBV0EsQ0FBQ0E7QUFDL0JBLG1CQUFPQSxFQUFFQSxzQkFBT0Esa0JBQWtCQTtBQUNsQ0EsdUJBQVdBLEVBQUVBLE9BQU9BO0FBQ3BCQSxnQkFBSUEsRUFBQUEsZ0JBQUFBOzs7QUFHRkMsb0JBQUlBLENBQUNBLElBQUlBLEdBQUdBLEVBRVhBLENBQUNBO2FBQ0hBO0FBQ0RELGlCQUFLQSxFQUFBQSxpQkFBQUE7QUFDSEUsb0JBQU1BLEtBQUtBLEdBQUdBLElBQUlBLENBQUNBOzs7QUFJbkJBLG9CQUFJQSxJQUFJQSxDQUFDQSxPQUFPQSxFQUFFQSxPQUFPQTtBQUN6QkEsb0JBQUlBLENBQUNBLE9BQU9BLEdBQUdBLElBQUlBLENBQUNBOztBQUlwQkEsc0NBQU9BLEVBQUVBLENBQUNBLElBQUlBLENBQUNBLE9BQU9BLENBQUNBLEtBQUtBLEVBQUVBLFVBQUNBLFdBQWdCQSxFQUFBQTs7QUFHN0NBLHlCQUFLQSxDQUFDQSxJQUFJQSxHQUFHQSxXQUFXQSxDQUFDQTs7QUFHekJBLHlCQUFLQSxDQUFDQSxPQUFPQSxDQUFDQSxLQUFLQSxDQUFDQSxJQUFJQSxDQUFDQSxDQUFDQTtpQkFDM0JBLENBQUNBLENBQUNBO2FBQ0pBO0FBQ0RGLGdCQUFJQSxFQUFBQSxnQkFBQUE7O2FBRUhHO1NBQ0ZILENBQUNBLENBQUNBO0FBQ0hBLGVBQU9BO0FBQ0xBLGlCQUFLQSxFQUFFQSxLQUFLQTtBQUNaQSxtQkFBT0EsRUFBRUEsT0FBT0E7U0FDakJBLENBQUNBO0tBQ0hBO0NBQ0YsQ0FBQztxQkFFYSxnQkFBZ0IiLCJmaWxlIjoidHMvY2xhc3Nlcy9Db250cm9sR2FtZVN0b3JlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBUaGlzIFNvdXJjZSBDb2RlIEZvcm0gaXMgc3ViamVjdCB0byB0aGUgdGVybXMgb2YgdGhlIE1vemlsbGEgUHVibGljXG4gKiBMaWNlbnNlLCB2LiAyLjAuIElmIGEgY29weSBvZiB0aGUgTVBMIHdhcyBub3QgZGlzdHJpYnV0ZWQgd2l0aCB0aGlzXG4gKiBmaWxlLCBZb3UgY2FuIG9idGFpbiBvbmUgYXQgaHR0cDovL21vemlsbGEub3JnL01QTC8yLjAvLlxuICovXG5cbmltcG9ydCAqIGFzIFJlZmx1eCBmcm9tICdyZWZsdXgnO1xuaW1wb3J0IGV2ZW50cyBmcm9tICdjdS1ldmVudHMnO1xuXG5jb25zdCBDb250cm9sR2FtZVN0b3JlID0ge1xuICBjcmVhdGUoKSB7XG4gICAgY29uc3QgYWN0aW9ucyA9IFJlZmx1eC5jcmVhdGVBY3Rpb25zKFsnc3RhcnQnLCAnc3RvcCddKTtcbiAgICBjb25zdCBzdG9yZSA9IFJlZmx1eC5jcmVhdGVTdG9yZSh7XG4gICAgICBoYW5kbGVzOiBldmVudHMuaGFuZGxlc0NvbnRyb2xHYW1lLFxuICAgICAgbGlzdGVuYWJsZXM6IGFjdGlvbnMsXG4gICAgICBpbml0KCkge1xuICAgICAgICAvLyBJbml0aWFsaXNlIHRoZSBzdG9yZSBpcyBiYXNpYyBpbmZvLiAgVGhpcyBpcyBzbyB0aGF0IFJlYWN0IGNvbXBvbmVudHNcbiAgICAgICAgLy8gY2FuIHVzZSB0aGUgU3RvcmUgdG8gaW5pdGlhbGlzZSB0aGVpciBzdGF0ZSBpbiBnZXREZWZhdWx0U3RhdGUoKS5cbiAgICAgICAgdGhpcy5pbmZvID0ge1xuXG4gICAgICAgIH07XG4gICAgICB9LFxuICAgICAgc3RhcnQoKSB7XG4gICAgICAgIGNvbnN0IHN0b3JlID0gdGhpcztcblxuICAgICAgICAvLyBJZiB0aGlzIHN0b3JlIGhhcyBhbHJlYWR5IGJlZW4gc3RhcnRlZCwgdGhlbiBpbmdvcmUgc3Vic2VxdWVudCBzdGFydFxuICAgICAgICAvLyByZXF1ZXN0XG4gICAgICAgIGlmICh0aGlzLnN0YXJ0ZWQpIHJldHVybjtcbiAgICAgICAgdGhpcy5zdGFydGVkID0gdHJ1ZTtcblxuXG4gICAgICAgIC8vIExpc3RlbiB0byB0aGUgZXZlbnQgZ3JvdXAgZm9yIHRoaXMgdW5pdCBmcmFtZVxuICAgICAgICBldmVudHMub24odGhpcy5oYW5kbGVzLnRvcGljLCAoY29udHJvbEdhbWU6IGFueSkgPT4ge1xuXG4gICAgICAgICAgLy8gVXBkYXRlIHN0b3JlIGluZm9cbiAgICAgICAgICBzdG9yZS5pbmZvID0gY29udHJvbEdhbWU7XG5cbiAgICAgICAgICAvLyBUcmlnZ2VyIGNoYW5nZWQgbm90aWZpY2F0aW9uIGZvciB0aGlzIHN0b3JlXG4gICAgICAgICAgc3RvcmUudHJpZ2dlcihzdG9yZS5pbmZvKTtcbiAgICAgICAgfSk7XG4gICAgICB9LFxuICAgICAgc3RvcCgpIHtcbiAgICAgICAgLy8gVE9ET1xuICAgICAgfVxuICAgIH0pO1xuICAgIHJldHVybiB7XG4gICAgICBzdG9yZTogc3RvcmUsXG4gICAgICBhY3Rpb25zOiBhY3Rpb25zXG4gICAgfTtcbiAgfVxufTtcblxuZXhwb3J0IGRlZmF1bHQgQ29udHJvbEdhbWVTdG9yZTtcbiJdLCJzb3VyY2VSb290IjoiLi4vIn0=