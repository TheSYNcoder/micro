import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './header.css';
import { Divider } from 'semantic-ui-react';

class Header extends React.Component{

    constructor(props){
        super(props);
    }

    render(){
    
        return (
          <div className="nav-wrapper">
            <div className="nav">
              <div className="left">
                <Link to="/all" className="link">
                  Get all opcodes
                </Link>
                <Link to="/search" className="link">
                  Search
                </Link>
              </div>
              <div className="right">
                <Link to="/about" className="link">
                  About
                </Link>
              </div>
            </div>
          </div>
        );
    }
    
    
}

export default Header;