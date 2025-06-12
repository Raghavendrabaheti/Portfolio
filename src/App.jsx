import React from "react";
import Routes from "./Router.jsx";
import Footer from "./Components/Footer.jsx";
import ScrollToTop from "./Components/ScrollToTop.jsx";

const App = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex-grow">
        <Routes />
      </div>
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default App;