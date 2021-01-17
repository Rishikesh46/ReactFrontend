import React, { Component } from "react";
import headerStyles from "../styles/Header.module.css";

import { Link } from "react-router-dom";

class Header extends Component {
  render() {
    return (
      <div className={headerStyles.headercontainer}>
        <div className={headerStyles.container}>
          <div id={headerStyles.title}>
            <Link to="/">
              <button>Home</button>
            </Link>
            <Link to="/signup">
              <button>Signup</button>
            </Link>
            <Link to="/login">
              <button>Login</button>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
