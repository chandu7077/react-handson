import './App.css';
import "bootstrap/dist/css/bootstrap.css";
import{MenuComponent} from "../src/components/menucomponent";
import CompanyListComponent from "../src/components/companydetailscomponent";
import LoginComponent from "../src/components/logincomponent";
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import React, { useState,  } from 'react';
import WatchListComponent from '../src/components/watchlistcomponent';
import PerformanceComponent from "../src/components/performancecomponent";
import auth from "../src/components/auth";
class App extends React.Component {
  
  constructor(props){
    super(props);
    this.state={
      userid:2
    }
    console.log("satte:",this.state);
  }

  setLogin = ()=>{
    this.setState({userid:2});
  }


render() {
  //<!.. <Body userid={this.state.userid} setLoginState={this.setLogin} isLoggedin={this.state.login}/>>
  const props=this.state;
  console.log("app render called",auth.isLoggedin());
  return (
  <div class="App">
     <MenuComponent isLoggedin={auth.isLoggedin()}/>
     <Switch>
     <Route exact path="/">
          <CompanyListComponent userid={props.userid} isLoggedin={auth.isLoggedin()}/>
    </Route>
    <Route exact path="/login">
          <LoginComponent setLoginState={this.setLogin} from=""/>
    </Route>
    <Route exact path="/companies" component={CompanyListComponent} userid={props.userid} isLoggedin={auth.isLoggedin()}/>
    <PrivateRoute path="/watchlist" component={WatchListComponent} userid={props.userid} isLoggedin={auth.isLoggedin()}/>
    <PrivateRoute path="/compare" component={PerformanceComponent} userid={props.userid} isLoggedin={auth.isLoggedin()}/>
    <PrivateRoute path="/logout" component={LoginComponent} from="logout"/>
    </Switch>
  </div>
  )
  }
}

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
  {...rest}
  render={props =>
  
  auth.isLoggedin() ? 
  (
  <Component {...props} />
  ) :
  (
  <Redirect
  to={{
  pathname: "/login"
  }}
  />
  )
  }
  />
  );

export default App;