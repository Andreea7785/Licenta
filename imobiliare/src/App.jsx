import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "./Pages/Home/Home.jsx";
import TermsAndConditions from "./Pages/TermsAndConditions/TermsAndConditions";
import PrivacyPolicy from "./Pages/PrivacyPolicy/PrivacyPolicy.jsx";
import FAQ from "./Pages/FAQ/FAQ.jsx";
import AboutUs from "./Pages/AboutUs/AboutUs.jsx";
import Agents from "./Pages/Agents/Agents.jsx";
import TellUs from "./Pages/TellUs/TellUs.jsx";
import { AvailableProperties } from "./Pages/AvailableProperties/AvailableProperties.jsx";
import AgentPage from "./Pages/AgentPage/AgentPage.jsx";
import PropertyPage from "./Pages/PropertyPage/PropertyPage.jsx";
import LoginPage from "./Pages/LoginPage.jsx";
import CreateAnAccount from "./Pages/CreateAnAccount.jsx";
import { FavoriteProperties } from "./Pages/FavoriteProperties/FavoriteProperties.jsx";
import { AccountInformationsPage } from "./Pages/AccountInformations/AccountInformationsPage.jsx";
import ViewHistoryPage from "./Pages/ViewHistoryPage.jsx";
import HomeAgent from "./Pages/HomeAgent.jsx";
import Rules from "./Pages/Rules/Rules.jsx";
import AddProperty from "./Pages/AddProperty/AddProperty.jsx";
import MyReports from "./Pages/MyReports/MyReports.jsx";
import LoadedProperties from "./Pages/LoadedProperties/LoadedProperties.jsx";
import { FirmReports } from "./Pages/FirmReports/FirmReports.jsx";

const user = JSON.parse(localStorage.getItem("user")) ?? null;

const ProtectedAgentRoute = ({ children }) => {
  if (user && user.role === "agent") return children;
  return <Navigate to={"/home"} replace />;
};

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/termeni-si-conditii" element={<TermsAndConditions />} />
        <Route
          path="/politica-de-confidentialitate"
          element={<PrivacyPolicy />}
        />
        <Route path="/intrebari-frecvente" element={<FAQ />} />
        <Route path="/despre-noi" element={<AboutUs />} />
        <Route path="/agenti-imobiliari" element={<Agents />} />
        <Route path="/formular" element={<TellUs />} />
        <Route
          path="/proprietati-disponibile"
          element={<AvailableProperties />}
        ></Route>
        <Route path="/informatii-cont" element={<AccountInformationsPage />} />
        <Route path="/proprietati-favorite" element={<FavoriteProperties />} />
        <Route path="/agent/:id" element={<AgentPage />} />
        <Route path="/property/:id" element={<PropertyPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/create-an-account" element={<CreateAnAccount />} />
        <Route path="/istoric" element={<ViewHistoryPage />} />
        <Route path="/dashboard" element={<HomeAgent />} />
        <Route path="/regulament-intern" element={<Rules />} />
        <Route
          path="/incarca-proprietate"
          element={
            <ProtectedAgentRoute>
              <AddProperty />
            </ProtectedAgentRoute>
          }
        />
        <Route
          path="/rapoarte-firma"
          element={
            <ProtectedAgentRoute>
              <FirmReports />
            </ProtectedAgentRoute>
          }
        />
        <Route
          path="/rapoartele-mele"
          element={
            <ProtectedAgentRoute>
              <MyReports />
            </ProtectedAgentRoute>
          }
        />
        <Route path="/proprietati-incarcate" element={<LoadedProperties />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
