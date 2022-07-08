import React, { Component } from "react";
import NavBar from "./NavBar";
import Dashboard from "./Dashboard";
import Login from "./Login";
import ShoppingCart from "./ShoppingCart";
import CustomerList from "./CustomerList";
import { Routes, Route } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import NoMatchPage from "./NoMatchPage";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <NavBar />
        <div className="container-fluid">
          <Routes>
            <Route exact path="/" element={<Login />} />
            <Route exact path="/dashboard" element={<Dashboard />} />
            <Route exact path="/cart" element={<ShoppingCart />} />
            <Route exact path="/customers" element={<CustomerList />} />
            <Route path="/*" element={<NoMatchPage />} />
          </Routes>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
