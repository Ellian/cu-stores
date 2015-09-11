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

var _cuEvents = require('cu-events');

var _cuEvents2 = _interopRequireDefault(_cuEvents);

var _cuCore = require('cu-core');

var _UnitFrame = {
    started: false,
    init: function init() {
        // Initialise the store is basic info.  This is so that React components
        // can use the Store to initialise their state in getDefaultState().
        this.info = new _cuCore.Combatant({});
    },
    start: function start() {
        var store = this;
        // If this store has already been started, then ingore subsequent start
        // request
        if (this.started) return;
        this.started = true;
        // Listen to the event group for this unit frame
        _cuEvents2['default'].on(this.handles.topic, function (instance) {
            // Update store info
            store.info = instance;
            // Trigger changed notification for this store
            store.trigger(store.info);
        });
    },
    stop: function stop() {
        // TODO()
    }
};
exports['default'] = _UnitFrame;
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3RzL2NsYXNzZXMvdHMvY2xhc3Nlcy9fVW5pdEZyYW1lLnRzIl0sIm5hbWVzIjpbImluaXQiLCJzdGFydCIsInN0b3AiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7d0JBTW1CLFdBQVc7Ozs7c0JBQ0osU0FBUzs7QUFFbkMsSUFBTSxVQUFVLEdBQUc7QUFDakIsV0FBTyxFQUFFLEtBQUs7QUFDZCxRQUFJLEVBQUEsZ0JBQUE7OztBQUdGQSxZQUFJQSxDQUFDQSxJQUFJQSxHQUFHQSxzQkFBeUJBLEVBQUVBLENBQUNBLENBQUNBO0tBQzFDQTtBQUNELFNBQUssRUFBQSxpQkFBQTtBQUNIQyxZQUFNQSxLQUFLQSxHQUFHQSxJQUFJQSxDQUFDQTs7O0FBSW5CQSxZQUFJQSxJQUFJQSxDQUFDQSxPQUFPQSxFQUFFQSxPQUFPQTtBQUN6QkEsWUFBSUEsQ0FBQ0EsT0FBT0EsR0FBR0EsSUFBSUEsQ0FBQ0E7O0FBR3BCQSw4QkFBT0EsRUFBRUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsT0FBT0EsQ0FBQ0EsS0FBS0EsRUFBRUEsVUFBQ0EsUUFBbUJBLEVBQUFBOztBQUdoREEsaUJBQUtBLENBQUNBLElBQUlBLEdBQUdBLFFBQVFBLENBQUNBOztBQUd0QkEsaUJBQUtBLENBQUNBLE9BQU9BLENBQUNBLEtBQUtBLENBQUNBLElBQUlBLENBQUNBLENBQUNBO1NBQzNCQSxDQUFDQSxDQUFDQTtLQUNKQTtBQUNELFFBQUksRUFBQSxnQkFBQTs7S0FFSEM7Q0FDRixDQUFDO3FCQUVhLFVBQVUiLCJmaWxlIjoidHMvY2xhc3Nlcy9fVW5pdEZyYW1lLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBUaGlzIFNvdXJjZSBDb2RlIEZvcm0gaXMgc3ViamVjdCB0byB0aGUgdGVybXMgb2YgdGhlIE1vemlsbGEgUHVibGljXG4gKiBMaWNlbnNlLCB2LiAyLjAuIElmIGEgY29weSBvZiB0aGUgTVBMIHdhcyBub3QgZGlzdHJpYnV0ZWQgd2l0aCB0aGlzXG4gKiBmaWxlLCBZb3UgY2FuIG9idGFpbiBvbmUgYXQgaHR0cDovL21vemlsbGEub3JnL01QTC8yLjAvLlxuICovXG5cbmltcG9ydCBldmVudHMgZnJvbSAnY3UtZXZlbnRzJztcbmltcG9ydCB7IENvbWJhdGFudCB9IGZyb20gJ2N1LWNvcmUnO1xuXG5jb25zdCBfVW5pdEZyYW1lID0ge1xuICBzdGFydGVkOiBmYWxzZSxcbiAgaW5pdCgpIHtcbiAgICAvLyBJbml0aWFsaXNlIHRoZSBzdG9yZSBpcyBiYXNpYyBpbmZvLiAgVGhpcyBpcyBzbyB0aGF0IFJlYWN0IGNvbXBvbmVudHNcbiAgICAvLyBjYW4gdXNlIHRoZSBTdG9yZSB0byBpbml0aWFsaXNlIHRoZWlyIHN0YXRlIGluIGdldERlZmF1bHRTdGF0ZSgpLlxuICAgIHRoaXMuaW5mbyA9IG5ldyBDb21iYXRhbnQoPENvbWJhdGFudD57fSk7XG4gIH0sXG4gIHN0YXJ0KCkge1xuICAgIGNvbnN0IHN0b3JlID0gdGhpcztcblxuICAgIC8vIElmIHRoaXMgc3RvcmUgaGFzIGFscmVhZHkgYmVlbiBzdGFydGVkLCB0aGVuIGluZ29yZSBzdWJzZXF1ZW50IHN0YXJ0XG4gICAgLy8gcmVxdWVzdFxuICAgIGlmICh0aGlzLnN0YXJ0ZWQpIHJldHVybjtcbiAgICB0aGlzLnN0YXJ0ZWQgPSB0cnVlO1xuXG4gICAgLy8gTGlzdGVuIHRvIHRoZSBldmVudCBncm91cCBmb3IgdGhpcyB1bml0IGZyYW1lXG4gICAgZXZlbnRzLm9uKHRoaXMuaGFuZGxlcy50b3BpYywgKGluc3RhbmNlOiBDb21iYXRhbnQpID0+IHtcblxuICAgICAgLy8gVXBkYXRlIHN0b3JlIGluZm9cbiAgICAgIHN0b3JlLmluZm8gPSBpbnN0YW5jZTtcblxuICAgICAgLy8gVHJpZ2dlciBjaGFuZ2VkIG5vdGlmaWNhdGlvbiBmb3IgdGhpcyBzdG9yZVxuICAgICAgc3RvcmUudHJpZ2dlcihzdG9yZS5pbmZvKTtcbiAgICB9KTtcbiAgfSxcbiAgc3RvcCgpIHtcbiAgICAvLyBUT0RPKClcbiAgfVxufTtcblxuZXhwb3J0IGRlZmF1bHQgX1VuaXRGcmFtZTtcbiJdLCJzb3VyY2VSb290IjoiLi4vIn0=