import React, { Component } from "react";

import UserService from "../services/user.service";
import Home from "./home.component";
import Products from "./viewAllProducts";
import viewAllProducts from "./viewAllProducts";
import AddMenProduct from "./AddMenProduct";
import {
  Card, Button, CardImg, CardTitle, CardText, CardGroup, CardBody
} from 'reactstrap';
import { Link } from 'react-router-dom';
import Example from "./home.component";

export default class BoardUser extends Component {
  constructor(props) {
    super(props);

    this.state = {
      content: ""
    };
  }

  componentDidMount() {
    UserService.getUserBoard().then(
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
  
      <div class="row-cols-2 g-4" align="center">
        <CardGroup>
        <Card>
        <CardImg height="150" width="200" src="mens.jpg" alt="Card image cap" />
        <CardBody>
          <CardTitle tag="h1" align="center">Men</CardTitle>
          <CardText>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</CardText>
          <Link to="/menCategory">
          <Button renderAs="button">
          <span>Shop Men</span>
          </Button>
          </Link>
        </CardBody>
      </Card>



      <Card>
        <CardImg height="150" width="200" src="women.jpg" alt="Card image cap" />
        <CardBody>
          <CardTitle tag="h1" align="center">Women</CardTitle>
          <CardText>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</CardText>
          <Link to="/womenCategory">
          <Button renderAs="button">
          <span>Shop Women</span>
          </Button>
          </Link>
        </CardBody>
      </Card>


    </CardGroup>
      </div>
     
    
 

       
        </header>
      </div>
    );
  }
}