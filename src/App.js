import React from "react";
import { Route, Routes } from "react-router-dom";

import Address from "./components/screens/forms/Address";
import ConfirmName from "./components/screens/forms/ConfirmName";
import Login from "./components/screens/Login";
import LoginPass from "./components/screens/login-pass";
import UsernameAndPassword from "./components/screens/forms/UsernameAndPassword";
import BusinessInfo from "./components/screens/forms/BusinessInfo";
import Finish from "./components/screens/forms/Finish";
import SuccessfulAccount from "./components/screens/forms/SuccessfulAccount";
import ProfileSetting from "./components/screens/profile_setting/ProfileSetting";
import PurchaseServices from "./components/screens/PurchaseServices";
import ProductsLicenses from "./components/screens/ProductsLicenses";
import PaymentHistory from "./components/screens/PaymentHistory";
import PaymentMethods from "./components/screens/payment_methods/PaymentMethods";
import BillingNotifications from "./components/screens/billing_notifications/BillingNotifications";

export default function App() {
  return (
    <>
      <Routes>
        {/*============= profile section ===============*/}
        <Route path="/" element={<ProfileSetting/>} />
        <Route path="/profilesetting" element={<ProfileSetting />} />
        <Route path="/purchaseservices" element={<PurchaseServices />} />
        <Route path="/productslicenses" element={<ProductsLicenses />} />
        <Route path="/paymenthistory" element={<PaymentHistory />} />
        <Route path="/paymentmethods" element={<PaymentMethods />} />
        <Route
          path="/billingnotifications"
          element={<BillingNotifications />}
        />
        {/* forms  route without appbar*/}
        <Route path="/login" element={<Login />} />
        <Route path="/loginPass" element={<LoginPass />} />
        <Route path="/confirmName" element={<ConfirmName />} />
        <Route path="/address" element={<Address />} />
        <Route path="/usernameandpassword" element={<UsernameAndPassword />} />
        <Route path="/businessinfo" element={<BusinessInfo />} />
        <Route path="/finish" element={<Finish />} />
        <Route path="/successfulaccount" element={<SuccessfulAccount />} />
      </Routes>
    </>
  );
}
