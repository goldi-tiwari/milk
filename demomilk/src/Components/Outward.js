// import React, { useState, useEffect } from "react";
// import { Link } from "react-router-dom";
// import TextField from "@mui/material/TextField";
// import DeleteSweepIcon from '@mui/icons-material/DeleteSweep';
// import EditNoteIcon from '@mui/icons-material/EditNote';
// import Button from "@mui/material/Button";
// import Fab from '@mui/material/Fab';
// import EditIcon from '@mui/icons-material/Edit';

// function Outward() {
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

//       <div className="Tabel-box">
//         <h2 className="Hadding"><b>Outward</b></h2>

//         <div className="container">
//           <p><b>Date : Time:- {formattedDateTime}</b></p>

//           <div className="outward-rate">
//             <TextField
//               id="standard-basic"
//               label="Rate"
//               variant="standard"
//               type="text"
//               sx={{ width: 300 }}
//             />
//           </div>
//         </div>
//         <table>
//           <thead>
//             <tr>
//               <th rowSpan="2"><b>S.No</b></th>
//               <th rowSpan="2"><b>Name</b></th>
//               <th colSpan="2"><b>Buffalo</b></th>
//               <th colSpan="2"><b>Cow</b></th>
//               <th rowSpan="2" colSpan="2"><b>Action</b></th>
//             </tr>
//             <tr>
//               <th><b>Morning</b></th>
//               <th><b>Evening</b></th>

//               <th><b>Morning</b></th>
//               <th><b>Evening</b></th>
//             </tr>
//           </thead>
//           <tbody>
//             <tr>
//               <td>1</td>
//               <td>Rajveer chohan</td>
//               <td><TextField id="standard-basic" variant="standard"
//                 sx={{ width: 100 }}
//                 InputProps={{
//                   disableUnderline: true,
//                 }} /></td>
//               <td><TextField id="standard-basic" variant="standard"
//                 sx={{ width: 100 }}
//                 InputProps={{
//                   disableUnderline: true,
//                 }} /></td>
//               <td><TextField id="standard-basic" variant="standard"
//                 sx={{ width: 100 }}
//                 InputProps={{
//                   disableUnderline: true,
//                 }} /></td>
//               <td><TextField id="standard-basic" variant="standard"
//                 sx={{ width: 100 }}
//                 InputProps={{
//                   disableUnderline: true,
//                 }} /></td>

//               <td>
//                 <Fab color="primary" aria-label="edit" sx={{ width: 40, height: 20 }} >
//                   <DeleteSweepIcon sx={{ width: 20 }} />
//                 </Fab>
//               </td>
//               <td>
//                 <Fab color="secondary" aria-label="edit" sx={{ width: 40, height: 20 }} >
//                   <EditIcon sx={{ width: 20 }} />
//                 </Fab>
//               </td>

//               {/* <td><EditNoteIcon/></td> */}
//             </tr>


