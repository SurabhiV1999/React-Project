// import React from "react";
// import ReactDOM from "react-dom";
// import "./index.css";
// //import App from "./App";
// import * as serviceWorker from "./serviceWorker";
// import SignUp from "./Components/signup";
// import "bootstrap/dist/css/bootstrap.css";
// import "bootstrap/dist/css/bootstrap.min.css";
// import Navbar from "./Components/navbar";
// import Details from "./Components/details";
// import { CookiesProvider } from "react-cookie";
// import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// ReactDOM.render(
//   <Router>
//     <Navbar />
//     {/* <CookiesProvider>
//       <SignUp />
//     </CookiesProvider> */}
//     <Switch>
//       <Route path="/" exact component={SignUp} />
//       <Route path="/details" component={Details} />
//     </Switch>
//   </Router>,
//   document.getElementById("root")
// );

// // If you want your app to work offline and load faster, you can change
// // unregister() to register() below. Note this comes with some pitfalls.
// // Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();

import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { createStore } from "redux";
import { Provider } from "react-redux";
import reducer from "./reducers/reducer";
//import SignUp from "./Components/signup";
// import "bootstrap/dist/css/bootstrap.css";
// import "bootstrap/dist/css/bootstrap.min.css";
// import Navbar from "./Components/navbar";
// import Details from "./Components/details";
// import { CookiesProvider } from "react-cookie";
// import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
const store = createStore(reducer);

ReactDOM.render(
  <Provider store={store}>
    {" "}
    <App />{" "}
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
