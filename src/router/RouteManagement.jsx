import { React } from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "./../pages/homePage/HomePage";
import HybridClasses from "./../pages/hybridClasses/HybridClasses";
import RecordedLearning from "./../pages/recordedLearning/RecordedLearning";
import KampusMerdeka from "./../pages/kampusMerdeka/KampusMerdeka";
import MyAccount from "./../pages/myAccount/MyAccount";
import LayoutComponent from "./../components/layouts/LayoutComponent";

const RouteManagement = () => {
  return (
    <>
      <LayoutComponent>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/hybrid-classes" element={<HybridClasses />} />
          <Route path="/recorded-learning" element={<RecordedLearning />} />
          <Route path="/kampus-merdeka" element={<KampusMerdeka />} />
          <Route path="/my-account" element={<MyAccount />} />
          <Route path="*" element={<h1>404 Not Found</h1>} />
        </Routes>
      </LayoutComponent>
    </>
  );
};

export default RouteManagement;
