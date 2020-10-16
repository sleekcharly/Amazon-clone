import React, { useEffect } from "react";
import "./App.css";
import Header from "./components/Header";
import Home from "./components/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Checkout from "./components/Checkout";
import Login from "./components/Login";
import { auth } from "./firebase";
import { useStateValue } from "./StateProvider";
import Payment from "./components/Payment";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import Orders from "./components/Orders";

const promise = loadStripe(
  "pk_test_51HcIAlIMIY2scREgJ2WFsilKPLCeTMEHkjwEMBABoqsLI57gMVE29Zvn3c3DYRsSI29VJKC1hMHORxRd16yAnsY3003IAeQVnT"
);

function App() {
  const [{}, dispatch] = useStateValue();

  useEffect(() => {
    // will only run once when the app component loads..
    auth.onAuthStateChanged((authUser) => {
      console.log("The user is >>> ", authUser);

      if (authUser) {
        // the user just logged in / the user was logged in
        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        // the user is logged out
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);
  return (
    // BEM convention
    <Router>
      <div className="app">
        <Switch>
          <Route path="/checkout">
            {/* Header */}
            <Header />
            {/* Checkout */}
            <Checkout />
          </Route>

          <Route path="/payment">
            <Header />

            <Elements stripe={promise}>
              <Payment />
            </Elements>
          </Route>

          <Route path="/orders">
            <Header />
            <Orders />
          </Route>

          <Route path="/login">
            <Login />
          </Route>

          <Route path="/">
            {/* Header */}
            <Header />
            {/* Home */}
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
