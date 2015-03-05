/**
 * Created by achal on 3/2/2015.
 */
import Reacts from '../../../Reacts.js';
export default class LogMixin extends Reacts.ComponentMixin{
    static PreRender(context){
        console.log('Log: Initializing context: ' + context.name);
    }
}