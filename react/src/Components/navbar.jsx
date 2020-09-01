import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

class NavBar extends Component {
  state = {};

  handleActive = (e) => {
    const ul = e.target.parentElement.parentElement;
    for (const child of ul.children) {
      child.classList.remove("active");
    }
    e.target.parentElement.classList.add("active");
  };

  handleSignout = () => {
    if (this.props.user.emailid != "") {
      this.props.dispatch({
        type: "LOGOUT",
      });
    }
  };

  render() {
    console.log("nav", this.props);
    var url = "/details?email=" + this.props.user.emailid;
    return (
      <nav className="navbar navbar-expand navbar-dark bg-dark">
        <div className="collapse navbar-collapse" id="navbarText">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTREGp0I-Xy2OrF6m3UMBm5p_pEP4fWiFvlt2mdbYzeSFYQKaK_&usqp=CAU"
            height="50"
          />
          <ul className="navbar-nav ml-auto" style={{ color: "white" }}>
            <li>STAY HOME, STAY SAFE</li>
          </ul>
          <ul className="navbar-nav ml-auto">
            <li className="nav-item active" onClick={this.handleActive}>
              <Link to="/" className="nav-link">
                HOME
              </Link>
            </li>
            <li className="nav-item" onClick={this.handleActive}>
              <Link to={url} className="nav-link">
                DETAILS
              </Link>
            </li>
            <li className="nav-item" onClick={this.handleSignout}>
              <Link to="/" className="nav-link">
                SIGN OUT
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.user,
    //symptom: state.symptom,
  };
};

export default connect(mapStateToProps)(NavBar);
