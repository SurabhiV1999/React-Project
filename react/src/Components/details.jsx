// negation thing
// destructuring

import React, { Component } from "react";
import Symptoms from "./symptoms";
import DayComponents from "./daycomponents";
import Report from "./report";
import { Redirect } from "react-router-dom";
import Charts from "./chartComponent";
import { connect } from "react-redux";

class Details extends Component {
  state = {
    val: 0,
    symptom: { temperature: [], weight: [] },
  };
  handleDisplay = (val) => {
    this.setState({ val });
  };

  handleChange = (e) => {
    let symptom = this.state.symptom;
    symptom[e.target.name][this.state.val - 1] = Number(e.target.value);
    this.setState({
      symptom,
    });
    var url = "/details?email=" + this.props.user.emailid;
    return <Redirect to={url} />;
  };

  handleChanges = (a) => {
    if (this.state.symptom[a] && this.state.symptom[a].length > 0) {
      const symptoms = this.state.symptom;
      if (symptoms[a][this.state.val - 1] == 0)
        symptoms[a][this.state.val - 1] = 1;
      else symptoms[a][this.state.val - 1] = 0;
      this.setState({ symptom: symptoms });
      this.props.dispatch({
        type: "UPDATESYMPTOMS",
        data: this.props.symptom,
      });
    }
  };

  handleSubmit = () => {
    console.log("handling", this.props.user.emailid);
    fetch("http://127.0.0.1:5000/save", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        emailid: this.props.user.emailid,
        symptoms: this.props.symptom,
      }),
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
    this.props.dispatch({
      type: "UPDATESYMPTOMS",
      data: this.props.symptom,
    });
    this.setState({ val: 0 });
  };

  componentWillMount() {
    console.log("Comp did mount");
    fetch("http://127.0.0.1:5000/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ emailid: this.props.user.emailid }),
    })
      .then((res) => res.json())
      .then((data) =>
        this.setState({ symptom: data }, () =>
          this.props.dispatch({
            type: "UPDATESYMPTOMS",
            data: this.state.symptom,
          })
        )
      );
  }

  render() {
    console.log(this.props);
    return (
      <div>
        <DayComponents
          key={this.state.symptom}
          handleDisplay={this.handleDisplay}
          inputLen={this.state.symptom.temperature.length}
          val={this.state.val}
        />
        <Symptoms
          value={this.state.val}
          symptom={this.state.symptom}
          handleChanges={this.handleChanges}
          handleSubmit={this.handleSubmit}
          handleChange={this.handleChange}
        />
        <Charts
          temperature={this.state.symptom.temperature}
          weight={this.state.symptom.weight}
        />
        <Report
          symptom={this.state.symptom}
          inputLen={this.state.symptom.temperature.length || 0}
        />
      </div>
    );
  }
}

// function getUrlVars() {
//   var vars = {};
//   window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function (
//     m, // entire match
//     key, // first matching group
//     value
//   ) {
//     vars[key] = value;
//   });
//   return vars;
// }

const mapStateToProps = (state) => {
  return {
    user: state.user,
    symptom: state.symptom,
  };
};

export default connect(mapStateToProps)(Details);
