import React from "react";
import Router from "./routes";
import AlertComponent from "./components/AlertComponent";
import { Helmet } from "react-helmet";

const App = () => {
  return (
    <React.Fragment>
      <AlertComponent />
      <Router />
      <Helmet>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link href="https://fonts.googleapis.com/css2?family=Khula:wght@400;600;800&display=swap" rel="stylesheet" />
      </Helmet>
    </React.Fragment>
  );
}

export default App;
