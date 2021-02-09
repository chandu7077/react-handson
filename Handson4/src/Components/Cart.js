import React from "react";
import "../Stylesheets/mystyle.css";
class Cart extends React.Component {
  render() {
    return this.props.item.map((item) => {
      return (
        <tr>
          <td>{item.itemname}</td>
          <td>{item.price}</td>
        </tr>
      );
    });
  }
}

export default Cart;
