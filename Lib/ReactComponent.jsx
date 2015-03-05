/**
 * Created by achal on 2/24/2015.
 */
'use strict';
import React from 'react';

export class ReactComponent extends React.Component{
    constructor(context, events) {
        this.events = events;
        this.context = context || {};
    }
    render(){
        return(<div></div>);
    }
}
ReactComponent.isModern = true;
export class ComponentMixin{
}
ComponentMixin.isModern = true;

