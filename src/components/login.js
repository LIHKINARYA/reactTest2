import React, {useState} from 'react';
import Loginform from '../components/Loginform';

import Mainpage from './Mainpage';


export const Login = () => {
    const adminUser = {
        username : "test-admin",
        password : "test-admin"
      }
    
      const salesExec = { 
        username : "test-sales",
        password : "test-sales"
      }
    
      const [user,setUser] = useState({username: "", password: ""});
      const [error,setError] = useState("");
    
      const Login = details => {
        console.log(details);

        if(details.username == adminUser.username && details.password == adminUser.password){
          console.log("loggedIn");
          setUser({
            username: details.username,
            password: details.password
          })
  
        }else if(details.username == salesExec.username && details.password == salesExec.password) {
            setUser({
            username: details.username,
            password: details.password
            })
        }
        else {
          console.log("Details do not match!");
          setError("Details do not match!");
        }
      }
    
    return ( 
        <div className="App">
            {(user.username != "") ? (
                 <Mainpage username={user.username}/>
                ) : (
                  <Loginform Login={Login} error={error}/>
                )
            }
        </div> 
    );
}
 

