// import React from "react";
// import { Link } from "react-router-dom";
// import TextField from '@mui/material/TextField';
// import InputLabel from '@mui/material/InputLabel';
// import MenuItem from '@mui/material/MenuItem';
// import Button from '@mui/material/Button';

// import FormControl from '@mui/material/FormControl';
// import Select from '@mui/material/Select';

// function User() {
//   return (
//     <>
//     <div className="sidebar">
//         <h2>Dashboard</h2>
//         <ul>
//           <Link to="/User"><li><b>User</b></li></Link>
//           <Link to="/inward"><li><b>Inward</b></li></Link>
//           <Link to="/outward"><li><b>Outward</b></li></Link>
//           <Link to="/payment"><li><b>Payment</b></li></Link>
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
     
//       <div className="user">
        
//       <h1><b>USERS</b>
//       </h1>
         
//          <div className="sel_op">
//          <FormControl variant="standard" sx={{ m: 1, minWidth: 240 }}>
//         <InputLabel id="demo-simple-select-standard-label">Select Role</InputLabel>
//         <Select
//           labelId="demo-simple-select-standard-label"
//           id="demo-simple-select-standard"
       
//           label="Select Role"
//           sx={{ width: 400 }}
//         >
//           <MenuItem value="1">
//             <em><b>None</b></em>
//           </MenuItem>
//           <MenuItem value="2"><b>Shop</b></MenuItem>
//           <MenuItem value="3"><b>Client</b></MenuItem>
//           <MenuItem value="4"><b>Party</b></MenuItem>
//         </Select>
//       </FormControl>
//       </div>
//             <br />
//             <br />
//             <TextField id="standard-basic" label="User Name" variant="standard" type="text"  sx={{ width: 400 }}/>
//        <br />
//        <br />
//        <TextField id="standard-basic" label="password" variant="standard" type="password"  sx={{ width: 400 }} />
//       <br />
//       <br />

//       <TextField id="standard-basic" label="Mobile" variant="standard" type="text"  sx={{ width: 400 }} />
//       <br />
//       <br />

//       <TextField id="standard-basic" label="Remark" variant="standard" type="text"  sx={{ width: 400 }} />
//       <br />
//       <br />
      
//       <Link to="/Dashboard">
//       <Button variant="outlined"  sx={{ width: 200 }} ><b>Save</b></Button>
//       </Link>
      
//       </div>
    
//     </>
//   )
// }

// export default User;



import React from "react";
import { Link } from "react-router-dom";
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Button from '@mui/material/Button';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import List from "@mui/material/List";
import CancelSharpIcon from "@mui/icons-material/CancelSharp";

const drawerWidth = 240;
function User() {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

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
                <li><b>User</b></li>
              </Link>
              <Link to="/inward">
                <li><b>Inward</b></li>
              </Link>
              <Link to="/outward">
                <li><b>Outward</b></li>
              </Link>

              <Link to="/payment">
              <li><b>Payment</b></li>
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

      <div className="user">
        <h1><b>USERS</b></h1>
        <div className="sel_op">
          <FormControl variant="standard" sx={{ m: 1, minWidth: 240 }}>
            <InputLabel id="demo-simple-select-standard-label">Select Role</InputLabel>
            <Select
              labelId="demo-simple-select-standard-label"
              id="demo-simple-select-standard"
              label="Select Role"
              sx={{ width: '90%' }}
            >
              <MenuItem value="1">
                <em><b>None</b></em>
              </MenuItem>
              <MenuItem value="2"><b>Shop</b></MenuItem>
              <MenuItem value="3"><b>Client</b></MenuItem>
              <MenuItem value="4"><b>Party</b></MenuItem>
            </Select>
          </FormControl>
        </div>
        <TextField id="standard-basic" label="User Name" variant="standard" type="text" sx={{ width: '50%' }} /><br></br>
        <TextField id="standard-basic" label="Password" variant="standard" type="password" sx={{ width: '50%' }} /><br></br>
        <TextField id="standard-basic" label="Mobile" variant="standard" type="text" sx={{ width: '50%' }} /><br></br>
        <TextField id="standard-basic" label="Remark" variant="standard" type="text" sx={{ width: '50%' }} /><br></br>
        <Link to="/Dashboard"><br></br>
        <br></br>
          <Button variant="outlined" sx={{ width: '100%', maxWidth: 200 }}><b>Save</b></Button>
        </Link>
      </div>
    </>
  );
}

export default User;
