import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import { Typography, TextField, Button } from "@material-ui/core";
import {registrationAPI} from '../../api/'
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
const SignUp = () => {
  const classes = useStyles();

 let history = useHistory();
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    password_confirmation:""
  });

  const handleSubmit =async (e) => {
    e.preventDefault();
   
    setUser({ name: "", email: "", password: "" });
    registrationAPI(user).then((res) =>{
      const  token  = res.token;

      console.log(token);
      localStorage.setItem('token', token);
      localStorage.setItem('admin', 1);
      localStorage.getItem('token');
      history.push("/admin/dashboard");
      history.go("/admin/dashboard");
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
        <Typography variant="h5">signUp;</Typography>
        <TextField
          className={classes.spacing}
          id="enter-name"
          label="enterName"
          variant="outlined"
          fullWidth
          value={user.name}
          onChange={(e) => setUser({ ...user, name: e.target.value })}
        />
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
          onChange={(e) => setUser({ ...user, password: e.target.value,password_confirmation:e.target.value })}
        />
        <Button
          variant="contained"
          color="primary"
          className={classes.spacing}
          type="submit"
        >
          SignUp
        </Button>
      </form>
    </>
  );
};

export default SignUp;
