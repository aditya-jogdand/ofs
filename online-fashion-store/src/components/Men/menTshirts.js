import React, { Component } from "react";
import {
    Card, Button, CardImg, CardTitle, CardGroup,
    CardSubtitle, CardBody
  } from 'reactstrap';

import axios from 'axios';
export default class MenTshirts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      menCategoryProduct: []
    }
  }

 
componentDidMount() {
  axios.get(`http://localhost:8080/api/categories/1/3/products`)
    .then(res => {
      const menCategoryProduct = res.data;
      this.setState({menCategoryProduct});
    })
}


  render() {
    return (
      <div className="container">
        <header className="jumbotron">
         <h1>Men T-shirts</h1>
        </header>

        <div>

            {this.state.menCategoryProduct.map(function(object){
              return <div class="row row-cols-2 row-cols-md-4 g-4" align="center">
                <CardGroup>
                        <Card >
                        <CardImg top width="100%" src={object.url} alt="Card image cap" />
                        <CardBody>
                          <CardTitle tag="h2">{object.productName}</CardTitle>
                          <CardSubtitle>{object.productDesc}</CardSubtitle> 
                          <CardTitle tag="h4">₹ {object.price}</CardTitle>
                          <Button color="primary">Add to Cart</Button>
                          </CardBody>
                         </Card>
                       </CardGroup>
                      </div>
   
              })}

        </div>
      </div>
    );
  }
 

  

}

