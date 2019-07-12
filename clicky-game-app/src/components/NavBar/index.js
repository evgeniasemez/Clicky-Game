import React from "react";
import "./style.css";

function NavBar(props) {
    return (
        <nav class="navbar">
        <ul>
          <li class ="incorrectGuess"></li>{props.correctNotcorrect}
          <li class="score" >Score: {props.score}</li>
          <li class ="topguess">Top Score: {props.topguesses}</li>
         
        </ul>
      </nav>
    );
  }
  
  export default NavBar;