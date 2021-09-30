import { Component } from "react";
import { Link } from 'react-router-dom';
import {
  Card, Button, CardImg, CardTitle, CardText, CardGroup,
  CardBody
} from 'reactstrap';

import React from 'react';
export default class menCategory extends Component {
  constructor(props) {
    super(props);
    this.state = {
     
    };
  }
  render() {
    return (
      <div class="row-cols-1 g-4" align="center">
        <h1>Men Categories</h1> 
        <CardGroup>
        <Card>
        <CardImg height="225" width="150" src="men_shirt.jpg" alt="Card image cap" />
        <CardBody>
          <CardTitle tag="h1" align="center">Shirts</CardTitle>
          <CardText>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</CardText>
          <Link to="/menShirts">
          <Button renderAs="button">
          <span>Shop Shirts</span>
          </Button>
          </Link>
        </CardBody>
      </Card>

      <Card>
        <CardImg height="225" width="150" src="men_tshirt.jpg" alt="Card image cap" />
        <CardBody>
          <CardTitle tag="h1" align="center">T-Shirts</CardTitle>
          <CardText>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</CardText>
          <Link to="/menTshirts">
          <Button renderAs="button">
          <span>Shop T-Shirts</span>
          </Button>
          </Link>
        </CardBody>
      </Card>

      <Card>
        <CardImg height="225" width="150" src="men_jeans.jpg" alt="Card image cap" />
        <CardBody>
          <CardTitle tag="h1" align="center">Jeans</CardTitle>
          <CardText>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</CardText>
          <Link to="/menJeans">
          <Button renderAs="button">
          <span>Shop Jeans</span>
          </Button>
          </Link>
        </CardBody>
      </Card>

      <Card>
        <CardImg height="225" width="150" src="men_shoes.jpg" alt="Card image cap" />
        <CardBody>
          <CardTitle tag="h1" align="center">Shoes</CardTitle>
          <CardText>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</CardText>
          <Link to="/menShoes">
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












// import React, { Component } from "react";
// import {
//     Card, Button, CardImg, CardTitle, CardText, CardGroup,
//     CardSubtitle, CardBody
//   } from 'reactstrap';
// import { Link } from 'react-router-dom';
// import axios from 'axios';
// export default class MenCategory extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       menCategoryProduct: []
//     }
//   }

 


// //   toggleCategories() {
// //     const catrgories = [];
// //       if (this.state.activeTab === 1) {
// //           for (let data of this.state.arraye) {
// //               catrgories.push(
// //                   <div className='projects-grid'>
// //                       <Card>
// //         <CardImg top width="100%" src="/assets/318x180.svg" alt="Card image cap" />
// //         <CardBody>
// //           <CardTitle tag="h5">{ this.state.persons.map(person =>{
// //             if(person.categoryName === "Men"){
// //               return person.categoryName
// //             }

// //         } )}</CardTitle>
// //           <CardSubtitle tag="h6" className="mb-2 text-muted">{ this.state.persons.map(person =>{
// //             if(person.cId === 1){
// //               return person.cId
// //             }

// //         } )}</CardSubtitle>
// //           <CardText>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</CardText>
// //           <Button><Link to={'/menCategory'} className="nav-link">Shop Men</Link></Button>
// //         </CardBody>
// //       </Card>
// //                   </div>
// //               );
// //        }
// //   }
// // }


// // use it like

// componentDidMount() {
//   axios.get(`http://localhost:8080/api/categories/1/subcategories`)
//     .then(res => {
//       const menCategoryProduct = res.data;
//       this.setState({menCategoryProduct});
//     })
// }


//   render() {
//     return (
//       <div className="container">
//         <header className="jumbotron">
//          <h1>Men Category</h1>
//         </header>

//         <div>

//             {this.state.menCategoryProduct.map(function(object){
//               return <div>
//                 <CardGroup>
//                         <Card >
//                         <CardImg top width="30%" src={"/assets/318x180.svg"} alt="Card image cap" />
//                         <CardBody>
//                           <CardTitle tag="h5">{object.subCategoryName}</CardTitle>
//                           <Button ><Link to={'/menShirts'} className="nav-link">{object.subCategoryName}</Link></Button>
                         
//                         </CardBody>
//                          </Card>
//                   </CardGroup>
//                       </div>
   
//               })}

//         </div>
      
         
      
       


//       </div>
//     );
//   }
 

  

// }

