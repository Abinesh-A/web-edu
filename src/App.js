import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import React from "react";
import "./App.css";
// import Navbar1 from "./components/mainnavbar/Navbar1";
import Navbar2 from "./components/mainnavbar/Navbar2";
// import { AmplifySignIn, AmplifyAuthenticator } from "@aws-amplify/ui-react";
import { AuthState, onAuthUIStateChange } from "@aws-amplify/ui-components";
import Myprofile from "./components/myprofile/Myprofile";
import Dashboard from "./components/dashboard/Dashboard";
import Mygoal from "./components/mygoal/Mygoal";
import Tutor from "./components/tutor/Tutor";
import Favourite from "./components/Favourite/Favourite";
import Subscription from "./components/subscription/Subscription";
import { subscriptiondata } from "./components/subscription/Subscriptiondata";
import Payment from "./components/payment/Payment";
// import Piechartbtn from "./components/piechartbtn/Piechartbtn";
// import Piechart from "./components/piechart/Piechart";

const App = () => {
  const [authState, setAuthState] = React.useState();
  const [user, setUser] = React.useState();
  const [username, setUsername] = React.useState();
  const [email, setEmail] = React.useState();

  React.useEffect(() => {
    return onAuthUIStateChange((nextAuthState, authData) => {
      setAuthState(nextAuthState);
      setUser(authData);
      // setUsername(authData.username);
      // setEmail(authData.attributes.email);
    });
  }, []);

  return (
    // authState === AuthState.SignedIn || user ?
    <div className="App">
      <Router>
        <Navbar2 username={username} email={email} />
        <div className="margin">
          <Switch>
            <Route exact={true} path="/">
              <Dashboard username={username} />
            </Route>
            <Route path="/myprofile">
              <Myprofile />
            </Route>
            <Route path="/mygoal">
              <Mygoal />
            </Route>
            <Route path="/accountsetting">
              <h1>accountsetting</h1>
            </Route>
            <Route path="/paymentmethod">
              <h1>paymentmethod</h1>
            </Route>
            <Route path="/paymenthistory">
              <h1>paymenthistory</h1>
            </Route>
            <Route path="/favourite">
              <Favourite />
            </Route>
            <Route path="/subscription">
              <Subscription data={subscriptiondata} />
            </Route>
            <Route path="/payment">
              <Payment />
            </Route>
            <Route path="/allcourse">
              <h1>All Course</h1>
            </Route>
            <Route path="/tutor">
              <Tutor />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
  // : (
  //   <div className="App">
  //     <Navbar1 />
  //     <AmplifyAuthenticator>
  //       <AmplifySignIn
  //         headerText="sign in to your user account"
  //         slot="sign-in"
  //       ></AmplifySignIn>{" "}
  //     </AmplifyAuthenticator>
  //   </div>
  // );
};

export default App;
