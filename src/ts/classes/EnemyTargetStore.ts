/**
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 */
import * as Reflux from 'reflux';
import events from 'cu-events';
import _UnitFrame from './_UnitFrame';

const EnemyTargetStore = {
	create() {
		return Reflux.createStore({
		    mixins: [ _UnitFrame ],
		    handles: events.handlesEnemyTarget,
		    listenables: [ events.handlesEnemyTarget.action ]
		});
	}
}

export default EnemyTargetStore;
