import React, { Component } from "react";
import { connect } from "react-redux";
import {
  BrowserRouter as Router,
  Navigate,
  Route,
  Routes,
} from "react-router-dom";
import PrivateRoute from "./PrivateRoute";
import PropTypes from "prop-types";
import HomePage from "./components/pages/homePage/HomePage";
import SignIn from "./components/signin/SignIn";
import SignUp from "./components/signup/Signup";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import { getSession, destroySession } from "./actions/userSession";

class RouteLinks extends Component {
  componentDidMount() {
    this.props.getSession();
  }
  onLogout = (event) => {
    this.props.destroySession();
  };
  render() {
    const { userSession } = this.props;
    return (
      <>
        <Router>
          <Header userSession={userSession} logOutFunction={this.onLogout} />
          <Routes>
            <Route exact path="/api/login" element={<SignIn />} />
            <Route exact path="/api/register" element={<SignUp />} />
            <Route exact path="/api/update" element={<SignUp />}></Route>

            {/* Product Owner Private Links Start */}
            {/* <PrivateRoute
              exact
              path="/productowner/dashboard"
              component={OwnerDashboard}
              userSession={userSession}
              permittedUser="ProductOwner"
            />
            <PrivateRoute
              exact
              path="/productOwner/viewTask/:taskIdentifier"
              component={OwnerViewTask}
              userSession={userSession}
              permittedUser="ProductOwner"
            />
            <PrivateRoute
              exact
              path="/productowner/authoriseclient/:taskIdentifier"
              component={AuthorizeClient}
              userSession={userSession}
              permittedUser="ProductOwner"
            /> */}
            {/* Product Owner Private Links End */}
            <Route exact path="/api" element={<HomePage />} />
          </Routes>
          <Footer />
        </Router>
      </>
    );
  }
}
Routes.propTypes = {
  userSession: PropTypes.object.isRequired,
  getSession: PropTypes.func.isRequired,
  destroySession: PropTypes.func.isRequired,
};
const mapStateToProps = (state) => ({
  userSession: state.userSession,
});

export default connect(mapStateToProps, { getSession, destroySession })(
  RouteLinks
);
