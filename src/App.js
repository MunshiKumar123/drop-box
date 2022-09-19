import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import Style from "./Style.css";

// import SignUp from "./SignUp";
// import SignIn from "./SignIn";
// import Main from "./Main";
// import RemoveUser from "./RemoveUser";

import DropBox from "./component/DropBox";
// import Demo from "./context/Demo";
// import Count from "./reducer/Count";
// const PrivateRoute = (props) => {
//   const token = localStorage.getItem("Token");
//   if (token) {
//     return <Route exact={true} path={props.path} component={props.component} />;
//   } else {
//     return <SignIn {...props} />;
//   }
// };
const App = () => {
  return (
    <>
      <div className="container-fluid mt-5">
        <div className="row">
          <div className="col">{/* <Demo /> */}</div>
          <div className="col">
            {" "}
            <DropBox />
          </div>
          <div className="col"> {/* <Count /> */}</div>
        </div>
      </div>
      {/* <Switch>
        <Route path="/" component={SignIn} exact={true} />
        <Route exact path="/signIn" component={SignIn} />
        <Route exact path="/signup" component={SignUp} />

        <PrivateRoute exact path="/main" component={Main} />
        <PrivateRoute exact path="/removeUser" component={RemoveUser} />
        <Redirect to="/" />
      </Switch> */}
    </>
  );
};

export default App;
