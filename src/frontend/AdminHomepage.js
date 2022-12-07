import { React, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ShowUser, CreateUser, UpdateUser, DeleteUser } from './AdminUserAction/index.js';
import { ShowLocation, CreateLocation } from './AdminLocationAction/index.js';
import './AdminHomepage.css';


const AdminHomepage = () => {

  const navigate = useNavigate();  

  // states
  const [action, setAction] = useState("");

  // componentDidMount
  useEffect(() => {
    console.log(window.sessionStorage.getItem("user"));
  }, []);

  const logout = () => {
    window.sessionStorage.removeItem("user");
    navigate("/");
  }

  const actionSwitch = () => {
    return <div className="py-4">
      {action === "showUser" && <ShowUser />}
      {action === "createUser" && <CreateUser />}
      {action === "updateUser" && <UpdateUser />}
      {action === "deleteUser" && <DeleteUser />}
      {action === "showLocation" && <ShowLocation />}
      {action === "createLocation" && <CreateLocation />}
      {/*
      {action === "updateLocation" && showUpdateLocationForm()}
      {action === "deleteLocation" && showDeleteLocationForm()}
      */}
    </div>;
  }

  const closeNav = () => {
    document.getElementById("sidebar").style.width = "0";
    document.getElementById("contentarea").style.marginLeft= "0";
  }

  const myNav =() => {
    document.getElementById("sidebar").style.width = "250px";
    document.getElementById("contentarea").style.marginLeft= "250px";
  }

  return (
    <div id="admin" className="container-fluid">

      {/* please work on frontend design */}
      <div id="sidebar" className='side-bar' style={{width: 0}}>
      <a href="javascript:void(0)" class="closebtn" onClick={() => {closeNav()}}>&times;</a>
      <button className="btn" onClick={() => {setAction("createUser")}}>Create user</button>
      <button className="btn" onClick={() => {setAction("showUser")}}>Show users</button>
      <button className="btn" onClick={() => {setAction("updateUser")}}>Update user</button>
      <button className="btn" onClick={() => {setAction("deleteUser")}}>Delete user</button>
      <button className="btn" onClick={() => {setAction("showLocation")}}>Show locations</button>
      <button className="btn" onClick={() => {setAction("createLocation")}}>Create location</button>
      </div>
      
      <div id='contentarea' className="row">
        <div className="col-10 col-sm-8 col-lg-9 col-xl-10">
          <h2 className='testing'>This is admin's home page</h2>
          <button class="openbtn" onClick={() => {myNav()}}>&#9776; Admin User Action</button>
          {/*
          <button className="btn btn-success mx-1" onClick={() => {setAction("updateLocation"); setUpdateTarget("");}}>Update user</button>
          <button className="btn btn-success mx-1" onClick={() => {setAction("deleteLocation")}}>Delete user</button>
          */}
          {actionSwitch()}
        </div>

        <div className="col-2 col-sm-4 col-lg-3 col-xl-2">
          <p>User: {window.sessionStorage.getItem("user")}</p>
          <button className="btn btn-success" onClick={() => {logout()}}>Log Out</button>
        </div>

      </div>
    </div>
  );
}

export default AdminHomepage;