var cu_events_1 = require('cu-events');
var _UnitFrame = {
    start: function () {
        var store = this;
        // Initialise the store is basic info.  This is so that React components
        // can use the Store to initialise their state in getDefaultState().
        store.info = {
            name: '',
            race: '',
            raceId: -1,
            health: 0,
            maxHealth: 100,
            stamina: 0,
            maxStamina: 100
        };
        // Listen to the event group for this unit frame
        cu_events_1["default"].on(this.handles.name, function (unitFrame) {
            // Update store info
            store.info = {
                name: unitFrame.name,
                race: unitFrame.race,
                raceId: unitFrame.raceId,
                health: unitFrame.health,
                maxHealth: unitFrame.maxHealth,
                stamina: unitFrame.stamina,
                maxStamina: unitFrame.maxStamina
            };
            // Trigger changed notification for this store
            store.trigger(store.info);
        });
    },
    // FIXME: Due to the way the client handles sending initial data in response
    // to subscribing to an event, where there is a limited time after OnInit
    // within which we must register our listeners if we want to get initial data
    // (50ms was too long a delay) we need to start our store as soon as the API
    // has initialised.
    init: function () {
        var store = this;
        cu_events_1["default"].on('init', function () {
            store.start();
        });
    }
};
exports.__esModule = true;
exports["default"] = _UnitFrame;