//             <tr>
//               <td>2</td>
//               <td>Rajveer chohan</td>
//               <td><TextField id="standard-basic" variant="standard"
//                 sx={{ width: 100 }}
//                 InputProps={{
//                   disableUnderline: true,
//                 }} /></td>
//               <td><TextField id="standard-basic" variant="standard"
//                 sx={{ width: 100 }}
//                 InputProps={{
//                   disableUnderline: true,
//                 }} /></td>
//               <td><TextField id="standard-basic" variant="standard"
//                 sx={{ width: 100 }}
//                 InputProps={{
//                   disableUnderline: true,
//                 }} /></td>
//               <td></td>
//               <td>
//                 <Fab color="primary" aria-label="edit" sx={{ width: 40, height: 20 }} >
//                   <DeleteSweepIcon sx={{ width: 20 }} />
//                 </Fab>
//               </td>
//               <td>
//                 <Fab color="secondary" aria-label="edit" sx={{ width: 40, height: 20 }} >
//                   <EditIcon sx={{ width: 20 }} />
//                 </Fab>
//               </td>
//             </tr>
//             <tr>
//               <td>3</td>
//               <td>Rajveer chohan</td>
//               <td><TextField id="standard-basic" variant="standard"
//                 sx={{ width: 100 }}
//                 InputProps={{
//                   disableUnderline: true,
//                 }} /></td>
//               <td><TextField id="standard-basic" variant="standard"
//                 sx={{ width: 100 }}
//                 InputProps={{
//                   disableUnderline: true,
//                 }} /></td>
//               <td><TextField id="standard-basic" variant="standard"
//                 sx={{ width: 100 }}
//                 InputProps={{
//                   disableUnderline: true,
//                 }} /></td>
//               <td><TextField id="standard-basic" variant="standard"
//                 sx={{ width: 100 }}
//                 InputProps={{
//                   disableUnderline: true,
//                 }} /></td>
//               <td>
//                 <Fab color="primary" aria-label="edit" sx={{ width: 40, height: 20 }} >
//                   <DeleteSweepIcon sx={{ width: 20 }} />
//                 </Fab>
//               </td>
//               <td>
//                 <Fab color="secondary" aria-label="edit" sx={{ width: 40, height: 20 }} >
//                   <EditIcon sx={{ width: 20 }} />
//                 </Fab>
//               </td>
//             </tr>
//             <tr>
//               <td>4</td>
//               <td>Rajveer chohan</td>
//               <td><TextField id="standard-basic" variant="standard"
//                 sx={{ width: 100 }}
//                 InputProps={{
//                   disableUnderline: true,
//                 }} /></td>
//               <td><TextField id="standard-basic" variant="standard"
//                 sx={{ width: 100 }}
//                 InputProps={{
//                   disableUnderline: true,
//                 }} /></td>
//               <td><TextField id="standard-basic" variant="standard"
//                 sx={{ width: 100 }}
//                 InputProps={{
//                   disableUnderline: true,
//                 }} /></td>
//               <td><TextField id="standard-basic" variant="standard"
//                 sx={{ width: 100 }}
//                 InputProps={{
//                   disableUnderline: true,
//                 }} /></td>
//               <td>
//                 <Fab color="primary" aria-label="edit" sx={{ width: 40, height: 20 }} >
//                   <DeleteSweepIcon sx={{ width: 20 }} />
//                 </Fab>
//               </td>
//               <td>
//                 <Fab color="secondary" aria-label="edit" sx={{ width: 40, height: 20 }} >
//                   <EditIcon sx={{ width: 20 }} />
//                 </Fab>
//               </td>
//             </tr>
//             <tr>
//               <td>5</td>
//               <td>Rajveer chohan</td>
//               <td><TextField id="standard-basic" variant="standard"
//                 sx={{ width: 100 }}
//                 InputProps={{
//                   disableUnderline: true,
//                 }} /></td>
//               <td><TextField id="standard-basic" variant="standard"
//                 sx={{ width: 100 }}
//                 InputProps={{
//                   disableUnderline: true,
//                 }} /></td>
//               <td><TextField id="standard-basic" variant="standard"
//                 sx={{ width: 100 }}
//                 InputProps={{
//                   disableUnderline: true,
//                 }} /></td>
//               <td><TextField id="standard-basic" variant="standard"
//                 sx={{ width: 100 }}
//                 InputProps={{
//                   disableUnderline: true,
//                 }} /></td>
//               <td>
//                 <Fab color="primary" aria-label="edit" sx={{ width: 40, height: 20 }} >
//                   <DeleteSweepIcon sx={{ width: 20 }} />
//                 </Fab>
//               </td>
//               <td>
//                 <Fab color="secondary" aria-label="edit" sx={{ width: 40, height: 20 }} >
//                   <EditIcon sx={{ width: 20 }} />
//                 </Fab>
//               </td>
//             </tr>
//             <tr>
//               <td>6</td>
//               <td>Rajveer chohan</td>
//               <td><TextField id="standard-basic" variant="standard"
//                 sx={{ width: 100 }}
//                 InputProps={{
//                   disableUnderline: true,
//                 }} /></td>
//               <td><TextField id="standard-basic" variant="standard"
//                 sx={{ width: 100 }}
//                 InputProps={{
//                   disableUnderline: true,
//                 }} /></td>
//               <td><TextField id="standard-basic" variant="standard"
//                 sx={{ width: 100 }}
//                 InputProps={{
//                   disableUnderline: true,
//                 }} /></td>
//               <td><TextField id="standard-basic" variant="standard"
//                 sx={{ width: 100 }}
//                 InputProps={{
//                   disableUnderline: true,
//                 }} /></td>
//               <td>
//                 <Fab color="primary" aria-label="edit" sx={{ width: 40, height: 20 }} >
//                   <DeleteSweepIcon sx={{ width: 20 }} />
//                 </Fab>
//               </td>
//               <td>
//                 <Fab color="secondary" aria-label="edit" sx={{ width: 40, height: 20 }} >
//                   <EditIcon sx={{ width: 20 }} />
//                 </Fab>
//               </td>
//             </tr>
//             <tr>
//               <td>7</td>
//               <td>Rajveer chohan</td>
//               <td><TextField id="standard-basic" variant="standard"
//                 sx={{ width: 100 }}
//                 InputProps={{
//                   disableUnderline: true,
//                 }} /></td>
//               <td><TextField id="standard-basic" variant="standard"
//                 sx={{ width: 100 }}
//                 InputProps={{
//                   disableUnderline: true,
//                 }} /></td>
//               <td><TextField id="standard-basic" variant="standard"
//                 sx={{ width: 100 }}
//                 InputProps={{
//                   disableUnderline: true,
//                 }} /></td>
//               <td><TextField id="standard-basic" variant="standard"
//                 sx={{ width: 100 }}
//                 InputProps={{
//                   disableUnderline: true,
//                 }} /></td>
//               <td>
//                 <Fab color="primary" aria-label="edit" sx={{ width: 40, height: 20 }} >
//                   <DeleteSweepIcon sx={{ width: 20 }} />
//                 </Fab>
//               </td>
//               <td>
//                 <Fab color="secondary" aria-label="edit" sx={{ width: 40, height: 20 }} >
//                   <EditIcon sx={{ width: 20 }} />
//                 </Fab>
//               </td>
//             </tr>
//             <tr>
//               <td>8</td>
//               <td>Rajveer chohan</td>
//               <td><TextField id="standard-basic" variant="standard"
//                 sx={{ width: 100 }}
//                 InputProps={{
//                   disableUnderline: true,
//                 }} /></td>
//               <td><TextField id="standard-basic" variant="standard"
//                 sx={{ width: 100 }}
//                 InputProps={{
//                   disableUnderline: true,
//                 }} /></td>
//               <td><TextField id="standard-basic" variant="standard"
//                 sx={{ width: 100 }}
//                 InputProps={{
//                   disableUnderline: true,
//                 }} /></td>
//               <td><TextField id="standard-basic" variant="standard"
//                 sx={{ width: 100 }}
//                 InputProps={{
//                   disableUnderline: true,
//                 }} /></td>
//               <td>
//                 <Fab color="primary" aria-label="edit" sx={{ width: 40, height: 20 }} >
//                   <DeleteSweepIcon sx={{ width: 20 }} />
//                 </Fab>
//               </td>
//               <td>
//                 <Fab color="secondary" aria-label="edit" sx={{ width: 40, height: 20 }} >
//                   <EditIcon sx={{ width: 20 }} />
//                 </Fab>
//               </td>
//             </tr>
//             <tr>

