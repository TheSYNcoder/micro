import React from "react";
import Header from "../components/header"
import Hcon from "../components/hcon"


class HomePage extends React.Component{

    constructor(props){
        super(props);
    }

    render(){
        return(
            <div>
               <Header {... this.props}/>
               <Hcon {... this.props}/>
            </div>
        )
    }
}

export default HomePage;