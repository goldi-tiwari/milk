// import React from "react";
// import { Link } from "react-router-dom";



// const 
// Dashboard = () => {
//   return (
//     <>
//       <center>
//         <h1>Home</h1>
//       </center>

//       <div className="sidebar">
    
//         <h2><b>Dashboard</b></h2>
//         <ul>
//           <Link to="/User"><li><b>User</b></li></Link>
//           <Link to="/inward"><li><b>Inward</b></li></Link>
//           <Link to="/outward"><li><b>Outward</b></li></Link>
          
//           <li><b>Payment</b></li>
//           <li><b>Receipt</b></li>
//           <li><b>Row Material Purpose</b></li>
//           <li><b>Consumption</b></li>
//           <li className="dropdown">
//            <b> Employee</b>
//             <ul className="dropdown-content">
//               <Link to="/Group">
//                 <li>Account</li>
//               </Link>

                
//               <Link to="/Account">
//               <li>Attendace</li>
//               </Link>
              
              
//               <li>Employee</li>
//             </ul>
//           </li>
//         </ul>
//       </div>
//     </>
//   );
// };

// export default Dashboard;
   


// import React, { useState } from "react";
// import { Link } from "react-router-dom";

// const Dashboard = () => {
//   const [isSidebarOpen, setIsSidebarOpen] = useState(true);

//   const toggleSidebar = () => {
//     setIsSidebarOpen(!isSidebarOpen);
//   };

//   return (
//     <>
//       <header>
//         <button className="sidebar-toggle" onClick={toggleSidebar}>
//           ☰
//         </button>
//       </header>

//       <div className={`sidebar ${isSidebarOpen ? 'open' : 'closed'}`}>
//         <h2><b>Dashboard</b></h2>
//         <ul>
//           <Link to="/User"><li><b>User</b></li></Link>
//           <Link to="/inward"><li><b>Inward</b></li></Link>
//           <Link to="/outward"><li><b>Outward</b></li></Link>
//           <li><b>Payment</b></li>
//           <li><b>Receipt</b></li>
//           <li><b>Row Material Purpose</b></li>
//           <li><b>Consumption</b></li>
//           <li className="dropdown">
//             <b>Employee</b>
//             <ul className="dropdown-content">
//               <Link to="/Group"><li>Account</li></Link>
//               <Link to="/Account"><li>Attendance</li></Link>
//               <li>Employee</li>
//             </ul>
//           </li>
//         </ul>
//       </div>

//       <div className="main-content">
//         <center>
//           <h1>Home</h1>
//         </center>
//       </div>
//     </>
//   );
// };

// export default Dashboard;


import * as React from "react";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import List from "@mui/material/List";
import { Link } from "react-router-dom";
import CancelSharpIcon from "@mui/icons-material/CancelSharp";

const drawerWidth = 240;

export default function Dashboard() {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
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
  );
}
