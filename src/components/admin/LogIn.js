import React, { useState } from "react";
import { useHistory } from "react-router-dom";

import { makeStyles } from "@material-ui/core/styles";
import { Typography, TextField, Button } from "@material-ui/core";

import {loginAPI} from '../../api/'
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

const LogIn = () => {

  const classes = useStyles();
   let history = useHistory();
  const [user, setUser] = useState({
    email: "",
    password: ""
  });

  const handleSubmit =async (e) => {
    e.preventDefault();
    setUser({ email: "", password: "" });
    loginAPI(user).then((res) =>{
         
        console.log(res);
        if(res.status === "success"){
            const  token  = res.token;
            localStorage.setItem('token', token);
            localStorage.setItem('admin', 1);
            localStorage.getItem('token');
             history.push("/admin/dashboard");
             history.go();
        }else{
            alert(res.msg);
            
        }
    })
    //  dispatch(loginAction(user));
    
  };

  return (
    <>
      <form
        noValidate
        autoComplete="off"
        className={classes.formStyle}
        onSubmit={handleSubmit}
      >
        <Typography variant="h5">Login</Typography>
         
        <TextField
          className={classes.spacing}
          id="enter-email"
          label="enterEmail"
          variant="outlined"
          fullWidth
          value={user.email}
          onChange={(e) => setUser({ ...user, email: e.target.value })}
        />
        <TextField
          className={classes.spacing}
          id="enter-password"
          type="password"
          label="enterPassword"
          variant="outlined"
          fullWidth
          value={user.password}
          onChange={(e) => setUser({ ...user, password: e.target.value })}
        />
        <Button
          variant="contained"
          color="primary"
          className={classes.spacing}
          type="submit"
        >
          Login
        </Button>
      </form>
    </>
  );
};

export default LogIn;
