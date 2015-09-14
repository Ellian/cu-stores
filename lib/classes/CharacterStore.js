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

var CharacterStore = {
    create: function create() {
        var actions = Reflux.createActions(['start', 'stop']);
        var store = Reflux.createStore({
            mixins: [_UnitFrame3['default']],
            handles: _cuEvents2['default'].handlesCharacter,
            listenables: actions
        });
        return {
            store: store,
            actions: actions
        };
    }
};
exports['default'] = CharacterStore;
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3RzL2NsYXNzZXMvdHMvY2xhc3Nlcy9DaGFyYWN0ZXJTdG9yZS50cyJdLCJuYW1lcyI6WyJjcmVhdGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztzQkFNd0IsUUFBUTs7SUFBcEIsTUFBTTs7d0JBQ0MsV0FBVzs7OzswQkFDUCxjQUFjOzs7O0FBRXJDLElBQU0sY0FBYyxHQUFHO0FBQ3JCLFVBQU0sRUFBQSxrQkFBQTtBQUNKQSxZQUFNQSxPQUFPQSxHQUFHQSxNQUFNQSxDQUFDQSxhQUFhQSxDQUFDQSxDQUFDQSxPQUFPQSxFQUFFQSxNQUFNQSxDQUFDQSxDQUFDQSxDQUFDQTtBQUN4REEsWUFBTUEsS0FBS0EsR0FBR0EsTUFBTUEsQ0FBQ0EsV0FBV0EsQ0FBQ0E7QUFDL0JBLGtCQUFNQSxFQUFFQSx3QkFBWUE7QUFDcEJBLG1CQUFPQSxFQUFFQSxzQkFBT0EsZ0JBQWdCQTtBQUNoQ0EsdUJBQVdBLEVBQUVBLE9BQU9BO1NBQ3JCQSxDQUFDQSxDQUFDQTtBQUNIQSxlQUFPQTtBQUNMQSxpQkFBS0EsRUFBRUEsS0FBS0E7QUFDWkEsbUJBQU9BLEVBQUVBLE9BQU9BO1NBQ2pCQSxDQUFDQTtLQUNIQTtDQUNGLENBQUM7cUJBRWEsY0FBYyIsImZpbGUiOiJ0cy9jbGFzc2VzL0NoYXJhY3RlclN0b3JlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBUaGlzIFNvdXJjZSBDb2RlIEZvcm0gaXMgc3ViamVjdCB0byB0aGUgdGVybXMgb2YgdGhlIE1vemlsbGEgUHVibGljXG4gKiBMaWNlbnNlLCB2LiAyLjAuIElmIGEgY29weSBvZiB0aGUgTVBMIHdhcyBub3QgZGlzdHJpYnV0ZWQgd2l0aCB0aGlzXG4gKiBmaWxlLCBZb3UgY2FuIG9idGFpbiBvbmUgYXQgaHR0cDovL21vemlsbGEub3JnL01QTC8yLjAvLlxuICovXG5cbmltcG9ydCAqIGFzIFJlZmx1eCBmcm9tICdyZWZsdXgnO1xuaW1wb3J0IGV2ZW50cyBmcm9tICdjdS1ldmVudHMnO1xuaW1wb3J0IF9Vbml0RnJhbWUgZnJvbSAnLi9fVW5pdEZyYW1lJztcblxuY29uc3QgQ2hhcmFjdGVyU3RvcmUgPSB7XG4gIGNyZWF0ZSgpIHtcbiAgICBjb25zdCBhY3Rpb25zID0gUmVmbHV4LmNyZWF0ZUFjdGlvbnMoWydzdGFydCcsICdzdG9wJ10pO1xuICAgIGNvbnN0IHN0b3JlID0gUmVmbHV4LmNyZWF0ZVN0b3JlKHtcbiAgICAgIG1peGluczogW19Vbml0RnJhbWVdLFxuICAgICAgaGFuZGxlczogZXZlbnRzLmhhbmRsZXNDaGFyYWN0ZXIsXG4gICAgICBsaXN0ZW5hYmxlczogYWN0aW9uc1xuICAgIH0pO1xuICAgIHJldHVybiB7XG4gICAgICBzdG9yZTogc3RvcmUsXG4gICAgICBhY3Rpb25zOiBhY3Rpb25zXG4gICAgfTtcbiAgfVxufTtcblxuZXhwb3J0IGRlZmF1bHQgQ2hhcmFjdGVyU3RvcmU7XG4iXSwic291cmNlUm9vdCI6Ii4uLyJ9
