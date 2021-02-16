import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import Api from '../api';
import {CompanyDetailsComponent} from "./companydetailscomponent";
import { Redirect } from "react-router-dom";
import { withRouter } from 'react-router-dom';
export default class WatchListComponent extends React.Component{
    constructor(props) {
        super(props);
        this.state = { userid:props.userid, data: [], watch:0, isLoggedin:props.isLoggedin };
    }

    async componentDidMount() {
        const url="http://localhost:8080/watchList/"+this.state.userid
        console.log(url);
        Api.get(url)
        .then(response => {
            this.setState({data:response.data});
        })
        
    }

    handleRemove = async event => {
        const url="http://localhost:8080/watchList/"+this.state.userid+"/"+event.target.id;
        console.log(url);
        Api.delete(url)
        .then(response => {
            this.setState({state:this.state});
        })
        .catch(error=>{
            console.log(error);
        })
    }

    render() {
        console.log("*******",this.state.data)
        return (
        <div class="container-fluid products">
        <div class="row container">
        {
        this.state.data.map((company)=>{
            return (
            <div class="card-col col col-md-4 col-xs-12">
                <CompanyDetailsComponent class="remove" isLoggedin={this.state.isLoggedin} handleWatch={this.handleRemove} key={company.company.id} company={company.company}/>
            </div>
            )
        })
        }
        </div>
        </div>
        )
    }
}
