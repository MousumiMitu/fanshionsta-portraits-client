import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./Components/Home/Home/Home";
import Login from "./Components/Login/Login";
import AddService from "./Components/DashBoard/AddService/AddService";

import { createContext, useEffect, useState } from "react";
import PrivateRoute from "./Components/PrivateRoute/PrivateRoute";
import BookingCheckOut from "./Components/Home/BookingCheckOut/BookingCheckOut";
import BookingStatus from "./Components/DashBoard/BookingStatus/BookingStatus";
import ManageServices from "./Components/DashBoard/ManageServices/ManageServices";
import MakeAdmin from "./Components/DashBoard/MakeAdmin/MakeAdmin";
import AddReview from "./Components/DashBoard/AddReview/AddReview";
import Review from "./Components/Home/Review/Review";
import UpdateStatus from "./Components/DashBoard/UpdateStatus/UpdateStatus";
import jwt_decode from "jwt-decode";

export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});

  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
        <Switch>
          <Route path="/addService">
            <AddService />
          </Route>
          <Route path="/manageServices">
            <ManageServices />
          </Route>
          <Route path="/makeAdmin">
            <MakeAdmin />
          </Route>
          <Route path="/addReview">
            <AddReview />
          </Route>
          <Route path="/updateStatus">
            <UpdateStatus />
          </Route>
          <PrivateRoute path="/bookingCheckOut/:orderId">
            <BookingCheckOut />
          </PrivateRoute>
          <PrivateRoute path="/bookingStatus">
            <BookingStatus />
          </PrivateRoute>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
