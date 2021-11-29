import React, { useState } from "react";
import { useHistory,NavLink } from "react-router-dom";

import { makeStyles } from "@material-ui/core/styles";
import { Typography, TextField, Button } from "@material-ui/core";

import {userloginAPI} from '../../api/'
const useStyles = makeStyles({
  formStyle: {
    margin: "0px auto",
    padding: "30px",
    borderRadius: "9px",
    boxShadow: "0px 0px 12px -3px #000000",
  },
  spacing: {
    marginTop: "20px",
  },
});

const UserLogin = () => {

  const classes = useStyles();
   let history = useHistory();
  const [user, setUser] = useState({
    email: "",
    password: ""
  });

  const handleSubmit =async (e) => {
    e.preventDefault();
    setUser({ email: "", password: "" });
    userloginAPI(user).then((res) =>{
         
        // console.log(res);
        if(res.status === "success"){
            const  token  = res.token;
            localStorage.setItem('token', token);
            localStorage.setItem('user', 1);
            localStorage.getItem('token');
             history.push("/");
             history.go("/");
        }else{
            alert(res.status);
            
        }
    })
    //  dispatch(loginAction(user));
    
  };
return (
    <div class="flex flex-col items-center justify-center min-h-screen bg-white">
	<div class="bg-green-400 w-full sm:w-3/4 max-w-lg p-12 pb-6 shadow-2xl rounded">
		<div class="text-white pb-4 text-3xl font-semibold">Login</div>
		<form
        noValidate
        autoComplete="off"
        onSubmit={handleSubmit}
        >
        <input
			class="block text-gray-700 p-1 m-4 ml-0 w-full rounded text-lg font-normal placeholder-gray-300"
			id="username"
			type="email"
			placeholder="someone@example.com"
            value={user.email}
          onChange={(e) => setUser({ ...user, email: e.target.value })}
		/>
		<input
			class="block text-gray-700 p-1 m-4 ml-0 w-full rounded text-lg font-normal placeholder-gray-300"
			id="password"
			type="password"
			placeholder="password"
            value={user.password}
          onChange={(e) => setUser({ ...user, password: e.target.value })}
		/>
		<button
            type="submit"
			class="inline-block mt-2 bg-green-600 hover:bg-green-700 focus:bg-green-800 px-6 py-2 rounded text-white shadow-lg"
		>
			Login
		</button>
        </form>
		<div class="pt-10 flex items-center justify-between">
			
			<NavLink to="signup" class="inline-block text-green-700 hover:text-green-900 font-normal text-sm">
				Create an Account
			</NavLink>
		</div>
	</div>
</div>
)
};

export default UserLogin;