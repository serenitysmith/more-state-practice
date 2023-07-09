
import './App.css';

import React, {useState} from 'react';
function App() {
   const [isGoingOut, setIsGoingOut] = React.useState(true)
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

    /// we changed the hard coded use state to the above react.usestate so we can switch between yes no booleen
    // const isGoingOut = true
    // ternery operations allow us to use if else statements on one line 
    
    // we can further simlpfy by getting rid of the answer satement below and replacing {answer }in the h1 below with isGoingOut ? "yes" : "no"/ does  same thing 
   
    
    // let answer = isGoingOut ? "yes" : "no"
    
    // we can get rid of ecerything below by changing it to the ternary operaton above 

    // if(isGoingOut === true) {
    //     answer = "Yes"
    // } else {
    //     answer = "No"
    // }
     
    
    
    /**
     * Challenge: 
     * - Initialize state for `isGoingOut` as a boolean
     * - Make it so clicking the div.state--value flips that
     *   boolean value (true -> false, false -> true)
     * - Display "Yes" if `isGoingOut` is `true`, "No" otherwise
     */

    function changeMind(){
        // sweting prevstate => !preveState makes the function check for the opposite of what state was before by using th eexclmation mark, it does that  bassically an else if statement 
        setIsGoingOut(prevState => !prevState)
    }
    
    return (
        <div className="state">
            <h1 className="state--title">Do I feel like going out tonight?</h1>
            {/* // one click, this will change from yes to no booleen so we need both instanes of state, if it was no before then it will switch to yes or no before it will swich to yes   */}
            {/* belwo was too much code so we swirched it to an outside function and  */}
  {/* <div onClick={() => setIsGoingOut(prevState => )} className="state--value"> */}

  <div onClick={changeMind} className="state--value">
          
                <h1> {isGoingOut ? "Yes" : "No"} </h1>
            </div>
        </div>
    )
}

export default App;
