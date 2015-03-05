import React from 'react';
import RNext from '../../../Reacts.js';
import Header from './Header.jsx';
import Footer from './Footer.jsx';
import Home from './Home.jsx';
let con = {Name: 'home context', name: 'home ctx'};
export default class Shell extends RNext.Component(){
    render(){
        return (
            <div>
                <Header />
                <Home context = { con } Name = 'Home page' />
                <Footer />
            </div>
        );
    }
}