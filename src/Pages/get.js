import React, { Component } from 'react';
import SHeader from "../components/sheader"
import {getAll } from "../filter";
import { Table , Container } from 'react-bootstrap';
import "../components/body.css";




class Get extends React.Component{

    constructor(props){
        super(props);
        this.state={
            content :[],
        }
    }



  

    render(){

        const Content = () => {
            var b = getAll();
            var ret=[];
            b.forEach( (ele ,i) => {
                ret.push(
                    <tr>
                      <th>{i+1}</th>
                      <th>{ele[0]}</th>
                      <th>{ele[1].name}</th>
                      <th>{ele[1].size}</th>
                      <th>{ele[1].description}</th>
                    </tr>
                )
            })
            return ret;

        }
        return ( 
            <div>
              <SHeader/>
              <div style={{marginTop: "5em"}}></div>
              <h2
              style={{
                margin: "2em",
                marginLeft: "4em",
                width: "60%",
                paddingBottom: "0.4em",
                borderBottom: "2px solid #e6e6e6"
              }}
            >
              Different opcodes
            </h2>

            
              <table className="all">
                <thead>
                  <tr >
                    <th>#</th>
                    <th>Operand</th>
                    <th>Opcode</th>
                    <th>Size</th>
                    <th>Description</th>
                  </tr>
                </thead>
                <tbody style={{opacity:"0.7"}}>
                  <Content/>
                </tbody>
              </table>
            
            <div style={{marginBottom:"3em"}}></div>
            
            </div>
        )
    }
}

export default Get;