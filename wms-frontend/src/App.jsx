import React from "react";
import Router from "./routes";
import AlertComponent from "./components/AlertComponent";

const App = () => {
  return (
    <React.Fragment>
      <AlertComponent />
      <Router />
    </React.Fragment>
  )
}

export default App