import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      //   count: 0,
      userInfo: {
        name: "Default name",
        location: "Default Location",
      },
    };

    //console.log(this.props.name + "child const");
  }

  async componentDidMount() {
    //console.log(this.props + "child mount");

    //API call in class base component
    const data = await fetch("https://api.github.com/users/akshaymarch7");
    const json = await data.json();

    this.setState({
      userInfo: json,
    });
    console.log(json);
  }

  render() {
    //const { count } = this.state;

    //console.log(this.props.name + "child render");

    //local variable for setting the value through API calling
    const { name, location, avatar_url } = this.state.userInfo;

    return (
      <div className="user-card">
        {/* {
          <h1>{count}</h1>
        <button
          onClick={() => {
            this.setState({
              count: this.state.count + 1,
            });
          }}
        >
          Button Click
        </button>
        }  */}
        <img src={avatar_url} />
        <h1>{name}</h1>
        <h1>{location}</h1>
      </div>
    );
  }
}

export default UserClass;

/***
 *
 * ---Mounting---
 *
 * Constructor(dummy)
 * Render(dummy)
 *      <HTML DUMMY>
 *      <this.setState -> State variable is updated
 *
 *
 *---UPDATE---
 *
 *    render(API data)
 *    <HTML (new API data)>
 *    componentDidUpdate
 */
