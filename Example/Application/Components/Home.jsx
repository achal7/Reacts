import React from 'react';
import Reacts from '../../../Reacts.js';
import LogMixin from '../Services/LogMixin.js';

let CoreMixin = {
  componentWillMount :function(context){
    console.log('Core: Initialization done in core' + context.Name);
  }
}

export default class Home extends Reacts.ComponentWithMixin(null, CoreMixin, LogMixin){
    constructor(context){
        super(context, Home);
      }
    render(){
        return (
            <div>
                <h1>Hellooo....</h1>
            </div>
        );
    }
    static PreRender(context){
        console.log('Component: Initializing context: ' + context.name);
    }
}