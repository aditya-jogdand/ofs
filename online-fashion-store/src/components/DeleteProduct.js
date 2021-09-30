import React from 'react'
import axios from 'axios';
import {
  Card, Button, CardImg, CardTitle, CardGroup,
  CardSubtitle, CardBody
} from 'reactstrap';
import { Toast, ToastBody, ToastHeader } from 'reactstrap';



export const DeleteProduct = ({product}) => {
       const deleteProduct = (id) => {
       console.log(id);
      //  <div className="p-3 bg-success my-2 rounded">
      //   <Toast>
      //     <ToastHeader>
      //       Reactstrap
      //     </ToastHeader>
      //     <ToastBody>
      //       This is a toast on a success background — check it out!
      //     </ToastBody>
      //   </Toast>
      // </div>
        axios.delete(`http://localhost:8080/api/product/${id}`)
        // post Code here to delete product //
 
      }
    return (
      <div class="row row-cols-2 row-cols-md-4 g-4" align="center">
        
         <div >
                              <CardGroup>
                               <Card >
                               <CardImg class="card-img-top" src={product.url} alt="Card image cap" />
                               <CardBody>
                                 <CardTitle tag="h2">{product.productName}</CardTitle>
                                 <CardSubtitle>{product.productDesc}</CardSubtitle> 
                                 <CardTitle tag="h4">₹ {product.price}</CardTitle>
                                 {/* <Button color="warning">Update Product</Button> */}
                                 <Button color="danger" onClick={() => deleteProduct(product?.productId) } class="btn btn-primary">Delete Product</Button>
                                 
                                 </CardBody>
                                </Card>
                              </CardGroup>
                              </div>
                              
                              </div>
                              


                    // <div class="card w-75" >
                    //        <div class="card-body">
                    //        <h5 class="card-title">Card title</h5>
                    //        <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
                    //        <button onClick={() => deleteProduct(product?.productId) } class="btn btn-primary">Delete Product</button>
                    //       </div>
                    //  </div>

  
    )
}
