import React, { useState } from "react";
import { Route, Switch, useHistory, useLocation } from "react-router-dom";
import "./App.css";
import Login from "./pages/Login";
import Register from "./pages/Register";
import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";
import Home from "./pages/Home";
import Dashboard from "./pages/dashboard/Learning";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import Navbar from "./components/Navbar";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Community from "./pages/dashboard/Community";
import Quizes from "./pages/dashboard/Quizes";
import Roleplays from "./pages/dashboard/Roleplays";
import FeedBack from "./pages/dashboard/FeedBack";
import DashboardNavbar from "./components/DashboardNavbar";
import Sidebar from "./components/Sidebar";

function App() {
  const history = useHistory();
  const location = useLocation();
  const [token, setToken] = useState(localStorage.getItem("token"));
  const [showSidebar, setShowSidebar] = useState(false);
  const isAuthenticated = !!token;
  const hideNavbarRoutes = [
    "/login",
    "/dashboard/empowerment",
    "/dashboard/community",
    "/dashboard/quizes",
    "/dashboard/roleplay",
    "/dashboard/feedback",
  ];

  //If token have then it will loged in and will navigate to the dashboard
  const handleLogin = (token) => {
    setToken(token);
    localStorage.setItem("token", token);
    history.push("/dashboard/empowerment");
  };

  // If loged out the token will be remove from local storage
  const handleLogout = () => {
    setToken(null);
    localStorage.removeItem("token");
    history.push("/");
  };
  const toggleSidebar = () => {
    setShowSidebar((prevOpen) => !prevOpen);
  };

  const shouldShowNavbar = !hideNavbarRoutes.includes(location.pathname);

  return (
    <div className="App">
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        {shouldShowNavbar && (
          <Navbar isAuthenticated={isAuthenticated} onLogout={handleLogout} />
        )}
        <ToastContainer />
        {/* ---- React router for navigte between pages ---- */}
        <Switch>
          <Route exact path="/">
            <Home isAuthenticated={isAuthenticated} />
          </Route>
          <Route path="/login">
            <Login handleLogin={handleLogin} />
          </Route>
          <Route path="/contact-us" component={ContactUs} />
          <Route path="/about-us" component={AboutUs} />
          <Route path="/register">
            <Register handleLogin={handleLogin} />
          </Route>

          {isAuthenticated && (
            <>
              <DashboardNavbar token={token} onLogout={handleLogout}  toggleSidebar={toggleSidebar} showSidebar={showSidebar} />
              <Sidebar showSidebar={showSidebar} />
              <Route path="/dashboard/empowerment">
                <Dashboard onLogout={handleLogout} />
              </Route>
              <Route path="/dashboard/community">
                <Community onLogout={handleLogout} />
              </Route>
              <Route path="/dashboard/quizes">
                <Quizes onLogout={handleLogout} />
              </Route>
              <Route path="/dashboard/roleplay">
                <Roleplays onLogout={handleLogout} />
              </Route>
              <Route path="/dashboard/feedback">
                <FeedBack onLogout={handleLogout} />
              </Route>
            </>
          )}
        </Switch>
        {/* ---- React router for navigte between pages ---- */}
      </LocalizationProvider>
    </div>
  );
}

export default App;
