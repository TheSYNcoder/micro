import React, { Component } from "react";
import "./header.css";
import { Divider } from "semantic-ui-react";
import {Link} from  "react-router-dom";

class SHeader extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="out-wrapper">
       
            <div className="left-item">
              <Link to="/" className="new-logo">
                Micro
              </Link>
            </div>
            <div className="left-item">
              <Link to='/all' className="new-link">
                Get All Opcodes
              </Link>
            </div>
            <div className="left-item">
              <Link to='/search' className="new-link">
                Search
              </Link>
            </div>
          <div className="right-item">
            <Link to='/about' className="new-link">
              About 
            </Link>
          </div>
        
      </div>
    );
  }
}

export default SHeader;
