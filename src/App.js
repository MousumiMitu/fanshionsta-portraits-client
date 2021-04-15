import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./Components/Home/Home/Home";
import DashBoard from "./Components/DashBoard/DashBoard/DashBoard";
import Login from "./Components/Login/Login";
import AddService from "./Components/DashBoard/AddService/AddService";
import ServiceBooking from "./Components/Home/ServiceBooking/ServiceBooking";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/dashboard">
          <DashBoard />
        </Route>
        <Route path="/addService">
          <AddService />
        </Route>
        <Route path="/service/:serviceId">
          <ServiceBooking />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
