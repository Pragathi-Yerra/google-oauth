// import React,{Component} from "react";
// import GoogleLogin from "react-google-login";
// export class Login extends Component{
//   responseGoogle=(response)=>{
//     console.log(response);
//     console.log(response.profileObj);
//   }
//   render(){
//     return(
//       <div style={{align:"center"}}>
//         Login
//         <GoogleLogin
//         clientId="955726406669-5nkcnltaa62pbdg0505bl3hpkbkl2ilr.apps.googleusercontent.com"
//         buttonText="Login"
//         onSuccess={this.responseGoogle}
//         onFailure={this.responseGoogle}
//         cookiePolicy={'single_host_origin'}
//          />
//       </div>
//     )
//   }
// }
// export default Login;
import React,{useState} from "react";
import GoogleLogin, { GoogleLogout } from "react-google-login";
function Login(){
    const clientId="955726406669-5nkcnltaa62pbdg0505bl3hpkbkl2ilr.apps.googleusercontent.com";
    const [showLoginButton,SetShowloginButton] = useState(true);
    const [showLogoutButton,SetShowLogoutButton] = useState(false);

    const onLoginSuccess=(res)=>{
        console.log('Login Success] currentUser:',res.profileObj);
        SetShowloginButton(false);
        SetShowloginButton(true);
    };
    const onLoginFailure=(res)=>{
        console.log('[Login Failed] res:',res);
    };
    const onSignoutSuccess = () =>{
        alert("You have been logged out succesfully");
        console.clear();
        SetShowloginButton(true);
        SetShowLogoutButton(false);
    }
    return(
      <div>
        { showLoginButton ?
        <GoogleLogin
        clientId={clientId}
        buttonText="Login"
        onSuccess={onLoginSuccess}
        onFailure={onLoginFailure}
        cookiePolicy={'single_host_origin'}
        isSignedIn={true}
         /> : null}
         {showLogoutButton ?
         <GoogleLogout
         clientId={clientId}
         buttonText="Sign Out"
         onLogoutSuccess={onSignoutSuccess}
         >
         </GoogleLogout>: null
         }
      </div>
    )
  }

export default Login;