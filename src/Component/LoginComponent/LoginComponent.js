import React, { useState } from 'react';
import { Input, Button } from '@material-ui/core';
import { connect } from 'react-redux'
import { mapDispatchToProps, mapStateToProps } from "./maping"
import { useHistory, useLocation } from "react-router-dom";
import Avatar from '@material-ui/core/Avatar';
import CssBaseline from '@material-ui/core/CssBaseline';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import useStyles from './Stayles'
import { MyContext } from '../../ContextProvider'

const axios = require("axios")




function LoginComponent(props) {
  debugger
  const classes = useStyles();

  let history = useHistory();
  let location = useLocation();
  let [email, setEmail] = useState('');
  let [password, setPassword] = useState('');
  let { from } = location.state || { from: { pathname: "/" } };

  function Login(Auth) {
    debugger
    history.replace(from);
    axios.post("https://reqres.in/api/login", {
      email: email,
      password: password
    }).then((e) => {
      
      props.Auth()
      history.replace(from);
    }).catch(e => { window.alert("Invaled Email Or Password") })

  }
  return (

    <Grid container justify="center" alignItems="center" component="main" className={classes.root}>
      <Grid container justify="center" className={classes.cont}>

        <CssBaseline />
        <Grid item xs={12} sm={8} md={4} component={Paper} elevation={6} square>
          <div className={classes.paper}>
            <Avatar className={classes.avatar}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Log in
          </Typography>

            <Input
              placeholder="Email"
              onChange={e => { setEmail(e.target.value) }}
              value={email}
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
            />
            <Input
              placeholder="Password"
              onChange={e => { setPassword(e.target.value) }}
              value={password}
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />


            {//un comment this for Context Api And Commint the the button tag
            /* <MyContext.Consumer>
              {
                (context) =>

                  <Button
                    onClick={() => { Login(context.Auth) }}
                    type="submit"
                    fullWidth
                    variant="contained"
                    color="primary"
                    className={classes.submit}
                  >
                    Log In
            </Button>

              }
            </MyContext.Consumer> */}
                  <Button
                    onClick={Login}
                    type="submit"
                    fullWidth
                    variant="contained"
                    color="primary"
                    className={classes.submit}
                  >
                    Log In
            </Button>

            <Typography component="h4" variant="h5">
             Valid Email : eve.holt@reqres.in
          </Typography> <Typography component="h4" variant="h5">
              Valid Password : cityslicka
          </Typography>
            <Box mt={5}>
            </Box>
          </div>
        </Grid>
        <Grid item xs={false} sm={false} md={4} className={classes.image}>
        </Grid>
      </Grid>
    </Grid>
  );
}



export default connect(mapStateToProps, mapDispatchToProps)(LoginComponent) 