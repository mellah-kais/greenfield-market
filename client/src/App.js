import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./components/Login.jsx";
import Profile from "./components/Profile.jsx";
import Register from "./components/Register.jsx";
import Header from "./components/header.jsx";
import Body from "./components/body.jsx";
import Footer from "./components/footer.jsx"
import Page from './components/Page.jsx'
import Cart from './components/cart.jsx'
// import Switch from "react-bootstrap/esm/Switch";



class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loggedIn : !!localStorage.usertoken
    }
    this.logState = this.logState.bind(this)
    this.logOut = this.logOut.bind(this)

  }
  logState () {
    localStorage.loggedIn = true
    window.location.assign("http://localhost:5000/profile")
  }
  logOut () {
    localStorage.loggedIn = false
    window.location.assign("http://localhost:5000/")
  }
  render() {
    return ( 
      <Router>
        <Switch>
        <div className="App">
              <Header logOut={this.logOut}/>
              <Route exact path="/" component={Body} />
          <div className="container">
            <Route exact path="/register" component={Register} />
            <Route exact path="/login" render={(props) => <Login {...props} logState={this.logState} />} />
            <Route exact path="/profile" component={Profile} />
            <Route exact path="/categories/:product" component={Page} />
            <Route exact path="/Cart" component={Cart}/>

          </div>
          <Footer />
        </div>
        </Switch>
      </Router>
    );
  }
}

export default App;
