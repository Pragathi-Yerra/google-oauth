import React,{Component, useState} from "react";
import GoogleLogout from "react-google-login";
function Logout(){
    // const onSuccess=(res)=>{
    //     window.alert('Logout made successfully');
    // };
    // const onFailure=(res)=>{
    //     window.alert('[Logout Failed] res:',res);
    // };
    const [showlogoutButton,setShowLogoutButton]=useState(false);

    const onSignoutSuccess=()=>{
        alert("you have been loggedout");
        console.clear();
        setShowLogoutButton(false);

    }
    return(
      <div style={{align:"center"}}>
        Logout
        <GoogleLogout
        clientId="955726406669-5nkcnltaa62pbdg0505bl3hpkbkl2ilr.apps.googleusercontent.com"
        buttonText="Logout"
        // onSuccess={onSuccess}
        // onFailure={onFailure}
        // cookiePolicy={'single_host_origin'}
        onLogoutSuccess={onSignoutSuccess}
         />
      </div>
    )
  }

export default Logout;