/**
 * Created by achal on 2/24/2015.
 */
"use strict";
export default class ReactEventExecutor {
    static ManyExecute(events, context) {
        events.map(e => e(context));
    }

    static MergeExecute(events, context) {
        events.map(e => e(context));
    }

    static Single(events, context){
        if(events && events.length > 0){
            events[0](context);
        }
    }
}