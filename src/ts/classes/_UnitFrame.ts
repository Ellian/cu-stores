/**
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 */
import events from 'cu-events';


const _UnitFrame = {

    started: false,

    start() {
        const store = this;

        // If this store has already been started, then ingore subsequent start 
        // request
        if (this.started) return;
        this.started = true;

        // Initialise the store is basic info.  This is so that React components
        // can use the Store to initialise their state in getDefaultState().
        store.info = {
            name: '', 
            race: -1, 
            health: 0, 
            maxHealth: 100, 
            stamina: 0, 
            maxStamina: 100
        };

        // Listen to the event group for this unit frame
        events.on(this.handles.name, (unitFrame : any) => {

            // Update store info
            store.info = {
                name: unitFrame.name,
                race: unitFrame.race,
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
    init() {
        const store = this;
        events.on('init', () => {
            store.start();
        });
    }
};

export default _UnitFrame;
