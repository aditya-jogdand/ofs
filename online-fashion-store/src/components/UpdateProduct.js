import React, { Component } from "react";
import {
    Card, Button, CardImg, CardTitle, CardText, CardGroup,
    CardSubtitle, CardBody
  } from 'reactstrap';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { DeleteProduct } from "./DeleteProduct";
export default class UpdateProduct extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      menCategoryProduct: []
      
    }
    this.deleteProduct=this.deleteProduct.bind(this);
  }

 


// use it like

componentDidMount() {
  axios.get(`http://localhost:8080/api/products`)
    .then(res => {
      const menCategoryProduct = res.data;
      this.setState({menCategoryProduct});
    })
}

deleteProduct = (id) => {
  console.log(id)
     axios.get(`http://localhost:8080/api/products`)
        .then(res => {
        const menCategoryProduct = res.data;
        this.setState({menCategoryProduct});
  })
}
  render() {
    return (
      // <div className="container">
      //   <header className="jumbotron">
      //   <h1>Delete Products</h1>
      //   </header>
              <p>
  {this.state.menCategoryProduct?.map((product)=> <DeleteProduct product={product} key={product?.productId} />)}
              </p>
              
              // </div>
      // </div>
    );
  }
}

