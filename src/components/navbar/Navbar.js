import React from "react";
// import { AmplifySignOut } from "@aws-amplify/ui-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserCircle } from "@fortawesome/free-regular-svg-icons";
import "./Navbar.css";

class Navbar extends React.Component {
  MenuItems = [
    // {
    //   title: "sign in",
    //   url: "/signin",
    //   cName: "nav_links",
    // },
    // {
    //   title: "sign up",
    //   url: "./signup",
    //   cName: "nav_links",
    // },
    // {
    //   title: "contact us",
    //   url: "/contact",
    //   cName: "nav_links",
    // },
  ];
  constructor(props) {
    super(props);
    this.state = { showNav: true };
    this.toggleNav = this.toggleNav.bind(this);
  }

  toggleNav() {
    this.setState({
      showNav: !this.state.showNav,
    });
  }

  render() {
    const { showNav } = this.state;
    return (
      <div className="mb-5">
        <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
          <a href="/" className="navbar-brand">
            <h3 className="logosize">uworld</h3>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            onClick={this.toggleNav}
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className={(showNav ? "show" : "") + " collapse navbar-collapse"}
            id="navbarNav"
          >
            <ul className="navbar-nav mr-auto">
              {this.MenuItems.map((state) => {
                return (
                  <li className="nav-item">
                    <a className="nav-link size" href={state.url}>
                      <span className="size">{state.title}</span>
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
          <FontAwesomeIcon icon={faUserCircle} />
        </nav>
      </div>
    );
  }
}
export default Navbar;
