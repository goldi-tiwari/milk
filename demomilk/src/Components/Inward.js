// import React, { useState, useEffect } from "react";
// import { Link } from "react-router-dom";
// import TextField from "@mui/material/TextField";
// import InputLabel from "@mui/material/InputLabel";
// import MenuItem from "@mui/material/MenuItem";
// import FormControl from "@mui/material/FormControl";
// import Select from "@mui/material/Select";
// import Button from "@mui/material/Button";

// function Inward() {
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
//               <li><b>Salery</b>
//               </li>
//             </ul>
//           </li>
//         </ul>
//       </div>

//       <div className="milk-form-container">
//         <form className="for">
//           <h2><b>INWARD</b></h2>

//           <div className="upper-container">
//             <TextField
//               id="standard-basic"
//               label="S.No"
//               variant="standard"
//               type="text"
//             />

//             <p className="inwar-voucher"><b>Date:Time:- {formattedDateTime}</b></p><br />
           
//             <TextField
//               id="standard-basic"
//               label="Rate"
//               variant="standard"
//               type="text"
             
//             />
//             <br />
//           </div>

//           <div className="inwad_Account">
//             <FormControl variant="standard" sx={{ m: 1, minWidth: 200 }}>
//               <InputLabel id="demo-simple-select-standard-label">
//                <b>Shift</b>
//               </InputLabel>
//               <Select
//                 labelId="demo-simple-select-standard-label"
//                 id="demo-simple-select-standard"
//                 label="Select Account"
//               >
//                 <MenuItem value="1">
//                   <em><b>None</b></em>
//                 </MenuItem>
//                 <MenuItem value="2"><b>Morning</b></MenuItem>
//                 <MenuItem value="3"><b>Evening</b></MenuItem>
//               </Select>
//             </FormControl>

//           </div>

//           <div className="inwad-voucher">
//             <TextField
//               id="standard-basic"
//               label="Name"
//               variant="standard"
//               type="text"
//             />{" "}
//           </div>

//           <div className="inwad-AC">
//             <FormControl variant="standard" sx={{ m: 1, minWidth: 250 }}>
//               <InputLabel id="demo-simple-select-standard-label">
//                 <b>Type</b>
//               </InputLabel>
//               <Select
//                 labelId="demo-simple-select-standard-label"
//                 id="demo-simple-select-standard"
//                 label="Select Account"
//               >
//                 <MenuItem value="1">
//                   <em>None</em>
//                 </MenuItem>
//                 <MenuItem value="2"><b>Baffelo</b></MenuItem>
//                 <MenuItem value="3"><b>Cow</b></MenuItem>
//               </Select>
//             </FormControl>
          
//             <div className="inwad-fat">
//             <TextField
//               id="standard-basic"
//               label="Fat (%)"
//               variant="standard"
//               type="text"
//             />
//             </div>

//             <div className="inwad-liters">
//             <TextField
//               id="standard-basic"
//               label="Liters"
//               variant="standard"
//               type="text"
//             />
//             </div>
//           </div>
//           <div className="inwad-save">
//           <Button variant="contained" href="#contained-buttons">
//             <b>Save</b>
//           </Button>
//           </div>
//         </form>
//       </div>
//     </>
//   );
// }

// export default Inward;



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

function Inward() {
  const [dateTime, setDateTime] = useState(new Date());
  const updateDateTime = () => setDateTime(new Date());
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  useEffect(() => {
    const timerId = setInterval(updateDateTime, 1000);
    return () => clearInterval(timerId);
  }, []);

  const formattedDateTime = dateTime.toLocaleString(
    "en-in", {
      weekday: "long",
      year: "numeric", // Full year (e.g., 2024)
      month: "numeric", // Full name of the month (e.g., August)
      day: "numeric", // Day of the month (e.g., 10)
 } );

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

      <div className="milk-form-container">
        <form>
          <h2><b>INWARD</b></h2>
          <p className="inward-voucher"><b>Date:Time: {formattedDateTime}</b></p>

          <div className="upper-container">
            <TextField
              id="standard-basic"
              label="S.No"
              variant="standard"
              type="text"
              className="SNo"
            />

            

            <TextField
              id="standard-basic"
              label="Rate"
              variant="standard"
              type="text"
              className="SNo"
            />
            <br />
          </div>

          <div  className="shift">
            <FormControl variant="standard"  >
              <InputLabel id="shift-label"><b>Shift</b></InputLabel>
              <Select
                labelId="shift-label"
                id="shift"
                label="Select Shift"
                className="shif"
              >
                <MenuItem value="1"><em><b>None</b></em></MenuItem>
                <MenuItem value="2"><b>Morning</b></MenuItem>
                <MenuItem value="3"><b>Evening</b></MenuItem>
              </Select>
            </FormControl>
          </div>

          <div className="inwad-voucher">
            <TextField
              id="standard-basic"
              label="Name"
              variant="standard"
              type="text"
              className="SNo"
            />
          </div>

          <div className="inwad-AC">
            <FormControl variant="standard" sx={{ m: 1, minWidth: 250 }}>
              <InputLabel id="type-label"><b>Type</b></InputLabel>
              <Select
                labelId="type-label"
                id="type"
                label="Select Type"
              >
                <MenuItem value="1"><em>None</em></MenuItem>
                <MenuItem value="2"><b>Baffelo</b></MenuItem>
                <MenuItem value="3"><b>Cow</b></MenuItem>
              </Select>
            </FormControl>
            <div className="inwad-fat">
              <TextField
                id="standard-basic"
                label="Fat (%)"
                variant="standard"
                type="text"
              />
            </div>
            <div className="inwad-liters">
              <TextField
                id="standard-basic"
                label="Liters"
                variant="standard"
                type="text"
              />
            </div>
          </div>
          <div className="inwad-save">
            <Button variant="contained">
              <b>Save</b>
            </Button>
          </div>
        </form>
      </div>
    </>
  );
}

export default Inward;