import React from "react";
import "../Stylesheets/mystyle.css";
class CountPeople extends React.Component {
  constructor() {
    super();
    this.state = {
      entrycount: 0,
      exitcount: 0,
      c: 0
    };
    this.updateExit = this.updateExit.bind(this);
  }

  updateEntry = () => {
    this.setState((prevState, props) => {
      return { entrycount: prevState.entrycount + 1 };
    });
  };

  updateExit() {
    this.setState((prevState, props) => {
      return { exitcount: prevState.exitcount + 1 };
    });
  }

  render() {
    return (
      <div className="container mydiv">
        <div className="row ">
          <div className="col-sm-6">
            <button onClick={this.updateEntry} className="btn-success">
              Login
            </button>
            <i> {this.state.entrycount} People Entered!!!</i>
          </div>
          <div className="col-sm-6">
            <button onClick={this.updateExit} className="btn-danger">
              Exit
            </button>
            <i> {this.state.exitcount} People Left!!!</i>
          </div>
        </div>
      </div>
    );
  }
}

export default CountPeople;
