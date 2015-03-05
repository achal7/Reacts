/**
 * Created by achal on 2/24/2015.
 */

import Executor from './ReactEventsExecutor.js';

export var BehaviourToExecutor;
BehaviourToExecutor = {
    Many: Executor.ManyExecute,
    Merge: Executor.ManyExecute,
    Single: Executor.Single
};

export var ReactEventToBehaviour;
ReactEventToBehaviour = {
    Initialize: BehaviourToExecutor.Many,
    PreRender: BehaviourToExecutor.Many,
    Render: BehaviourToExecutor.Single,
    Update: BehaviourToExecutor.Many,
    Dismount: BehaviourToExecutor.Merge
};

export class ComponentEvents {
    constructor(){
        this.Initialize = [];
        this.PreRender = [];
        this.Render = [];
        this.Update = [];
        this.Dismount = [];
    }
};

export class EventNamesAdapater{
    static GetReactNextEventName(event){
        if(event === 'getInitialState')
            return 'Initialize';
        else if(event === 'componentWillMount'){
            return 'PreRender';
        }
        else if(event === 'render'){
            return 'Render';
        }
    }
    static GetReactEventName(event){
        if(event === 'Initialize')
            return 'getInitialState';
        else if(event === 'PreRender'){
            return 'componentWillMount';
        }
        else if(event === 'Render'){
            return 'render';
        }
        return event;
    }
}

export var ReactClassInterface;
ReactClassInterface = ['componentWillMount'];

export class ReactEventFilter{
    static Single(){
        return () => ReactEventToBehaviour[event] == BehaviourToExecutor.Single;
    }
    static ExcludeSingle(){
        return (event) => ReactEventToBehaviour[event] != BehaviourToExecutor.Single;
    }
    static All(){
        return (event) => true;
    }
}
//export {ReactEventBehaviourToExecutor, ReactEventToBehaviour, ComponentEvents };