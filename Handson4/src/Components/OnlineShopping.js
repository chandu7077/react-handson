import React from "react";
import Cart from "./Cart";
class OnlineShopping extends React.Component {
  render() {
    const CartInfo = [
      { itemname: "Laptop", price: 80000 },
      { itemname: "Smart TV", price: 120000 },
      { itemname: "Washing Machine", price: 50000 },
      { itemname: "Mobile", price: 28000 },
      { itemname: "Refrigirator", price: 20000 }
    ];

    return (
      <div className="mydiv">
        <h1 Style="color:green">Items Ordered: </h1>
        <div className="card2">
          <table>
            <tr>
              <th>Name</th>
              <th>Price</th>
            </tr>
            <Cart item={CartInfo} />
          </table>
        </div>
      </div>
    );
  }
}

export default OnlineShopping;
