import React, { Component } from "react";
// import "bootstrap/dist/css/bootstrap.css";
import { Redirect } from "react-router-dom";
import { withCookies } from "react-cookie";
//import { instanceOf } from "prop-types";
import Cookies from "universal-cookie";
import { connect } from "react-redux";
import "./Signup.css";
//import App from "../App";

const cookies = new Cookies();
class SignUp extends Component {
  constructor(props) {
    super(props);
    console.log("signin", this.props);
    this.state = {
      fields: { username: "", emailid: "", age: 0, gender: "Male" },
      errors: {},
      // bgColourMale: "blue",
      // bgColourFemale: "black",
      formIsValid: false,
    };
    this.handleBlur = this.handleBlur.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.submituserRegistrationForm = this.submituserRegistrationForm.bind(
      this
    );
  }
  componentDidUpdate() {
    console.log("Hello");
    if (!this.state.formIsValid) {
      if (this.state.fields.gender == "Male")
        document.getElementById("Female").classList.remove("activeButton");
      else document.getElementById("Male").classList.remove("activeButton");
      document
        .getElementById(this.state.fields.gender)
        .classList.add("activeButton");
    }
  }
  handleBlur() {
    if (cookies.get(this.state.fields["emailid"])) {
      const a = cookies.get(this.state.fields["emailid"]);
      console.log(a);
      this.setState({ fields: a });
      console.log(this.state.fields);
    }
  }
  handleChange(e) {
    let fields = this.state.fields;
    fields[e.target.name] = e.target.value;
    console.log("Hello!");
    this.setState({
      fields,
    });
  }

  submituserRegistrationForm(e) {
    e.preventDefault();
    if (this.validateForm()) {
      alert("Form submitted");
      this.setState({ formIsValid: true });
      this.props.dispatch({ type: "USERLOGGEDIN", data: this.state.fields });
      if (cookies.get(this.state.fields["emailid"])) {
        cookies.remove(this.state.fields["emailid"], { path: "/" });
      }
      cookies.set(this.state.fields["emailid"], this.state.fields, {
        path: "/",
      });
    }
  }

  validateForm() {
    let fields = this.state.fields;
    let errors = {};
    let formIsValid = true;

    if (!fields["username"]) {
      formIsValid = false;
      errors["username"] = "*Please enter your username.";
    }

    if (typeof fields["username"] !== "undefined") {
      if (!fields["username"].match(/^[a-zA-Z ]*$/)) {
        formIsValid = false;
        errors["username"] = "*Please enter alphabet characters only.";
      }
    }

    if (!fields["emailid"]) {
      formIsValid = false;
      errors["emailid"] = "*Please enter your email-ID.";
    }

    if (typeof fields["emailid"] !== "undefined") {
      //regular expression for email validation
      var pattern = new RegExp(
        /^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i
      );
      if (!pattern.test(fields["emailid"])) {
        formIsValid = false;
        errors["emailid"] = "*Please enter valid email-ID.";
      }
    }

    if (!fields["age"] || fields["age"] < 0) {
      formIsValid = false;
      errors["age"] = "*Please enter a valid age.";
    }
    this.setState({
      errors: errors,
    });
    // this.props.formIsValid = formIsValid;
    this.setState({ formIsValid });
    return formIsValid;
  }

  render() {
    if (this.state.formIsValid === true) {
      //let email = this.state.fields.emailid;
      //this.props.handleValid(this.state.fields.emailid);
      var url = "/details?email=" + this.state.fields.emailid;
      //console.log("URL", url);
      return <Redirect to={url} />;
    }
    return (
      <div
        style={{
          backgroundImage:
            "url(https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTrc4n-4EiFQnks_mAvwNUvFuHIIEwWVfSwUycqQ4f80H3Yz19c&usqp=CAU)",
          backgroundSize: "1600px 687px",
        }}
      >
        <div
          style={{
            width: "1200px",
            height: "687px",
            margin: "0 auto",
          }}
        >
          <br />
          <br />
          <form
            className="form-control-feedback"
            align="center"
            method="post"
            name="userRegistrationForm"
            onSubmit={this.submituserRegistrationForm}
          >
            <div className="form-row align-items-center">
              <div className="col-sm-3 my-1">
                <label htmlFor="inlineFormInputEmail">Email ID</label>
              </div>
              <div className="col-sm-3 my-1">
                <div className="input-group">
                  <input
                    type="text"
                    className="form-control"
                    name="emailid"
                    id="inlineFormInputGroupEmail"
                    placeholder="Email ID"
                    value={this.state.fields.emailid}
                    onChange={this.handleChange}
                    onBlur={this.handleBlur}
                  />
                </div>
                <div className="errorMsg" style={{ color: "red" }}>
                  {this.state.errors.emailid}
                </div>
              </div>
            </div>
            <br />
            <br />
            <div className="form-row align-items-center">
              <div className="col-sm-3 my-1">
                <label htmlFor="inlineFormInputName">Name</label>
              </div>
              <div className="col-sm-3 my-1">
                <div className="input-group">
                  <div
                    className="input-group-prepend"
                    htmlFor="inlineFormInputGroupUsername"
                  >
                    <div className="input-group-text">@</div>
                  </div>
                  <input
                    type="text"
                    className="form-control"
                    id="inlineFormInputGroupUsername"
                    placeholder="Username"
                    name="username"
                    value={this.state.fields.username}
                    onChange={this.handleChange}
                  />
                </div>
                <div className="errorMsg" style={{ color: "red" }}>
                  {this.state.errors.username}
                </div>
              </div>
            </div>
            <br />
            <br />

            <div className="form-row align-items-center">
              <div className="col-sm-3 my-1">
                <label htmlFor="inlineFormInputAge">Age</label>
              </div>
              <div className="col-sm-3 my-1">
                <div className="input-group">
                  <input
                    type="number"
                    className="form-control"
                    id="inlineFormInputGroupAge"
                    placeholder="Age"
                    name="age"
                    value={this.state.fields.age}
                    onChange={this.handleChange}
                  />
                </div>
                <div className="errorMsg" style={{ color: "red" }}>
                  {this.state.errors.age}
                </div>
              </div>
            </div>
            <br />
            <br />

            <div className="form-row align-items-center">
              <div className="col-sm-3 my-1">
                <label htmlFor="inlineFormInputGender">Gender</label>
              </div>
              <div>
                <div>
                  <button
                    type="button"
                    className="btn activeButton"
                    name="gender"
                    id="Male"
                    value="Male"
                    onClick={this.handleChange}
                  >
                    MALE
                  </button>
                  <button
                    type="button"
                    className="btn default"
                    id="Female"
                    name="gender"
                    value="Female"
                    onClick={this.handleChange}
                  >
                    FEMALE
                  </button>
                </div>
              </div>
            </div>
            <br />

            <button type="submit" className="btn btn-primary bg-dark btn-dark">
              NEXT>>
            </button>
          </form>
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    user: state.user,
    //symptom: state.symptom,
  };
};

export default connect(mapStateToProps)(withCookies(SignUp));
