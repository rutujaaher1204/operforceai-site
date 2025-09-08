import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import PlatformIntro from "./components/PlatformIntro";
import Products from "./components/Products";
import Footer from "./components/Footer";
import CareersPage from "./pages/CareersPage";
import Support from "./pages/SupportPage";
import About from "./pages/About";
import AllProducts from "./pages/AllProduct";
import EnterprisePlatform from "./pages/EnterprisePlatforms";
import EnterpriseApps from "./pages/EnterpriseApps";
import BusinessConsulting from "./pages/BusinessConsulting";
import MobileApps from "./pages/MobileApps";

export default function App() {
  return (
    <Router>
      <div className="min-h-screen w-full font-display">
        <Navbar />

        <main className="relative z-10">
          <Routes>
            <Route
              path="/"
              element={
                <div className="bg-brand-gradient bg-[length:400%_400%] animate-gradient-shift min-h-screen flex flex-col justify-between">
                  <div>
                    <Hero />
                    <PlatformIntro />
                    <Products />
                  </div>
                  <Footer  />
                </div>
              }
            />

            <Route
              path="/careers"
              element={
                <div className="careers-bg text-gray-900 min-h-screen w-full flex flex-col justify-between">
                  <CareersPage />
                  <Footer  />
                </div>
              }
            />

            <Route
              path="/support"
              element={
                <div className="support-bg text-gray-900 min-h-screen w-full flex flex-col justify-between">
                  <Support />
                  <Footer  />
                </div>
              }
            />

            <Route
              path="/about"
              element={
                <div className="about-bg text-gray-900 min-h-screen w-full flex flex-col justify-between">
                  <About />
                  <Footer  />
                </div>
              }
            />

            <Route
              path="/products/all"
              element={
                <div className="min-h-screen flex flex-col justify-between bg-gradient-to-r from-pink-200 via-purple-200 to-indigo-200">
                  <AllProducts />
                  <Footer  />
                </div>
              }
            />

            <Route
              path="/products/platform"
              element={
                <div className="min-h-screen flex flex-col justify-between bg-gradient-to-r from-pink-300 via-purple-200 to-blue-200">
                  <EnterprisePlatform />
                  <Footer />
                </div>
              }
            />

            <Route
              path="/products/apps"
              element={
                <div className="min-h-screen flex flex-col justify-between bg-enterprise-apps text-gray-900">
                  <EnterpriseApps />
                  <Footer  />
                </div>
              }
            />

            <Route
              path="/products/consulting"
              element={
                <div className="min-h-screen flex flex-col justify-between bg-gradient-to-r from-pink-300 via-purple-200 to-blue-200">
                  <BusinessConsulting />
                  <Footer  />
                </div>
              }
            />

            <Route
              path="/products/mobile"
              element={
                <div className="min-h-screen flex flex-col justify-between bg-gradient-to-r from-pink-300 via-purple-200 to-blue-200">
                  <MobileApps />
                  <Footer  />
                </div>
              }
            />
          </Routes>
        </main>
      </div>
    </Router>
  );
}
