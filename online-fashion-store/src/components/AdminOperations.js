import { Component } from "react";
import { Link } from 'react-router-dom';
import {
  Card, Button, CardImg, CardTitle, CardText, CardGroup, CardBody
} from 'reactstrap';

import React from 'react';



export default class AdminOperations extends Component {
  // state = {
  //   persons: []
  // }

  // componentDidMount() {
  //   axios.get(`http://localhost:8080/api/categories`)
  //     .then(res => {
  //       const persons = res.data;
  //       this.setState([persons]);
  //     })
  // }

  render() {
    return (
      <div class="group-card" align="center">
        <CardGroup>
        <Card>
        <CardImg height="225" width="150" src="add_men.png" alt="Card image cap" />
        <CardBody>
          <CardTitle tag="h3" align="center">Add Men Products</CardTitle>
         
          <Link to="/AddMenProduct">
          <Button renderAs="button">
          <span>Add Men Products</span>
          </Button>
          </Link>
        </CardBody>
      </Card>

      <Card>
        <CardImg height="225" width="150" src="add_women.png" alt="Card image cap" />
        <CardBody>
          <CardTitle tag="h3" align="center">Add Women Products</CardTitle>
          
          <Link to="/AddWomenProduct">
          <Button renderAs="button">
          <span>Add Women Products</span>
          </Button>
          </Link>
        </CardBody>
      </Card>

      <Card>
        <CardImg height="225" width="150" src="product_list.png" alt="Card image cap" />
        <CardBody>
          <CardTitle tag="h3" align="center">List All Products</CardTitle>
          <Link to="/UpdateProduct">
          <Button renderAs="button">
          <span>List All Products</span>
          </Button>
          </Link>
        </CardBody>
      </Card>

       


    </CardGroup>
      </div>
     
    )
  }
}