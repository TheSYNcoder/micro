import React, { Component } from 'react';
import SHeader from "../components/sheader"
import BS from "../components/body"


class Search extends React.Component{

    constructor(props){
        super(props);
    }

    render(){
        return ( 
            <div>
              <SHeader/>
              <BS/>
              

            </div>
        )
    }
}

export default Search;