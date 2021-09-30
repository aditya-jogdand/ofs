import React from 'react'
import { Button, Form, FormGroup, CustomInput,Label, Input, FormText } from 'reactstrap';
import { Component } from 'react';
import axios from 'axios';

export default class AddWomenProduct extends Component {

    constructor(props) {
      super(props);
      this.state = {
        productName:"",
        productDescription:"",
        productPrice:"",
        productLink:"",
        gender:"2",
        subcategory:""
        
        
      }
      
    }
    

    
handleInputNameChange(evt1) {
            this.setState({
                    productName: evt1.target.value
        })
}

handleInputDescriptionChange(evt2) {
    this.setState({
            
            productDescription: evt2.target.value
            
})
}

handleInputPriceChange(evt3) {
    this.setState({
            
            productPrice: evt3.target.value
           
})
}

handleInputLinkChange(evt4) {
    this.setState({
           
            productLink: evt4.target.value
})
}

handleGenderChange(evt5) {
    this.setState({
        
            gender: evt5.target.value
           
})
//     var element = document.getElementsByName('categories');
//     alert(evt5.target.value);

//     if(evt5.target.value == 1 ){


//     }else{


//     }
}








handleSubCategoryChange(evt6) {
    this.setState({
            
            subcategory: evt6.target.value
           
})
}



handleButtonClick(){
    let productName=this.state.productName;
    let productDescription=this.state.productDescription;
    let productPrice=this.state.productPrice;
    let productLink=this.state.productLink;
    let gender=this.state.gender;
    let subcategory=this.state.subcategory;
    console.log(productName,productDescription,productPrice,productLink,gender,subcategory);

    

// axios.post(`http://localhost:8080/api/product/${gender}/${subcategory}`,{
//     "productName": {productName},
//     "productDesc": {productDescription},
//     "price": {productPrice},
//     "url": {productLink}



// )
// }

axios.post(`http://localhost:8080/api/product/${gender}/${subcategory}`, {
    "productName": `${productName}`,
    "productDesc": `${productDescription}`,
    "price": `${productPrice}`,
    "url": `${productLink}`
  })
  .then(function (response) {
    console.log(response);
  })

}

handleUpdateProduct(){
    let productName=this.state.productName;
    let productDescription=this.state.productDescription;
    let productPrice=this.state.productPrice;
    let productLink=this.state.productLink;
    let gender=this.state.gender;
    let subcategory=this.state.subcategory;
    console.log(productName,productDescription,productPrice,productLink,gender,subcategory);
}

// axios.put('https://reqres.in/invalid-url', article)
//         .then(response => this.setState({ updatedAt: response.data.updatedAt }))
//         .catch(error => {
//             this.setState({ errorMessage: error.message });
//             console.error('There was an error!', error);
//         });



render(){
    return (
        <div>
          <h1>Add Women Products</h1>
            <Form>
      <FormGroup>
      <Label for="productName">Title</Label>
            <Input type="text" name="productName" id="exampleText" placeholder="Product Name" value={this.state.productName} onChange={this.handleInputNameChange.bind(this)} />
      </FormGroup>
      <FormGroup>
        <Label for="ProductDescription">Description</Label>
        <Input type="textarea" name="ProductDescription" id="exampleText" placeholder="Product Description" value={this.state.productDescription} onChange={this.handleInputDescriptionChange.bind(this)}/>
      </FormGroup>
      <FormGroup>
      <Label for="ProductPrice">Price</Label>
            <Input type="text" name="ProductPrice" id="exampleText" placeholder="Price" value={this.state.productPrice} onChange={this.handleInputPriceChange.bind(this)}/>
      </FormGroup>
      <FormGroup>
        <Label for="ProductURL">Product Image</Label>
        <Input type="textarea" name="ProductURL" id="exampleText" placeholder="Paste product image link" value={this.state.productLink} onChange={this.handleInputLinkChange.bind(this)}/>
      </FormGroup>
      <FormGroup id="subcategories">
        <Label for="subcategories">Select</Label>
        <Input type="select" name="subcategories" id="exampleSelect" onChange={this.handleSubCategoryChange.bind(this)}>
          <option value="7">Shirt</option>
          <option value="8">T-Shirt</option>
          <option value="9">Jeans</option>
          <option value="10">Shoe</option>
        </Input>
      </FormGroup>
     
      <Button color="success" onClick={this.handleButtonClick.bind(this)}>Add Product</Button>
      {/* <Button color="warning" onClick={this.handleUpdateProduct.bind(this)}>Update Product</Button> */}
    </Form>
           
        </div>
    )
}
}
