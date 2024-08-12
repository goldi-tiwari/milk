// import React from "react";
// import { Link } from "react-router-dom";
// import TextField from '@mui/material/TextField';
// import Button from '@mui/material/Button';


// function Forget_Password() {
//   return (
//     <>
//       <div className="Forget_p">
//         <h1><b>Forget Password</b></h1>
//         <TextField id="standard-basic" label="Email" variant="standard" type="Email" />
//         <br />
//         <br />

//         <TextField id="standard-basic" label="Code" variant="standard" type="text" />
//         <br />
//         <br />

//         <TextField id="standard-basic" label="New Password" variant="standard" type="password" />
//         <br />
//         <br />

//         <TextField id="standard-basic" label="Confirm Password" variant="standard" type="password" />

//         <br />
//         <br />

//         <Link to="/">
//           {/* <button className="f_pass_btn">Change</button> */}
//           <Button variant="contained" className="change-btn">Change</Button>
//         </Link>
//       </div>
//     </>
//   );
// }

// export default Forget_Password;


import React from "react";
import { Link } from "react-router-dom";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

function Forget_Password() {
  return (
    <div className="Forget_p">
      <h1><b>Forget Password</b></h1>
      <TextField id="email" label="Email" variant="standard" type="email" /> <br></br>
      <TextField id="code" label="Code" variant="standard" type="text" /><br></br>
      <TextField id="new-password" label="New Password" variant="standard" type="password" /><br></br>
      <TextField id="confirm-password" label="Confirm Password" variant="standard" type="password" /><br></br>
      <Link to="/">
        <Button variant="contained" className="change-btn"><b>Change</b></Button>
      </Link>
    </div>
  );
}

export default Forget_Password;
