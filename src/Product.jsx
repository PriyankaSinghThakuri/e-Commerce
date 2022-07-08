import React, { Component } from "react";

class Product extends Component {
  constructor(props) {
    // console.log("constructor-Product");
    super(props);

    this.state = {
      product: this.props.product,
    };
  }

  render() {
    // console.log("render-Product");
    return (
      <div className="col-lg-6">
        <div className="card m-2">
          <div className="card-body">
            <div className="text-muted">
              #{this.state.product.id}
              <span
                className="pull-right hand-icon"
                onClick={() => {
                  this.props.OnDelete(this.state.product);
                }}
              >
                <i className="fa fa-times"></i>
              </span>
            </div>
            <h5 className="pt-2 border-top">
              #{this.state.product.productName}
            </h5>
            <div>${this.state.product.Price}</div>
          </div>
          {/* card body ends here */}
          <div className="card-footer">
            <div className="float-start">
              <span className="badge text-dark">
                {this.state.product.quantity}
              </span>
              <div className="btn-group">
                <div
                  className="btn btn-outline-success"
                  onClick={() => {
                    this.props.OnIncrement(this.state.product, 10);
                  }}
                >
                  +
                </div>
                <div
                  className="btn btn-outline-success"
                  onClick={() => {
                    this.props.OnDecrement(this.state.product, 0);
                  }}
                >
                  -
                </div>
              </div>
            </div>
            {/* float left ends here */}
            <div className="float-end">{this.props.children}</div>
          </div>
          {/* Card footer ends here */}
        </div>
      </div>
    );
  }
  //executes aftr constructor and render method(includes life cycle ofchild components, if any) of current component
  componentDidMount() {
    //fetch data from data source
    // console.log("mount-Product");
  }

  componentDidUpdate() {
    // console.log("ComponentDidUpdate-Product");
  }

  //Executes when the current instance of current component is being deleted from memory
  componentWillUnmount() {
    // console.log("Componentwillunmount-product");
  }
}

export default Product;
