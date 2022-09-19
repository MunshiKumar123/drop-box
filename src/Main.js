import React from "react";
import DataShow from "./DataShow";
import RemoveUser from "./RemoveUser";

const Main = (props) => {
  const logout = () => {
    localStorage.removeItem("Token");
    props.history.push("/");
  };
  return (
    <>
      <div className="container mt-3">
        <button className="btn btn-primary" onClick={logout}>
          Logout
        </button>
        <h4>Welcome Home Page!👌</h4>

        <div className="container">
          <div className="row">
            <div className="col">
              {" "}
              <DataShow />
            </div>
            <div className="col">
              {" "}
              <RemoveUser />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Main;
