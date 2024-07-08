import User from "./User";
import UserClass from "./UserClass";
import { Component } from "react";

import UserContext from "../utils/UserContext";

class About extends Component {
  constructor(props) {
    super(props);
    //console.log("parent class Const");
  }

  componentDidMount() {
    //console.log("parent class mount");
  }

  render() {
    //console.log("parent render");
    return (
      <div>
        <h1>About</h1>
        <div>
          Logged IN User
          <UserContext.Consumer>
            {({ loggedInUser }) => (
              <h1 className="text-xl font-bold"> {loggedInUser}</h1>
            )}
          </UserContext.Consumer>
        </div>
        <h2>This is about page</h2>
        <User name={"Dileep"} />
        <UserClass name={"First"} location={"USA"} />
      </div>
    );
  }
}

export default About;
