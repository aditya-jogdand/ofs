import { Component } from "react";
import { Link } from 'react-router-dom';
import {
  Card, Button, CardImg, CardTitle, CardText, CardGroup, CardBody
} from 'reactstrap';

import React from 'react';
import Products from "./viewAllProducts";



export default class Home extends Component {
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
<div>
      {/* <Products/> */}
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
      </div> </div>


     
    )
  }
}