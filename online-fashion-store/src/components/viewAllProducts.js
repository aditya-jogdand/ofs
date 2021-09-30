import React, {useState, useEffect} from 'react'
import "bootstrap/dist/css/bootstrap.min.css"
import Axios from "axios"
import {
    Card, Button, CardImg, CardTitle, CardGroup,CardDeck,
    CardSubtitle, CardBody
  } from 'reactstrap';
  
  function Products() {
    const [products, setProducts] = useState([]);
  
    const fetchProducts = async () => {
      const { data } = await Axios.get(
        "http://localhost:8080/api/products"
      );
      const products = data;
      setProducts(products);
      console.log(products);
    };
  
    useEffect(() => {
      fetchProducts();
    }, []);
  
    return (
      <div>
        {products.map((product) => (
          // <p key={product.productId}>{product.price}</p>
          <div>
         <CardDeck>
                                   <Card>
                                   <img width="25%" src={product.url} alt="Card image cap" />
                                   <CardBody>
                                     <CardTitle tag="h2">{product.productName}</CardTitle>
                                     <CardSubtitle>{product.productDesc}</CardSubtitle> 
                                     <CardTitle tag="h4">₹ {product.price}</CardTitle>
                                     <Button color="primary">Add to cart</Button>
                                     </CardBody>
                                    </Card>
                                    </CardDeck>
                                  </div>
        ))}
      </div>
    );
  }
  
  export default Products;

// import React, { Component } from "react";
// import {
//     Card, Button, CardImg, CardTitle, CardGroup,
//     CardSubtitle, CardBody
//   } from 'reactstrap';

// import axios from 'axios';
// export default class viewAllProducts extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       menCategoryProduct: []
//     }
//   }

 
// componentDidMount() {
//   axios.get(`http://localhost:8080/api/products`)
//     .then(res => {
//       const menCategoryProduct = res.data;
//       this.setState({menCategoryProduct});
//     })
// }


//   render() {
//     return (
//       <div className="container">
//         <header className="jumbotron">
//          <h1>View All Products</h1>
//         </header>

//         <div>

//             {this.state.menCategoryProduct.map(function(object){
//               return <div>
//                 <CardGroup>
//                         <Card >
//                         <CardImg top width="100%" src={object.url} alt="Card image cap" />
//                         <CardBody>
//                           <CardTitle tag="h2">{object.productName}</CardTitle>
//                           <CardSubtitle>{object.productDesc}</CardSubtitle> 
//                           <CardTitle tag="h4">₹ {object.price}</CardTitle>
//                           </CardBody>
//                          </Card>
//                        </CardGroup>
//                       </div>
   
//               })}

//         </div>
//       </div>
//     );
//   }
 

  

// }

