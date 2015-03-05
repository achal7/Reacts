/**
 * Created by achal on 2/21/2015.
 */
'use strict';
import EventsExecutor from './ReactEventsExecutor.js';
import EventToExecutor from './ReactEvents.js';
import { ReactComponent, ComponentMixin } from './ReactComponent.jsx';
import ComponentExtensions from './ComponentExtensions.js';


let ReactNext = {
    ReactComponent: ReactComponent,
    ComponentWithMixin: (com, ...mixins) => { com = com || ReactComponent; return ComponentExtensions.Extends(com, ...mixins); },
    Component: (com) => { com = com || ReactComponent; return ComponentExtensions.Extends(com); },
    //Component: (com, ...mixins) => { com = com || ReactComponent; return Extends(com, ...mixins); },
    ComponentMixin: ComponentMixin
};
export default ReactNext;