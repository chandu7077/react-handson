import './App.css';
import "bootstrap/dist/css/bootstrap.css";
import{MenuComponent} from "../src/components/menucomponent";
import CompanyListComponent from "../src/components/companydetailscomponent";
import LoginComponent from "../src/components/logincomponent";
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import React, { useState,  } from 'react';
import WatchListComponent from '../src/components/watchlistcomponent';
import PerformanceComponent from "../src/components/performancecomponent";
class App extends React.Component {
  
  constructor(props){
    super(props);
    this.state={
      login:true,
      userid:2
    }
  }

  setLogin = (value)=>{
    this.setState({login:value});
  }


render() {
  return (
  <div class="App">
    <MenuComponent isLoggedin={this.state.login}/>
    <Body userid={this.state.userid} setLoginState={this.setLogin} isLoggedin={this.state.login}/>
  </div>
  )
  }
}

export function Body(props) {
  return (
  <BrowserRouter>
      <Switch>
      <Route path="/login">
          <LoginComponent setLoginState={props.setLoginState}/>
      </Route>
      <Route path="/companies">
          <CompanyListComponent userid={props.userid} isLoggedin={props.isLoggedin}/>
      </Route>
      <Route path="/watchlist">
          <WatchListComponent userid={props.userid} isLoggedin={props.isLoggedin}/>
      </Route>
      <Route path="/compare">
          <PerformanceComponent userid={props.userid} isLoggedin={props.isLoggedin}/>
      </Route>
      </Switch>
    </BrowserRouter>
    
  );
}

export default App;
