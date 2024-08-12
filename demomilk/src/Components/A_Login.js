//  import React from "react";
//  import { Link } from "react-router-dom";
//  import Button from '@mui/material/Button';

//  import TextField from '@mui/material/TextField';
 
//   function Log() {
    
//    return (
//      <>
//        <div className="AD_Log">
//          <h1>
//            <b>Admin Login</b>
//         </h1>

//          <form>
//          <TextField id="standard-basic" label="Password" variant="standard" />
//            <br />

//            <Link to="/forget_password">
//              <a>Forget Password?</a>
//            </Link>
//            <br />

//            <div className="log-btn">
//              <Link to="/Dashboard">
//                <Button variant="contained"><b>Login</b></Button>
//              </Link>
//            </div>
//          </form>
//        </div>
//      </>
//    );
//  }

//  export default Log;


import React from "react";
import { Link } from "react-router-dom";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

function Log() {
  return (
    <>
      <div className="AD_Log">
        <h1>
          <b>Admin Login</b>
        </h1>

        <form>
          <TextField
            id="standard-basic"
            label="Password"
            variant="standard"
            type="password" // Change to password type
          />
          <br />

          <Link to="/forget_password">
            <a>Forget Password?</a>
          </Link>
          <br />

          <div className="log-btn">
            <Link to="/Dashboard">
              <Button variant="contained"><b>Login</b></Button>
            </Link>
          </div>
        </form>
      </div>
    </>
  );
}

export default Log;


