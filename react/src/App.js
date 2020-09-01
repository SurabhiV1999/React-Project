// import React from "react";
// import logo from "./logo.svg";
// import "./App.css";

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;

import React, { Component } from "react";
import SignUp from "./Components/Signup/Signup";
// import "bootstrap/dist/css/bootstrap.css";
// import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./Components/navbar";
import Details from "./Components/details";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

class App extends Component {
  // constructor() {
  //   super();
  // }
  state = {};
  // onValid = (a) => {
  //   console.log("Test");
  //   this.setState({ email: a });
  //   console.log("app", this.state.email);
  // };
  render() {
    return (
      <div>
        <Router>
          <Navbar />
          <Switch>
            <Route exact path="/">
              <SignUp />
            </Route>
            <Route path="/details">
              <Details />
            </Route>
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
