import { Component } from "react";
import { Link } from 'react-router-dom';
import {
  Card, Button, CardImg, CardTitle, CardText, CardGroup,
  CardBody
} from 'reactstrap';

import React from 'react';
export default class womenCategory extends Component {
  constructor(props) {
    super(props);
    this.state = {
     
    };
  }
  render() {
    return (
      <div class="row-cols-1 g-4" align="center">
        <h1>Women Categories</h1> 
        <CardGroup>
        <Card>
        <CardImg height="225" width="150" src="women_shirt.jpg" alt="Card image cap" />
        <CardBody>
          <CardTitle tag="h1" align="center">Shirts</CardTitle>
          {/* <CardText>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</CardText> */}
          <Link to="/womenShirts">
          <Button renderAs="button">
          <span>Shop Shirts</span>
          </Button>
          </Link>
        </CardBody>
      </Card>

      <Card>
        <CardImg height="225" width="150" src="women_tshirt.jpg" alt="Card image cap" />
        <CardBody>
          <CardTitle tag="h1" align="center">T-Shirts</CardTitle>
          {/* <CardText>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</CardText> */}
          <Link to="/womenTshirts">
          <Button renderAs="button">
          <span>Shop T-Shirts</span>
          </Button>
          </Link>
        </CardBody>
      </Card>

      <Card>
        <CardImg height="225" width="150" src="women_jeans.jpg" alt="Card image cap" />
        <CardBody>
          <CardTitle tag="h1" align="center">Jeans</CardTitle>
          {/* <CardText>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</CardText> */}
          <Link to="/womenJeans">
          <Button renderAs="button">
          <span>Shop Jeans</span>
          </Button>
          </Link>
        </CardBody>
      </Card>

      <Card>
        <CardImg height="225" width="150" src="women_shoes.jpg" alt="Card image cap" />
        <CardBody>
          <CardTitle tag="h1" align="center">Shoes</CardTitle>
          {/* <CardText>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</CardText> */}
          <Link to="/womenShoes">
          <Button renderAs="button">
          <span>Shop Shoes</span>
          </Button>
          </Link>
        </CardBody>
      </Card>
    </CardGroup>
    </div>
     
     );
   }
 }