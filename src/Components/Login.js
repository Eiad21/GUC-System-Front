import React from "react";
import "./style.css";

//import loginImg from "../../login.svg";






class Login extends React.Component {
  
  constructor() {
    super();
    this.state = {
      username: '',
      password: '',
      error: '',
    };

    this.handlePassChange = this.handlePassChange.bind(this);
    this.handleUserChange = this.handleUserChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.dismissError = this.dismissError.bind(this);
  }

  dismissError() {
    this.setState({ error: '' });
  }

  handleSubmit(evt) {
    evt.preventDefault();

    if (!this.state.username) {
      return this.setState({ error: 'Username is required' });
    }

    if (!this.state.password) {
      return this.setState({ error: 'Password is required' });
    }

    return this.setState({ error: '' });
  }

  handleUserChange(evt) {
    this.setState({
      username: evt.target.value,
    });
  };

  handlePassChange(evt) {
    this.setState({
      password: evt.target.value,
    });
  }


  render() {
    return (
      <div className="maindiv">
      


        <link rel="stylesheet" href="css/style.css" />
        <link href="https://fonts.googleapis.com/css?family=Ubuntu" rel="stylesheet" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="stylesheet" href="path/to/font-awesome/css/font-awesome.min.css" />
        <title>Sign in</title>
        <div className="main">
          <p className="sign" align="center">Log in</p>
          <form className="form1">

          <input className="un " type="text" data-test="username" value={this.state.username} onChange={this.handleUserChange} placeholder="UserName" />
          <br></br>
          <input className="pass" type="password" data-test="password" value={this.state.password} onChange={this.handlePassChange} placeholder="password" />

          <br></br>
         
            <a className="submit" align="center">Log in</a>
            <p className="forgot" align="center"><a href="#">Forgot Password?</a></p>
            
            </form></div>
        </div>
    );
  }
};
export default Login;
