/**
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 */
import * as Reflux from 'reflux';
import events from 'cu-events';

const ControlGameStore = {
	create() {
		return Reflux.createStore({
		    handles: events.handlesControlGame,
		    listenables: [ events.handlesControlGame.action ],
		    start() {
		        const store = this;

		        // If this store has already been started, then ingore subsequent start 
		        // request
		        if (this.started) return;
		        this.started = true;

		        // Initialise the store is basic info.  This is so that React components
		        // can use the Store to initialise their state in getDefaultState().
		        store.info = {

		        };

		        // Listen to the event group for this unit frame
		        events.on(this.handles.name, (controlGame : any) => {

		            // Update store info
					store.info = controlGame;

		            // Trigger changed notification for this store
		            store.trigger(store.info);
		        });
		    }
		});
	}
}

export default ControlGameStore;