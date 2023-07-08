
import './App.css';

import React from 'react';
function App() {
    /**
     * Challenge: Replace the if/else below with a ternary
     * to determine the text that should display on the page
     */

    // if we change below cionstant to false then answer on page will be np 


    // **
    //  * Challenge: move our ternary directly inside of the JSX
    //  * so the "Yes" and "No" are determined inside the <h1>
    //  * 
    //  * Hint: you will no longer need the `answer` variable
    //  */
    // to do above challenge we need to relace anwer in h1 with isGoingOut ? "yes" : "no"
    const isGoingOut = true
    // ternery operations allow us to use if else statements on one line 
    
    // we can further simlpfy by getting rid of the answer satement below and replacing {answer }in the h1 below with isGoingOut ? "yes" : "no"/ does  same thing 
   
    
    // let answer = isGoingOut ? "yes" : "no"
    
    // we can get rid of ecerything below by changing it to the ternary operaton above 

    // if(isGoingOut === true) {
    //     answer = "Yes"
    // } else {
    //     answer = "No"
    // }
    
    return (
        <div className="state">
            <h1 className="state--title">Do I feel like going out tonight?</h1>
            <div className="state--value">
                <h1>{isGoingOut ? "yes" : "no"}</h1>
            </div>
        </div>
    )
}

export default App;