//               <td>9</td>
//               <td>Rajveer chohan</td>
//               <td><TextField id="standard-basic" variant="standard"
//                 sx={{ width: 100 }}
//                 InputProps={{
//                   disableUnderline: true,
//                 }} /></td>
//               <td><TextField id="standard-basic" variant="standard"
//                 sx={{ width: 100 }}
//                 InputProps={{
//                   disableUnderline: true,
//                 }} /></td>
//               <td><TextField id="standard-basic" variant="standard"
//                 sx={{ width: 100 }}
//                 InputProps={{
//                   disableUnderline: true,
//                 }} /></td>
//               <td><TextField id="standard-basic" variant="standard"
//                 sx={{ width: 100 }}
//                 InputProps={{
//                   disableUnderline: true,
//                 }} /></td>
//               <td>
//                 <Fab color="primary" aria-label="edit" sx={{ width: 40, height: 20 }} >
//                   <DeleteSweepIcon sx={{ width: 20 }} />
//                 </Fab>
//               </td>
//               <td>
//                 <Fab color="secondary" aria-label="edit" sx={{ width: 40, height: 20 }} >
//                   <EditIcon sx={{ width: 20 }} />
//                 </Fab>
//               </td>
//             </tr>
//             <tr>
//               <td>10</td>
//               <td>Rajveer chohan</td>
//               <td> <TextField id="standard-basic" variant="standard"
//                 sx={{ width: 100 }}
//                 InputProps={{
//                   disableUnderline: true,
//                 }} /></td>
//               <td><TextField id="standard-basic" variant="standard"
//                 sx={{ width: 100 }}
//                 InputProps={{
//                   disableUnderline: true,
//                 }} /></td>
//               <td><TextField id="standard-basic" variant="standard"
//                 sx={{ width: 100 }}
//                 InputProps={{
//                   disableUnderline: true,
//                 }} /></td>
//               <td><TextField id="standard-basic" variant="standard"
//                 sx={{ width: 100 }}
//                 InputProps={{
//                   disableUnderline: true,
//                 }} /></td>
//               <td>
//                 <Fab color="primary" aria-label="edit" sx={{ width: 40, height: 20 }} >
//                   <DeleteSweepIcon sx={{ width: 20 }} />
//                 </Fab>
//               </td>
//               <td>
//                 <Fab color="secondary" aria-label="edit" sx={{ width: 40, height: 20 }} >
//                   <EditIcon sx={{ width: 20 }} />
//                 </Fab>
//               </td>
//             </tr>
//           </tbody>
//         </table>

