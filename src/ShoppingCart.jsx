import { render } from "@testing-library/react";
import React, { Component } from "react";
import Product from "./Product";

class ShoppingCart extends Component {
  //Executes when tghe component is mounted
  constructor(props) {
    // console.log("constructor-Shopping Cart");
    super(props); //calling super class's constructor
    //initialization of the state
    this.state = {
      products: [],
    };
  }

  render() {
    // console.log("render-Shopping Cart");

    return (
      <div>
        <h4>Shopping Cart</h4>
        <div className="row">
          {this.state.products.map((prod) => {
            return (
              <Product
                key={prod.id}
                product={prod}
                OnIncrement={this.handleIncrement}
                OnDecrement={this.handleDecrement}
                OnDelete={this.handleDelete}
              >
                <button className="btn btn-primary">Buy Now</button>
              </Product>
            );
          })}
        </div>
      </div>
    );
  }
  // render ends here

  //executes aftr constructor and render method(includes life cycle ofchild components, if any) of current component
  componentDidMount = async () => {
    //fetch data from data source
    var response = await fetch(" http://localhost:5000/products", {
      method: "GET",
    });
    var prods = await response.json();
    console.log(prods);

    this.setState({ products: prods });
    // console.log("mount-Shopping Cart");
  };

  componentDidUpdate(prevProps, prevState) {
    // console.log(
    //   "ComponentDidUpdate-shopping cart",
    //   prevProps,
    //   prevState,
    //   this.props,
    //   this.state
    //   // if(prevProps.x !=this.props.x){
    //   //   //make http call
    //   // }
    // );
  }

  //Executes when the current instance of current component is being deleted from memory
  componentWillUnmount() {
    // console.log("Componentwillunmount-shopping Cart");
  }

  componentDidCatch(error, info) {
    // console.log("componentDidCatch-shopping Cart");
    // console.log(error, info);

    localStorage.lastError = `${error}\n${JSON.stringify(info)}`;
  }

  handleIncrement = (product, maxValue) => {
    // get index of the selected product
    let allProducts = [...this.state.products];
    let index = allProducts.indexOf(product);

    if (allProducts[index].quantity < maxValue) {
      allProducts[index].quantity++;

      // update the state of current component (parent component)
      this.setState({ products: allProducts });
    }
  };

  handleDecrement = (product, minValue) => {
    // get index of the selected product
    let allProducts = [...this.state.products];
    let index = allProducts.indexOf(product);

    if (allProducts[index].quantity > minValue) {
      allProducts[index].quantity--;

      // update the state of current component (parent component)
      this.setState({ products: allProducts });
    }
  };

  //executes when the user clicks on the delete (*) button iin the product component
  handleDelete = (product) => {
    // get index of the selected product
    let allProducts = [...this.state.products];
    let index = allProducts.indexOf(product);

    if (window.confirm("Are you sure to delete?")) {
      //delete product based on index
      allProducts.splice(index, 1);

      // update the state of current component (parent component)
      this.setState({ products: allProducts });
    }
  };
}

export default ShoppingCart;
