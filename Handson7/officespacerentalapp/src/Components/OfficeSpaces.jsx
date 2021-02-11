import React from 'react';
import "../Stylesheets/mystyle.css";
import "bootstrap/dist/css/bootstrap.css";
class OfficeSpaces extends React.Component {

    render() {
        const style = "width:300px; height:200px";
        let color="textGreen";
        return this.props.data.map((item) => {
            if(item.rent<=60000) {
                color="textRed";
            }
            else {
                color="textGreen";
            }
            return (
            <div className="col-sm-3 ofb">
                <img src={item.imgurl} Style={style} className='of' alt="Officespace"></img>
                <h2>Name: {item.name} </h2>
                <h4 className={color}>Rent: {item.rent} </h4>
                <h4>Address: {item.address} </h4>
            </div>
            )
        })
    }
}
export default OfficeSpaces;