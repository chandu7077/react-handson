import React from 'react';
import Api from '../api';
import "../Stylesheets/mystyle.css";

export default class PerformanceComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            visible:false,
            performances:[],
            from:"",
            to:"",
            companmyId1:"",
            companmyId2:"",
            companyCode1:-1,
            companyCode2:-1,
            ids:{},
            companies:[]
        }
    }

    async componentDidMount() {

        const url = "http://localhost:8080/companies";
        Api.get(url)
        .then(response => {
            this.setState({companies:response.data.map(company=>{
                this.state.ids[company.companyName]=company.companyId;
                return company.companyName;
            })});
        
        })
        
    }

    handleSelect = event => {
        event.preventDefault();
        this.setState({[event.target.name]:event.target.value});
        console.log(event.target.value);
        console.log(this.state.ids);
    };

    handleSubmit = (event) => {
        event.preventDefault();
        const c1 = this.state.ids[this.state.companyCode1];
        const c2= this.state.ids[this.state.companyCode2];
        var performance=[]
        console.log("fetch called");
        const url=`http://localhost:8080/stocks/compare-performance?companyCode1=${c1}&companyCode2=${c2}&from=${this.state.from}&to=${this.state.to}`;
        alert(url);
        Api.get(url)
        .then(response=> {
            const data = response.data;
            data.map((obj,index)=> {
                if(index%2==0) {
                    performance.push({date:obj.date,price1:obj.stockPrice,price2:-1,company2:"",company1:obj.company.companyName});  
                }
                else {
                    console.log( index/2);
                    let cindex=Math.floor(index/2);
                    performance[cindex].price2=obj.stockPrice;
                    performance[cindex].company2=obj.company.companyName;
                }
            })
         this.setState({performances:performance,visible:true});
        })
        console.log(this.state.performances);
    }

    render() {
        return (
            <div class="container-fluid">
            <form class="row form-row" onSubmit={this.handleSubmit} >
                <div class="col-sm-12 col-md-12">
                    <h2>Compare potential Companies</h2>
                    <h5>Make smart investment decision</h5>
                </div>
                <CompanyNames no="1" ids={this.state.ids} name="companyCode1" companies={this.state.companies.filter(name=> {return name!=this.state.companyCode2})} handleSelect={this.handleSelect}/>
                <CompanyNames no="2" ids={this.state.ids} name="companyCode2" companies={this.state.companies.filter(name=> {return name!=this.state.companyCode1})} handleSelect={this.handleSelect}/>
                <br/>
                <CustomDate name="from" label="From Date" handleSelect={this.handleSelect}/>
                <CustomDate name="to" label="To Date" handleSelect={this.handleSelect}/>
                <br/>
                <div class="col-sm-6 fetch">
                    <button class="btn btn-primary fetch" type="submit">Fetch Details</button>
                </div>
            </form>
            <Performances visible={this.state.visible} performances={this.state.performances}/>
            </div>
        )
    }
}

export function CompanyNames(props) {
    return (
        <div class="col-sm-6 dropdown">
                   
            <label for={props.name}>Select company {props.no}</label>
            <br/>
            <select className="form-control" name={props.name} id={props.no} onChange={props.handleSelect}>
                <option selected>Choose... </option>
                {props.companies.map((name,index) => {
                    return <option value={name}>{name}</option>
                })}
            </select>
            
        </div>
    )
}

export function CustomDate(props) {
    return (
       
    <div class="col-sm-6 droplist">
        <label for={props.name}>{props.label}</label>
        <input class="form-control" type="date" name={props.name} onChange={props.handleSelect}></input>
    </div>
         
    )
}

export function Performances(props) {
    return (
        <div class="container form-row" style={{"visibility": props.visible ? "visible" : "collapse"}}>
            <table class="table">
            <thead>
                <tr>
                <th scope="col">Date</th>
                <th scope="col">Company</th>
                <th scope="col">Stock Price</th>
                </tr>
            </thead>
           
                {props.performances.map(object=>{

                        return (
                            <tbody>
                            <tr>
                                <th scope="row">{object.date}</th>
                                <td>
                                <ul class="list-group list-group-flush">
                                    <li class="list-group-item disabled ">{object.company1}</li>
                                </ul>
                                </td>
                                <td>
                                <ul class="list-group list-group-flush">
                                    <li class="list-group-item disabled">{object.price1}</li>
                                    
                                </ul>
                                </td>
                            </tr>
                           
                            <tr>
                                <th scope="row"></th>
                                <td>
                                <ul class="list-group list-group-flush">
                                    <li class="list-group-item disabled ">{object.company2}</li>
                                </ul>
                                </td>
                                <td>
                                <ul class="list-group list-group-flush">
                                    <li class="list-group-item disabled">{object.price2}</li>
                                    
                                </ul>
                                </td>
                            </tr>
                            
                        </tbody>
                        )
                })}
            
            </table>
        </div>
    )
}
