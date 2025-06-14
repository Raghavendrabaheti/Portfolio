import React, { Suspense } from "react";
import Routes from "./Router.jsx";
import Footer from "./Components/Footer.jsx";
import ScrollToTop from "./Components/ScrollToTop.jsx";
import MobileOptimizedLoader from "./Components/MobileOptimizedLoader.jsx";
import MobilePerformanceMonitor from "./Components/MobilePerformanceMonitor.jsx";

const App = () => {
  return (
    <MobilePerformanceMonitor>
      <Suspense fallback={<MobileOptimizedLoader />}>
        <div className="flex flex-col min-h-screen">
          <div className="flex-grow">
            <Routes />
          </div>
          <Footer />
          <ScrollToTop />
        </div>
      </Suspense>
    </MobilePerformanceMonitor>
  );
};

export default App;