import React from "react";

//local imports
import Topbar from "./components/Topbar";
import IntroPage from "./pages/IntroPage";
import PartnerPage from "./pages/PartnerPage";
import LaunchStartupPage from "./pages/LaunchStartupPage/LaunchStartupPage";
import GrowStartupPage from "./pages/GrowStartupPage";
import ManageStuffPage from "./pages/ManageStuffPage";
import BookSessionPage from "./pages/BookSessionPage";
import PricingPage from "./pages/PricingPage";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Topbar />
      <IntroPage />
      <PartnerPage />
      <LaunchStartupPage />
      <GrowStartupPage />
      <ManageStuffPage />
      <BookSessionPage />
      <PricingPage />
      <Footer />
    </div>
  );
}

export default App;
