import React, { Component } from "react";

class MainContent extends Component {
  state = {
    pageTitle: "Customers",
    customersCount: 5,
    customers: [
      {
        id: 1,
        name: "Allen",
        num: 9856424589,
        address: { city: "London" },
        photo: "https://picsum.photos/id/1010/60",
      },
      {
        id: 2,
        name: "Dustin",
        num: 9878587526,
        address: { city: "Berlin" },
        photo: "https://picsum.photos/id/1021/60",
      },
      {
        id: 3,
        name: "Suzie",
        num: 9845578542,
        address: { city: "Hawkins" },
        photo: "https://picsum.photos/id/1050/60",
      },
      {
        id: 4,
        name: "Maze",
        num: null,
        address: { city: "New York" },
        photo: "https://picsum.photos/id/1045/60",
      },
      {
        id: 5,
        name: "Will",
        num: null,
        address: { city: "Tokyo" },
        photo: "https://picsum.photos/id/1014/60",
      },
    ],
  };

  customerNameStyle = (custName) => {
    if (custName.startsWith("S")) return "green-highlight border-left";
    else if (custName.startsWith("W")) return "blue-highlight border-right";
    else return {};
  };

  render() {
    return (
      <div>
        <h4 className="m-1 p-1">
          {this.state.pageTitle}
          <span className="badge bg-secondary m-2">
            {this.state.customersCount}
          </span>
          <button className="btn btn-info" onClick={this.onRefreshClick}>
            Refresh
          </button>
        </h4>
        <table className="table">
          <thead>
            <tr>
              <th>#</th>
              <th>CustomerName</th>
              <th>Photo</th>
              <th>Number</th>
              <th>Address</th>
            </tr>
          </thead>
          <tbody>{this.getCustomerRow()}</tbody>
        </table>
      </div>
    );
  }

  onRefreshClick = () => {
    this.setState({ customersCount: 7 });
  };

  getNumberToRender = (num) => {
    if (num) return num;
    else {
      return <div className="bg-warning p-2 text-center">No Number</div>;
    }
  };

  getCustomerRow = () => {
    return this.state.customers.map((cust, index) => {
      return (
        <tr key={cust.id}>
          <td>{cust.id}</td>
          <td className={this.customerNameStyle(cust.name)}>{cust.name}</td>
          <td>
            <img src={cust.photo} alt="Customer" />
            <div>
              <button
                className="btn-btn-sm btn btn-secondary"
                onClick={() => {
                  this.onChangePictureClick(cust, index);
                }}
              >
                Change Picture
              </button>
            </div>
          </td>
          <td>{this.getNumberToRender(cust.num)}</td>
          <td>{cust.address.city}</td>
        </tr>
      );
    });
  };

  //Executes when the user clicks on "Change Picture" button in the grid
  //Receives the "customer" object and index of thr currently clicked customer
  onChangePictureClick = (cust, index) => {
    // console.log(cust);
    // console.log(index);

    //get existing customers
    var custArr = this.state.customers;
    custArr[index].photo = "https://picsum.photos/id/1041/60";

    //update "customers" array in the state
    this.setState({ customers: custArr });
  };
}

export default MainContent;
