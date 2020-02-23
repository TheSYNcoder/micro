import React from "react";
import SHeader from "../components/sheader"
import Hcon from "../components/hcon"
import "./content.css";


class About extends React.Component{

    constructor(props){
        super(props);
    }

    render(){
        return(
            <div>
               <SHeader {... this.props}/>
               <div>
                   <p className="cc"

                   >
                   Hey there ,microprocessor enthusiast !
                   <br/>
                   I am Shuvayan Ghosh Dastidar , currently a Sophomore 
                   at Jadavpur University ,Kolkata , in the department of Computer Science and Engineering.
                   <br/>
                   <br/>
                   The main motivation behind this site was to learn how efficient searching techniques
                   work in Javascript and to get better at vanilla javascript. Though this site is built 
                   using the popular javascript framework , React , however  , i tried restricting the use of 
                   libraries and tried doing all the stylings by my own . It was a great experience and hope 
                   even my microprocessor lab goes well using this site .
                   <br/>
                   So long , Ciao !
                   <br/>

                   Found a bug , want to inform it, mail me at <a href="mailto:sgd030@gmail.com?Subject=Hello%20i%20found%20a%20bug" target="_top"
                   style={{color:"violet"  }}>Send Mail</a>

                   </p>
               </div>
            </div>
        )
    }
}

export default About;