//         <div className="outwad-save-btn">
//           <Button variant="contained" color="success">
//             <b>Save</b>
//           </Button>
//         </div>
//       </div>
//     </>
//   );
// }
// export default Outward;



import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import TextField from "@mui/material/TextField";
import DeleteSweepIcon from '@mui/icons-material/DeleteSweep';
import EditIcon from '@mui/icons-material/Edit';
import Button from "@mui/material/Button";
import Fab from '@mui/material/Fab';
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import List from "@mui/material/List";
import CancelSharpIcon from "@mui/icons-material/CancelSharp";

function Outward() {
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
      <div className="table-box">
        <h2 className="heading"><b>Outward</b></h2>
        <div className="container">
          <p><b>Date : Time:- {formattedDateTime}</b></p>
          <div className="outward-rate">
            <TextField
              id="standard-basic"
              label="Rate"
              variant="standard"
              type="text"
              sx={{ width: '100%' }}
            />
          </div>
        </div>
        <table>
          <thead>
            <tr>
              <th rowSpan="2"><b>S.No</b></th>
              <th rowSpan="2"><b>Name</b></th>
              <th colSpan="2"><b>Buffalo</b></th>
              <th colSpan="2"><b>Cow</b></th>
              <th rowSpan="2" colSpan="2"><b>Action</b></th>
            </tr>
            <tr>
              <th><b>Morning</b></th>
              <th><b>Evening</b></th>
              <th><b>Morning</b></th>
              <th><b>Evening</b></th>
            </tr>
          </thead>
          <tbody>
            {[...Array(10)].map((_, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>Rajveer Chohan</td>
                <td><TextField id="standard-basic" variant="standard" sx={{ width: '100%' }} InputProps={{ disableUnderline: true }} /></td>
                <td><TextField id="standard-basic" variant="standard" sx={{ width: '100%' }} InputProps={{ disableUnderline: true }} /></td>
                <td><TextField id="standard-basic" variant="standard" sx={{ width: '100%' }} InputProps={{ disableUnderline: true }} /></td>
                <td><TextField id="standard-basic" variant="standard" sx={{ width: '100%' }} InputProps={{ disableUnderline: true }} /></td>
                <td>
                  <Fab color="primary" aria-label="delete" sx={{ width: 40, height: 40 }}>
                    <DeleteSweepIcon sx={{ width: 20 }} />
                  </Fab>
                </td>
                <td>
                  <Fab color="secondary" aria-label="edit" sx={{ width: 40, height: 40 }}>
                    <EditIcon sx={{ width: 20 }} />
                  </Fab>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="outward-save-btn">
          <Button variant="contained" color="success">
            <b>Save</b>
          </Button>
        </div>
      </div>
    </>
  );
}

export default Outward;
