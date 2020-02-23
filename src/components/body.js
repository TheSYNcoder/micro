import React, { Component } from 'react';
import {findSuggestions} from "../filter"
import { Input } from 'semantic-ui-react';
import { render } from '@testing-library/react';
import { Card } from 'react-bootstrap';
import "./body.css";

class BS extends React.Component{

    constructor(props){
        super(props);
        this.state ={
        query: null ,
        suggestions :[], 
        s : false,
    }
 }
    render(){
        const handleChange = (e) => {
        this.setState({s : false});
        this.setState({query : e.target.value} , () => {;
        var sug = findSuggestions(this.state.query);
        this.setState( {suggestions:  sug});
        });
        
        
    }

    const sugCard =(suggestion) => {
        return(
            <div >
               <Card style={{ width: '50%', height: "auto" ,
               marginLeft : "4em", padding: "2em" , border :"2px solid #f2eceb",
               marginTop :"3em" ,borderRadius: "20px" , fontFamily :"Raleway ,sans-serif" ,
               }}>
                   <Card.Body>
                       <Card.Header style={{fontSize:"2em"}}>{suggestion[0]}</Card.Header>
                       <Card.Text className="text-muted" style={{opacity: "0.4"}}>Operand</Card.Text>
                       <Card.Text style={{fontFamily :"Raleway ,sans-serif"}}>
                          <code>
                           Opcode : {suggestion[1].name}
                           <br/>
                           Instruction Size : {suggestion[1].size}
                           <br/>
                           Description : {suggestion[1].description}
                           <br/>
                           </code>
                       </Card.Text>
                   </Card.Body>
               </Card>

            </div>
        
        )
            
    }

    const All= () => {
        var b = [];
        var nn =0;
       
        if ( this.state.s === false){
            nn = Math.min(10 , this.state.suggestions.length );
        }
        else{
            nn  = this.state.suggestions.length;
        }
        
       
        if ( this.state.suggestions === [] || this.state.suggestions === 'undefined'){
            b.append( <div></div>);
        }
        else{
            for ( var  i =0 ; i  < nn ; i++){
                b.push(<div> {sugCard(this.state.suggestions[i]) }</div>);
            }
        }
        return b;
    }

        return(
            <div>
            <div className="container">
                     
                     <h3 style={{fontFamily:"Raleway,sans-serif" , opacity : "0.5"}}>
                     Enter atleast three letters to get suggestions,
                     </h3>
                   
                    <input className="inp" placeholder="search .." 
                        onChange={handleChange} 
                        type="text"
                    />

                    <button className="bts" onClick={() => this.setState({s : true})}>Get all suggestions</button>
                    
            </div>
            <div style={{marginTop :"16em"}}> </div>
            <All/>
            </div>
        )
    }


}

export default BS;