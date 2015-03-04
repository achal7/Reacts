# ReactNext
ReactNext is a java script library on top of [React](http://facebook.github.io/react/)
This library is developed in ES6 and includes functionality to quickly develop React.JS based applications.
It covers:

1.   New React component life cycle names to understand it better(or you can stick with the
    standard React component life cycle).
2.   Class based Mixins which follows **Functional programming** idea.
3.   Many more to come....

## Example Usage

### Creating single component with methods
<code>
import RNext from "ReactNext.js";
export default class Shell extends RNext.Component(){
    constructor(context){
        //Home is passed as an argument, so that ReactNext will bind the PreRender method of this component in the
        //life cycle of this component, otherwise its not needed.
        super(context, Home);
    }
    //Single methods are still being used with old name, will be improved in later versions.
    render(){
        ....
    }
    /*
        Represents componentWillMound life cycle event. As you can see its static method and accepts context as arg.
        With this new way we can share the life cycle with other components as well, and can achieve the function composition.
    */
    static PreRender(context){
        console.log("Component: Initializing context: " + context.name);
    }
}
</code>

### Creating Mixins

<code>
import RNext from 'ReactNext.js';
//Standard React kind mixin
let CoreMixin = {
  componentWillMount :function(context){
    console.log('Core: Initialization done in core' + context.Name);
  }
}
//New Mixin
import ReactNext from 'ReactNext.js';
export default class LogMixin extends ReactNext.ComponentMixin{
    static PreRender(context){
        console.log('Log: Initializing context: ' + context.name);
    }
}
//Consume the Mixins, First arg is Null, indicating that use standard React Component,
//since there is no other parent of this Component
export default class Home extends RNext.ComponentWithMixin(null, CoreMixin, LogMixin){
    render(){
        return (
            ...
        );
    }
}
</code>
