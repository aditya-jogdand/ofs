import React, { Component } from "react";
import { Switch, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import axios from 'axios';


import AuthService from "./services/auth.service";

import Login from "./components/login.component";
import Register from "./components/register.component";
import Home from "./components/home.component";
import Profile from "./components/profile.component";
import BoardUser from "./components/board-user.component";
import BoardModerator from "./components/board-moderator.component";
import BoardAdmin from "./components/board-admin.component";
import menCategory from "./components/Men/menCategory";
import menShirts from "./components/Men/menShirts";
import menTshirts from "./components/Men/menTshirts";
import menJeans from "./components/Men/menJeans";
import menShoes from "./components/Men/menShoes";
import womenCategory from "./components/Women/womenCategory";
import womenShirts from "./components/Women/womenShirts";
import womenTshirts from "./components/Women/womenTshirts";
import womenJeans from "./components/Women/womenJeans";
import womenShoes from "./components/Women/womenShoes";
import AddMenProduct from "./components/AddMenProduct";
import AddWomenProduct from "./components/AddWomenProduct";
import UpdateProduct from "./components/UpdateProduct";


class App extends Component {
  constructor(props) {
    super(props);
    this.logOut = this.logOut.bind(this);
    
    this.state = {
      showModeratorBoard: false,
      showAdminBoard: false,
      currentUser: undefined,
      data: "xyz"
    };
  }

  componentDidMount() {

     // Simple GET request using axios
     axios.get('http://localhost:8080/api/test/categories')
     .then(response => this.setState(this.data));

     console.log(this.data);
    const user = AuthService.getCurrentUser();

    if (user) {
      this.setState({
        currentUser: user,
        showModeratorBoard: user.roles.includes("ROLE_MODERATOR"),
        showAdminBoard: user.roles.includes("ROLE_ADMIN"),
      });
    }
  }

  logOut() {
    AuthService.logout();
  }

  render() {
    const { currentUser, showModeratorBoard, showAdminBoard } = this.state;

    return (
      <div>
        <nav className="navbar navbar-expand navbar-dark bg-dark" >
          <Link to={"/"} className="navbar-brand" >
            Online Fashion Store
          </Link>
          <div className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link to={"/home"} className="nav-link">
                Home
              </Link>
            </li>

            {showModeratorBoard && (
              <li className="nav-item">
                <Link to={"/mod"} className="nav-link">
                  Moderator Board
                </Link>
              </li>
            )}

            {showAdminBoard && (
              <li className="nav-item">
                <Link to={"/admin"} className="nav-link">
                  Admin Board
                </Link>
              </li>
            )}

            {currentUser && (
              <li className="nav-item">
                <Link to={"/user"} className="nav-link">
                  Categories
                </Link>
              </li>
            )}
          </div>

          {currentUser ? (
            <div className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link to={"/profile"} className="nav-link">
                  {currentUser.username}
                </Link>
              </li>
              <li className="nav-item">
                <a href="/login" className="nav-link" onClick={this.logOut}>
                  LogOut
                </a>
              </li>
              
              <li>
              <Link to={"#"} className="nav-link">
              <img src="trolley.png" width="25" height="25" />
                </Link>
                
              </li>
              
            </div>
          ) : (
            <div className="navbar-nav ml-auto" >
              <li className="nav-item">
                <Link to={"/login"} className="nav-link" >
                  Login
                </Link>
              </li>

              <li className="nav-item">
                <Link to={"/register"} className="nav-link">
                  Sign Up
                </Link>
              </li>
         
             
            </div>
            
          )}
        </nav>

        <div className="container mt-3">
          <Switch>
            <Route exact path={["/", "/home"]} component={Home} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/profile" component={Profile} />
            <Route path="/user" component={BoardUser} />
            <Route path="/mod" component={BoardModerator} />
            <Route path="/admin" component={BoardAdmin} />
            <Route path="/menCategory" component={menCategory} />
            <Route path="/menShirts" component={menShirts} />
            <Route path="/menTshirts" component={menTshirts} />
            <Route path="/menJeans" component={menJeans} />
            <Route path="/menShoes" component={menShoes} />
            <Route path="/womenCategory" component={womenCategory} />
            <Route path="/womenShirts" component={womenShirts} />
            <Route path="/womenTshirts" component={womenTshirts} />
            <Route path="/womenJeans" component={womenJeans} />
            <Route path="/womenShoes" component={womenShoes} />
            <Route path="/AddMenProduct" component={AddMenProduct} />
            <Route path="/AddWomenProduct" component={AddWomenProduct} />
            <Route path="/UpdateProduct" component={UpdateProduct} />
          </Switch>
          
        </div>
        
      </div>
    );
  }
  
   


}

export default App;