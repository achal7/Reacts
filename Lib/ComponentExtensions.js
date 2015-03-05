/**
 * Created by achal on 2/24/2015.
 */
import * as ReactEvents from './ReactEvents.js';
//{-, ReactEventFilter, EventNamesAdapater, ReactEvents, ReactEventToBehaviour}
export default class ComponentExtensions{

    static Extends(Parent, ...mixins){
        mixins = mixins || [];
        mixins.push(Parent);
        let events = ComponentExtensions.GetEvents(mixins, ReactEvents.ReactEventFilter.ExcludeSingle());
        class Mixed extends Parent {
            constructor(context, component){
                ComponentExtensions.MergeEvents(events, component);
                super(context, events);
                let revents = ReactEvents.ReactClassInterface;
                for(let revent in revents){
                    for(let event in events){
                        if( events[event].length > 0 && ReactEvents.EventNamesAdapater.GetReactEventName(event) == revents[revent]){
                            Mixed.prototype[revents[revent]] = () => ReactEvents.ReactEventToBehaviour[event](events[event], context);
                            break;
                        }
                    }
                }
            }
        }
        return Mixed;
    }

    static GetEvents(mixins, filter, events){
        filter = filter || ReactEvents.ReactEventFilter.All();
        let isArray = Object.prototype.toString.call( mixins) === '[object Array]'
        let arrMixins = [];
        if(!isArray){
            arrMixins.push(mixins);
        }
        else{
            arrMixins = mixins;
        }
        let events = events ||  new ReactEvents.ComponentEvents();
        for (let mixin of arrMixins) {
            if(!mixin) break;
            let isModern = mixin.isModern || false;
            let props = Object.keys(mixin);
            if(typeof  mixin === 'function'){
                props = Object.getOwnPropertyNames(mixin);
            }
            //for (let prop of Object.keys(mixin)) {
            for (let prop of props) {
                let property = isModern ? prop : ReactEvents.EventNamesAdapater.GetReactNextEventName(prop);
                if (events[property] && filter(property)) {
                    events[property].push(mixin[prop]);
                }
            }
        }
        return events;
    }

    static MergeEvents(target, ...sources){
        let events = ComponentExtensions.GetEvents(sources);
        for(let event in events){
            if(target[event]){
                events[event].map(e => target[event].push(e));
                //events[event].filter(e => typeof e === 'function').map(e => target[event].push(e));
            }
        }
    }
}