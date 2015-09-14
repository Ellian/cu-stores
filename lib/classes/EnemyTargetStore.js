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

var _UnitFrame2 = require('./_UnitFrame');

var _UnitFrame3 = _interopRequireDefault(_UnitFrame2);

var EnemyTargetStore = {
    create: function create() {
        var actions = Reflux.createActions(['start', 'stop']);
        var store = Reflux.createStore({
            mixins: [_UnitFrame3['default']],
            handles: _cuEvents2['default'].handlesEnemyTarget,
            listenables: actions
        });
        return {
            store: store,
            actions: actions
        };
    }
};
exports['default'] = EnemyTargetStore;
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3RzL2NsYXNzZXMvdHMvY2xhc3Nlcy9FbmVteVRhcmdldFN0b3JlLnRzIl0sIm5hbWVzIjpbImNyZWF0ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O3NCQU13QixRQUFROztJQUFwQixNQUFNOzt3QkFDQyxXQUFXOzs7OzBCQUNQLGNBQWM7Ozs7QUFFckMsSUFBTSxnQkFBZ0IsR0FBRztBQUN2QixVQUFNLEVBQUEsa0JBQUE7QUFDSkEsWUFBTUEsT0FBT0EsR0FBR0EsTUFBTUEsQ0FBQ0EsYUFBYUEsQ0FBQ0EsQ0FBQ0EsT0FBT0EsRUFBRUEsTUFBTUEsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7QUFDeERBLFlBQU1BLEtBQUtBLEdBQUdBLE1BQU1BLENBQUNBLFdBQVdBLENBQUNBO0FBQy9CQSxrQkFBTUEsRUFBRUEsd0JBQVlBO0FBQ3BCQSxtQkFBT0EsRUFBRUEsc0JBQU9BLGtCQUFrQkE7QUFDbENBLHVCQUFXQSxFQUFFQSxPQUFPQTtTQUNyQkEsQ0FBQ0EsQ0FBQ0E7QUFDSEEsZUFBT0E7QUFDTEEsaUJBQUtBLEVBQUVBLEtBQUtBO0FBQ1pBLG1CQUFPQSxFQUFFQSxPQUFPQTtTQUNqQkEsQ0FBQ0E7S0FDSEE7Q0FDRixDQUFDO3FCQUVhLGdCQUFnQiIsImZpbGUiOiJ0cy9jbGFzc2VzL0VuZW15VGFyZ2V0U3RvcmUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIFRoaXMgU291cmNlIENvZGUgRm9ybSBpcyBzdWJqZWN0IHRvIHRoZSB0ZXJtcyBvZiB0aGUgTW96aWxsYSBQdWJsaWNcbiAqIExpY2Vuc2UsIHYuIDIuMC4gSWYgYSBjb3B5IG9mIHRoZSBNUEwgd2FzIG5vdCBkaXN0cmlidXRlZCB3aXRoIHRoaXNcbiAqIGZpbGUsIFlvdSBjYW4gb2J0YWluIG9uZSBhdCBodHRwOi8vbW96aWxsYS5vcmcvTVBMLzIuMC8uXG4gKi9cblxuaW1wb3J0ICogYXMgUmVmbHV4IGZyb20gJ3JlZmx1eCc7XG5pbXBvcnQgZXZlbnRzIGZyb20gJ2N1LWV2ZW50cyc7XG5pbXBvcnQgX1VuaXRGcmFtZSBmcm9tICcuL19Vbml0RnJhbWUnO1xuXG5jb25zdCBFbmVteVRhcmdldFN0b3JlID0ge1xuICBjcmVhdGUoKSB7XG4gICAgY29uc3QgYWN0aW9ucyA9IFJlZmx1eC5jcmVhdGVBY3Rpb25zKFsnc3RhcnQnLCAnc3RvcCddKTtcbiAgICBjb25zdCBzdG9yZSA9IFJlZmx1eC5jcmVhdGVTdG9yZSh7XG4gICAgICBtaXhpbnM6IFtfVW5pdEZyYW1lXSxcbiAgICAgIGhhbmRsZXM6IGV2ZW50cy5oYW5kbGVzRW5lbXlUYXJnZXQsXG4gICAgICBsaXN0ZW5hYmxlczogYWN0aW9uc1xuICAgIH0pO1xuICAgIHJldHVybiB7XG4gICAgICBzdG9yZTogc3RvcmUsXG4gICAgICBhY3Rpb25zOiBhY3Rpb25zXG4gICAgfTtcbiAgfVxufTtcblxuZXhwb3J0IGRlZmF1bHQgRW5lbXlUYXJnZXRTdG9yZTtcbiJdLCJzb3VyY2VSb290IjoiLi4vIn0=
