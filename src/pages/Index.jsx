import { Component } from "react";

import indexStyle from "../styles/Index.module.css";

class Index extends Component {
  render() {
    return (
      <div className={indexStyle.mainIndex}>
        <h1 className={indexStyle.indexh1}>React Login SignUp</h1>
      </div>
    );
  }
}
export default Index;
