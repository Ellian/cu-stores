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

var ControlGameScoreStore = {
    create: function create() {
        var actions = Reflux.createActions(['start', 'stop']);
        var store = Reflux.createStore({
            handles: _cuEvents2['default'].handlesControlGameScore,
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
                _cuEvents2['default'].on(this.handles.topic, function (controlGameScore) {
                    // Update store info
                    store.info = controlGameScore;
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
exports['default'] = ControlGameScoreStore;
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3RzL2NsYXNzZXMvdHMvY2xhc3Nlcy9Db250cm9sR2FtZVNjb3JlU3RvcmUudHMiXSwibmFtZXMiOlsiY3JlYXRlIiwiY3JlYXRlLmluaXQiLCJjcmVhdGUuc3RhcnQiLCJjcmVhdGUuc3RvcCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O3NCQU13QixRQUFROztJQUFwQixNQUFNOzt3QkFDQyxXQUFXOzs7O0FBRTlCLElBQU0scUJBQXFCLEdBQUc7QUFDNUIsVUFBTSxFQUFBLGtCQUFBO0FBQ0pBLFlBQU1BLE9BQU9BLEdBQUdBLE1BQU1BLENBQUNBLGFBQWFBLENBQUNBLENBQUNBLE9BQU9BLEVBQUVBLE1BQU1BLENBQUNBLENBQUNBLENBQUNBO0FBQ3hEQSxZQUFNQSxLQUFLQSxHQUFHQSxNQUFNQSxDQUFDQSxXQUFXQSxDQUFDQTtBQUMvQkEsbUJBQU9BLEVBQUVBLHNCQUFPQSx1QkFBdUJBO0FBQ3ZDQSx1QkFBV0EsRUFBRUEsT0FBT0E7QUFDcEJBLGdCQUFJQSxFQUFBQSxnQkFBQUE7OztBQUdGQyxvQkFBSUEsQ0FBQ0EsSUFBSUEsR0FBR0EsRUFFWEEsQ0FBQ0E7YUFDSEE7QUFDREQsaUJBQUtBLEVBQUFBLGlCQUFBQTtBQUNIRSxvQkFBTUEsS0FBS0EsR0FBR0EsSUFBSUEsQ0FBQ0E7OztBQUluQkEsb0JBQUlBLElBQUlBLENBQUNBLE9BQU9BLEVBQUVBLE9BQU9BO0FBQ3pCQSxvQkFBSUEsQ0FBQ0EsT0FBT0EsR0FBR0EsSUFBSUEsQ0FBQ0E7O0FBR3BCQSxzQ0FBT0EsRUFBRUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsT0FBT0EsQ0FBQ0EsS0FBS0EsRUFBRUEsVUFBQ0EsZ0JBQXFCQSxFQUFBQTs7QUFHbERBLHlCQUFLQSxDQUFDQSxJQUFJQSxHQUFHQSxnQkFBZ0JBLENBQUNBOztBQUc5QkEseUJBQUtBLENBQUNBLE9BQU9BLENBQUNBLEtBQUtBLENBQUNBLElBQUlBLENBQUNBLENBQUNBO2lCQUMzQkEsQ0FBQ0EsQ0FBQ0E7YUFDSkE7QUFDREYsZ0JBQUlBLEVBQUFBLGdCQUFBQTs7YUFFSEc7U0FDRkgsQ0FBQ0EsQ0FBQ0E7QUFFSEEsZUFBT0E7QUFDTEEsaUJBQUtBLEVBQUVBLEtBQUtBO0FBQ1pBLG1CQUFPQSxFQUFFQSxPQUFPQTtTQUNqQkEsQ0FBQ0E7S0FDSEE7Q0FDRixDQUFDO3FCQUVhLHFCQUFxQiIsImZpbGUiOiJ0cy9jbGFzc2VzL0NvbnRyb2xHYW1lU2NvcmVTdG9yZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogVGhpcyBTb3VyY2UgQ29kZSBGb3JtIGlzIHN1YmplY3QgdG8gdGhlIHRlcm1zIG9mIHRoZSBNb3ppbGxhIFB1YmxpY1xuICogTGljZW5zZSwgdi4gMi4wLiBJZiBhIGNvcHkgb2YgdGhlIE1QTCB3YXMgbm90IGRpc3RyaWJ1dGVkIHdpdGggdGhpc1xuICogZmlsZSwgWW91IGNhbiBvYnRhaW4gb25lIGF0IGh0dHA6Ly9tb3ppbGxhLm9yZy9NUEwvMi4wLy5cbiAqL1xuXG5pbXBvcnQgKiBhcyBSZWZsdXggZnJvbSAncmVmbHV4JztcbmltcG9ydCBldmVudHMgZnJvbSAnY3UtZXZlbnRzJztcblxuY29uc3QgQ29udHJvbEdhbWVTY29yZVN0b3JlID0ge1xuICBjcmVhdGUoKSB7XG4gICAgY29uc3QgYWN0aW9ucyA9IFJlZmx1eC5jcmVhdGVBY3Rpb25zKFsnc3RhcnQnLCAnc3RvcCddKTtcbiAgICBjb25zdCBzdG9yZSA9IFJlZmx1eC5jcmVhdGVTdG9yZSh7XG4gICAgICBoYW5kbGVzOiBldmVudHMuaGFuZGxlc0NvbnRyb2xHYW1lU2NvcmUsXG4gICAgICBsaXN0ZW5hYmxlczogYWN0aW9ucyxcbiAgICAgIGluaXQoKSB7XG4gICAgICAgIC8vIEluaXRpYWxpc2UgdGhlIHN0b3JlIGlzIGJhc2ljIGluZm8uICBUaGlzIGlzIHNvIHRoYXQgUmVhY3QgY29tcG9uZW50c1xuICAgICAgICAvLyBjYW4gdXNlIHRoZSBTdG9yZSB0byBpbml0aWFsaXNlIHRoZWlyIHN0YXRlIGluIGdldERlZmF1bHRTdGF0ZSgpLlxuICAgICAgICB0aGlzLmluZm8gPSB7XG5cbiAgICAgICAgfTtcbiAgICAgIH0sXG4gICAgICBzdGFydCgpIHtcbiAgICAgICAgY29uc3Qgc3RvcmUgPSB0aGlzO1xuXG4gICAgICAgIC8vIElmIHRoaXMgc3RvcmUgaGFzIGFscmVhZHkgYmVlbiBzdGFydGVkLCB0aGVuIGluZ29yZSBzdWJzZXF1ZW50IHN0YXJ0XG4gICAgICAgIC8vIHJlcXVlc3RcbiAgICAgICAgaWYgKHRoaXMuc3RhcnRlZCkgcmV0dXJuO1xuICAgICAgICB0aGlzLnN0YXJ0ZWQgPSB0cnVlO1xuXG4gICAgICAgIC8vIExpc3RlbiB0byB0aGUgZXZlbnQgZ3JvdXAgZm9yIHRoaXMgdW5pdCBmcmFtZVxuICAgICAgICBldmVudHMub24odGhpcy5oYW5kbGVzLnRvcGljLCAoY29udHJvbEdhbWVTY29yZTogYW55KSA9PiB7XG5cbiAgICAgICAgICAvLyBVcGRhdGUgc3RvcmUgaW5mb1xuICAgICAgICAgIHN0b3JlLmluZm8gPSBjb250cm9sR2FtZVNjb3JlO1xuXG4gICAgICAgICAgLy8gVHJpZ2dlciBjaGFuZ2VkIG5vdGlmaWNhdGlvbiBmb3IgdGhpcyBzdG9yZVxuICAgICAgICAgIHN0b3JlLnRyaWdnZXIoc3RvcmUuaW5mbyk7XG4gICAgICAgIH0pO1xuICAgICAgfSxcbiAgICAgIHN0b3AoKSB7XG4gICAgICAgIC8vIFRPRE9cbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHJldHVybiB7XG4gICAgICBzdG9yZTogc3RvcmUsXG4gICAgICBhY3Rpb25zOiBhY3Rpb25zXG4gICAgfTtcbiAgfVxufTtcblxuZXhwb3J0IGRlZmF1bHQgQ29udHJvbEdhbWVTY29yZVN0b3JlO1xuIl0sInNvdXJjZVJvb3QiOiIuLi8ifQ==