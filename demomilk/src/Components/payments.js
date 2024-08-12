// import React, { useState, useEffect } from "react";
// import { Link } from "react-router-dom";
// import TextField from "@mui/material/TextField";
// import InputLabel from "@mui/material/InputLabel";
// import MenuItem from "@mui/material/MenuItem";
// import FormControl from "@mui/material/FormControl";
// import Select from "@mui/material/Select";
// import Button from "@mui/material/Button";
// function Payment() {
//   const [dateTime, setDateTime] = useState(new Date());
  
//   const updateDateTime = () => {
//     setDateTime(new Date());
//   };

//   useEffect(() => {
//     const timerId = setInterval(updateDateTime, 1000);
//     return () => clearInterval(timerId); 
//   }, []);

//   const formattedDateTime = dateTime.toLocaleString();

//   return (
//     <>
//       <div className="sidebar">
//         <h2><b>Dashboard</b></h2>
//         <ul>
//           <Link to="/User">
//             <li><b>User</b></li>
//           </Link>
//           <Link to="/inward">
//             <li><b>Inward</b></li>
//           </Link>
//           <Link to="/outward">
//             <li><b>Outward</b></li>
//           </Link>
//           <Link to="/payment">
//             <li><b>Payment</b></li>
//           </Link>
//           <li><b>Receipt</b></li>
//           <li><b>Row Material Purpose</b></li>
//           <li><b>Consumption</b></li>
//           <li className="dropdown">
//             <b>Employee</b>
//             <ul className="dropdown-content">
//               <li><b>Account</b></li>
//               <li><b>Attendace</b></li>
//               <li><b>Salery</b></li>
//             </ul>
//           </li>
//         </ul>
//       </div>

//       <div className="payment">
//         <h1><b>Payment Form</b></h1>
//         <form>
//              <div className="voucher">
//              <TextField id="standard-basic" label="voucher No" variant="standard" type="text" sx={{ width: 300 }}/>
//              </div>

//              <div className="datetime">
//              <p><b>Date:Time </b>:- {formattedDateTime}</p> <br />
//              </div> 
//           <br />
          
//           <div  className="fromcontrol">
//           <FormControl variant="standard" sx={{ m: 1, minWidth: 400 }}>
//             <InputLabel id="demo-simple-select-standard-label">
//               <b>Select Account</b>
//             </InputLabel>
//             <Select
//               labelId="demo-simple-select-standard-label"
//               id="demo-simple-select-standard"
//               label="Select Account"
//             >
//               <MenuItem value="1">
//                 <em><b>None</b></em>
//               </MenuItem>
//               <MenuItem value="2"><b>Account 1</b></MenuItem>
//               <MenuItem value="3"><b>Account 2</b></MenuItem>
//               <MenuItem value="4"><b>Account 3</b></MenuItem>
//             </Select>
//           </FormControl>
          
//           </div>
//           <br />
//           <br />

//           <div className="fromcontrol2">         
//              <FormControl variant="standard" sx={{ m: 1, minWidth: 400 }}>
//             <InputLabel id="demo-simple-select-standard-label">
//               <b>Ledger Account</b>
//             </InputLabel>
//             <Select
//               labelId="demo-simple-select-standard-label"
//               id="demo-simple-select-standard"
//               label="Select Account"
//             >
//               <MenuItem value="1">
//                 <em><b>None</b></em>
//               </MenuItem>
//               <MenuItem value="2"><b>Account 1</b></MenuItem>
//               <MenuItem value="3"><b>Account 2</b></MenuItem>
//               <MenuItem value="4"><b>Account 3</b></MenuItem>
//             </Select>
//           </FormControl>
//           </div>

//           <br />
//           <br />
//           <div className="Amount1">
//           <TextField id="standard-basic" label=" Amount" variant="standard" sx={{ width: 400 }} />
//           </div>
//           <br />
//           <br />
//           <div className="Narration1">
//           <TextField id="standard-basic" label="Narration" variant="standard" sx={{ width: 400 }}/>
//           </div>
          
//           <br />
//           <br />
//           <div className="Save-edit">
//           <Button variant="contained" color="success">
//             <b>Save</b>
//           </Button>
//           </div>
//           <div className="Save-edit1">
//           <Button variant="contained" href="#contained-buttons">
//             <b>Edit</b>
//           </Button>
//           </div>
//         </form>
//       </div>
//     </>
//   );
// }
// export default Payment;



