import React, { Component } from "react";

import UserService from "../services/user.service";
import UpdateProduct from "./UpdateProduct";
import AddMenProduct from "./AddMenProduct";
import Products from "./viewAllProducts";


import { CardGroup } from "reactstrap";
import { FormGroup } from "react-bootstrap";
import AdminOperations from "./AdminOperations";


export default class BoardAdmin extends Component {
  constructor(props) {
    super(props);

    this.state = {
      content: ""
    };
  }

  componentDidMount() {
    UserService.getAdminBoard().then(
      response => {
        this.setState({
          content: response.data
        });
      },
      error => {
        this.setState({
          content:
            (error.response &&
              error.response.data &&
              error.response.data.message) ||
            error.message ||
            error.toString()
        });
      }
    );
  }
  
  render() {
    return (
      <div className="container">
        <header className="jumbotron">
          {/* <h3>{this.state.content}</h3> */}
          <h1>Admin Board</h1>
          {/* <AddNewProduct/> */}
          {/* <AddMenProduct/> */}
          <AdminOperations/>

          {/* <UpdateProduct/> */}
          
          
        </header>
      </div>
    );
  }
}