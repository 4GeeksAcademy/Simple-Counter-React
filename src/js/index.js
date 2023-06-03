//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClock } from '@fortawesome/free-regular-svg-icons'
import { PropTypes } from "prop-types";
// import './icons'
// import 'bootstrap';




// include your styles into the webpack bundle
import "../styles/index.css";
import { checkPropTypes } from "prop-types";

//import your own components
// import Home from "./component/home.jsx";

function SimpleCounter(props){
    return(<div className="bigCounter">
        <div className="calendar">
            <FontAwesomeIcon icon={faClock} /></div>
        <div className="four">{props.DigitFour  % 10}</div>
        <div className="three">{props.DigitThree  % 10}</div>
        <div className="two">{props.DigitTwo  % 10}</div>
        <div className="one">{props.DigitOne % 10}</div>
    </div>);
}
SimpleCounter.prototype = {
    DigitFour: PropTypes.number,
    DigitThree: PropTypes.number,
    DigitTwo: PropTypes.number,
    DigitOne: PropTypes.number
}

let counter = 0;
setInterval (function(){
    const four = Math.floor(counter/1000);
    const three = Math.floor(counter/100);
    const two = Math.floor(counter/10);
    const one = Math.floor(counter/1);
    counter++;
    ReactDOM.render(
        <SimpleCounter DigitOne={one} DigitTwo={two} DigitThree={three} DigitFour={four} />,
        document.querySelector("#app")
    );


},1000);    
   