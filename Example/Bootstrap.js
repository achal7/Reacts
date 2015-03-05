/**
 * Created by achal on 2/20/2015.
 */
import React from 'react';
import Shell from './Application/Components/Shell.jsx';

let Bootstrap = {
    Boot(){
        let ctx = { Name: 'root'};
        React.render(<Shell Context = { ctx }/>, document.body);
    }
};

Bootstrap.Boot();