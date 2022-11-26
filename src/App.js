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
import Terminals from "./components/screens/terminals/Terminals";
import Suppliers from "./components/screens/suppliers/Suppliers";
import Customers from "./components/screens/customers/Customers"
import Drivers from "./components/screens/drivers/Drivers"
import Entities from "./components/screens/entities/Entities"
import Trailers from "./components/screens/trailers/Trailers"
import Products from "./components/screens/products/Products"
import Destinations from "./components/screens/products/Products"
import Contacts from "./components/screens/contacts/Contacts"
import Insights from "./components/screens/insights/Insights";
import SubmitOrde from "./components/screens/submit_orde/SubmitOrde";
import OrderStatus from "./components/screens/order_status/OrderStatus";
import OrderManagement from "./components/screens/order-management/OrderManagement";
import TerminalsDetail from "./components/screens/terminals/TerminalsDetail";
import SuppliersDetail from "./components/screens/suppliers/SuppliersDetail";
import CustomersDetails from "./components/screens/customers/CustomersDetails";
import ProductsDetails from "./components/screens/products/ProductsDetails";
import DestinationsDetails from "./components/screens/destinations/DestinationsDetails";
export default function App() {
  return (
    <>
      <Routes>
        {/*============= profile section ===============*/}
        <Route path="/" element={<ProductsDetails/>} />
        <Route path="/profilesetting" element={<ProfileSetting />} />
        <Route path="/purchaseservices" element={<PurchaseServices />}/>
        <Route path="/productslicenses" element={<ProductsLicenses />}/>
        <Route path="/paymenthistory" element={<PaymentHistory />} />
        <Route path="/paymentmethods" element={<PaymentMethods />} />
        <Route path="/billingnotifications"element={<BillingNotifications />}/>
        {/* right section */}
        <Route path="/terminals" element={<Terminals />} />
        <Route path="/suppliers" element={<Suppliers />} />
        <Route path="/customers" element={<Customers/>} />
        <Route path="/drivers" element={<Drivers />} />
        <Route path="/entities" element={<Entities />} />
        <Route path="/trailers" element={<Trailers />} />
        <Route path="/products" element={<Products/>} />
        <Route path="/destinations" element={<Destinations/>} />
        <Route path="/contacts" element={<Contacts/>} />
        {/* sub */}
        <Route path="/terminals_detail" element={<TerminalsDetail/>} />
        <Route path="/suppliers_detail" element={<SuppliersDetail/>} />
        <Route path="/customers_details" element={<CustomersDetails/>} />
        {/*  */}
        <Route path="/products_details" element={<ProductsDetails/>} />
        <Route path="/destinations_details" element={<DestinationsDetails/>} />
        {/* top app bar */}
        <Route path="/insights" element={<Insights/>} />
        <Route path="/submitorde" element={<SubmitOrde/>} />
        <Route path="/orderstatus" element={<OrderStatus/>} />
        <Route path="/ordermanagement" element={<OrderManagement/>} />
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
