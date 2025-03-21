import React from "react";
import Routes from "./Router.jsx";
import Footer from "./Components/Footer.jsx";

const App = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex-grow">
        <Routes />
      </div>
      <Footer />
    </div>
  );
};

export default App;