import React from 'react';
import Api from '../api';
import "bootstrap/dist/css/bootstrap.css";
export class CompanyListComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = { userid:props.userid, data: [], watch:-1, isLoggedin:props.isLoggedin };
      }

    async componentDidMount() {
    const response = await fetch("http://localhost:8080/companies");
    const results = await response.json();
    this.setState({data:results});
    }

    handleWatch = async event => {
        event.preventDefault();
        console.log({"userId":this.state.userid, "companyId":event.target.id});
        Api.post("watchList",{"userId":this.state.userid, "companyId":event.target.id})
        .then(response => {
            console.log(response);
            event.target.disabled=true;
        })
        .catch(error=> {
            console.log(error);
        })
    }


    render() {
        return (
        <div class="container-fluid products">
        <div class="row container">
        {
        this.state.data.map((company)=>{
            return (
            <div class="card-col col col-md-4 col-xs-12">
                <CompanyDetailsComponent class="watch" isLoggedin={this.state.isLoggedin} handleWatch={this.handleWatch} key={company.companyId} company={company}/>
            </div>
            )
        })
        }
        </div>
        </div>
        )
    }
}

export function CompanyDetailsComponent(props) {

    return (
        <div class="card text-center">
            <div class="card-header">{props.company.companyName}</div>
            <p class="card-text">{props.company.description}</p>
            <div class="card-footer">Today's Price: ${props.company.currentStockPrice}
            { props.isLoggedin ? <button class={"btn "+props.class} id={props.company.companyId} onClick={props.handleWatch}>{props.class}</button> : "" }
            </div>
        </div>
    )

}

export default CompanyListComponent;