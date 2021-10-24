import React from "react";
import { Link, withRouter } from "react-router-dom";
import './intro.css';
// import Quiz from "./Quiz"
// import { Link } from "react-router";
function Landing() {

   
    return (
        // <!DOCTYPE html>
        <html>
            <head>

                <link rel="stylesheet" href="intro.css"></link>
                {/* <script src = "public/intro.js"></script> */}
            </head>
            <body>

                <div class="context">
                    <h1>Welcome to Gainbridge FieldHouse</h1>
                    <span><b>Powered by </b>Spectivity</span>


                    <form >
                        <div class="floating-placeholder">
                            <input type="text" name="inputBox" placeholder="Name"></input>
                            {/* <!-- <label for="name">Name</label> --> */}
                        </div>
                        <div class="floating-placeholder">
                            <input type="text" name="inputBox" placeholder="Seat Number"></input>

                            {/* <!-- <input id="address" name="address" type="text" /> */}
                            {/* <label for="address">Seat Number</label> --> */}
                        </div>
                        <div class="floating-placeholder">
                            <input type="password" name="inputBox" placeholder="Password"></input>

                            {/* <!-- <input id="password" name="password" type="password"/> */}
                            {/* <label for="password">Password</label> --> */}
                        </div>
                    </form>

                    <Link class="nav-link" to="www.google.com">
                            <span class="sr-only">(current)</span>
                            </Link>
                    <br />
                    <br />
                    <p>by Vaibhava, Sidd, Ishaan, Nimal</p>
                    <br />
                    <button type="button" onClick={(e) =>{window.location.href="http://www.google.com";
                    }}> Click </button>
                    {/* <button>Hello
                    <Route path='/privacy-policy' component={() => { 
     window.location.href = 'www.facebook.com'; 
}}/>
</button> */}

                </div>


                <div class="area" >
                    <ul class="circles">
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                    </ul>
                </div >
            </body>
        </html>
    );
}

export default Landing;