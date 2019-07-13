import React from "react";
import "./style.css";

function NavBar(props) {
    return (
        <nav class="navbar">
        <ul>
          <li class ="incorrectGuess">{props.correctNotcorrect !==undefined && (props.correctNotcorrect ? 'You Guessed Correctly' : 'You Guessed Incorrectly')}</li>
          <li class="score" >Score: {props.score}</li>
          <li class ="topguess">Top Score: {props.topguesses}</li>
         
        </ul>
      </nav>
    );
  }
  
  export default NavBar;