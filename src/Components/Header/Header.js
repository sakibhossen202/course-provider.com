import React from 'react';
import logo from '../../../src/coursee.com/logo.png'

import './Header.css'
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css'

import search from '../../coursee.com/search.png'
import Cart from '../Cart/Cart';

const Header = () => {
    return (
        <div className="header">
            <div className="">
            <a href="#">
                <img src={logo} alt=""/>
            </a>
            <nav>
                <a href="/home">Home</a>
                <a href="/course">Courses</a>
                <a href="/studyzone">Study Zone</a>
                <a href="/faq">FAQ</a>
                <a href="aboutus">About Us</a>
                <input type="text" placeholder="Search"/>
                
            </nav>
            </div>

           
                    
            
            
        </div>
        
        
    );
};

export default Header;