import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import TextField from "@mui/material/TextField";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Button from "@mui/material/Button";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import List from "@mui/material/List";
import CancelSharpIcon from "@mui/icons-material/CancelSharp";

function Payment() {
  const [dateTime, setDateTime] = useState(new Date());
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const updateDateTime = () => {
    setDateTime(new Date());
  };

  useEffect(() => {
    const timerId = setInterval(updateDateTime, 1000);
    return () => clearInterval(timerId);
  }, []);

  const formattedDateTime = dateTime.toLocaleString("en-in", {
    weekday: "long",
    year: "numeric", // Full year (e.g., 2024)
    month: "numeric", // Full name of the month (e.g., August)
    day: "numeric", // Day of the month (e.g., 10)
});

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Box>
      <div className="head">
        <Toolbar>
          <IconButton onClick={handleDrawerOpen}>
            <MenuIcon />
          </IconButton>
          <h3>Dashboard</h3>
        </Toolbar>
      </div>
      <Drawer variant="persistent" anchor="left" open={open}>
        <List>
          <div className="sidebar">
            <div className="icon">
              <IconButton onClick={handleDrawerClose} className="ic">
                {theme.direction === "ltr" ? (
                  <CancelSharpIcon className="ic" />
                ) : (
                  <CancelSharpIcon className="ic" />
                )}
              </IconButton>
            </div>

            <ul>
              <Link to="/User">
                <li>User</li>
              </Link>
              <Link to="/inward">
                <li>Inward</li>
              </Link>
              <Link to="/outward">
                <li>Outward</li>
              </Link>
              <Link to="/payment">
              <li>Payment</li>
              </Link>
             
              <li>Receipt</li>
              <li>Row Material Purpose</li>
              <li>Consumption</li>
              <li className="dropdown">
                Employee
                <ul className="dropdown-content">
                  <Link to="/Group">
                    <li>Account</li>
                  </Link>

                  <Link to="/Account">
                    <li>Attendace</li>
                  </Link>

                  <li>Employee</li>
                </ul>
              </li>
            </ul>
          </div>
        </List>
        {/* <Divider /> */}
      </Drawer>
    </Box>

      <div className="payment">
        <h1><b>Payment Form</b></h1>
        <form>
        <div className="datetime">
            <p><b>Date:Time :- {formattedDateTime}</b></p>
          </div>

          <div className="voucher">
            <TextField id="voucher" label="Voucher No" variant="standard" type="text" className="voucher2" />
          </div>

          

          <div className="form-control">
            <FormControl variant="standard" className="account">
              <InputLabel id="account-select-label">Select Account</InputLabel>
              <Select
                labelId="account-select-label"
                id="account-select"
                label="Select Account"
              >
                <MenuItem value="1"><em><b>None</b></em></MenuItem>
                <MenuItem value="2"><b>Account 1</b></MenuItem>
                <MenuItem value="3"><b>Account 2</b></MenuItem>
                <MenuItem value="4"><b>Account 3</b></MenuItem>
              </Select>
            </FormControl>
          </div>

          <div className="form-control">
            <FormControl variant="standard" className="ledger">
              <InputLabel id="ledger-select-label">Ledger Account</InputLabel>
              <Select
                labelId="ledger-select-label"
                id="ledger-select"
                label="Select Ledger Account"
              >
                <MenuItem value="1"><em><b>None</b></em></MenuItem>
                <MenuItem value="2"><b>Account 1</b></MenuItem>
                <MenuItem value="3"><b>Account 2</b></MenuItem>
                <MenuItem value="4"><b>Account 3</b></MenuItem>
              </Select>
            </FormControl>
          </div>

          <div className="amount">
            <TextField id="amount" className="amount1" label="Amount" variant="standard"/>
          </div>

          <div className="narration">
            <TextField id="narration" className="narr1" label="Narration" variant="standard" />
          </div>

          <div className="buttons">
            <Button variant="contained" color="success" sx={{ width: '15%' }}><b>Save</b></Button>
            <Button variant="contained" color="primary" sx={{ width: '15%' }}><b>Edit</b></Button>
          </div>
        </form>
      </div>
    </>
  );
}

export default Payment;
