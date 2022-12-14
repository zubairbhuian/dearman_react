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
import ContactsDetails from "./components/screens/contacts/ContactsDetails"
import ContactsDetailsChange from "./components/screens/contacts/ContactsDetailsChange";
import TrailersDetails from "./components/screens/trailers/TrailersDetails";
import EntitiesDetails from "./components/screens/entities/EntitiesDetails";
import DriversDetails from "./components/screens/drivers/DriversDetails";
import AddSuppliersName from "./components/screens/suppliers/AddSuppliersName";
import AddSuppliersAddress from "./components/screens/suppliers/AddSuppliersAddress";
import AddSuppliersOptionalSettings from "./components/screens/suppliers/AddSuppliersOptionalSettings";
import AddSuppliersFinish from "./components/screens/suppliers/AddSuppliersFinish";
import AddContactsBasics from "./components/screens/contacts/AddContactsBasics";
import AddContactsNotifications from "./components/screens/contacts/AddContactsNotifications";
import AddContactsFinish from "./components/screens/contacts/AddContactsFinish";
import AddDestinationsName from "./components/screens/destinations/AddDestinationsName";
import AddDestinationsTerminalSetting from "./components/screens/destinations/AddDestinationsTerminalSetting";
import AddDestinationsFinish from "./components/screens/destinations/AddDestinationsFinish";
import AddTrailersName from "./components/screens/trailers/AddTrailersName";
import AddTrailersCapacity from "./components/screens/trailers/AddTrailersCapacity";
import AddTrailersInspection from "./components/screens/trailers/AddTrailersInspection";
import AddTrailersFinish from "./components/screens/trailers/AddTrailersFinish";
import AddDriversName from "./components/screens/drivers/AddDriversName";
import AddDriversIndentiflication from "./components/screens/drivers/AddDriversIndentiflication";
import AddDriversFinish from "./components/screens/drivers/AddDriversFinish";
import AddProductsName from "./components/screens/products/AddProductsName";
import AddProductsProductType from "./components/screens/products/AddProductsProductType";
import AddProductComplianceHazard from "./components/screens/products/AddProductComplianceHazard";
import AddProductOptionalSettings from "./components/screens/products/AddProductOptionalSettings";
import AddProductFinish from "./components/screens/products/AddProductFinish";
import Topappbar from "./components/appbar/TopAppbar";




export default function App() {
  return (
    <>
      <Routes>
        {/*============= profile section ===============*/}
        <Route path="/" element={<PaymentHistory/>} />
        {/* Demo  */}
        <Route path="/profilesetting" element={< Topappbar/>} />
        {/* Demo  */}
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
        <Route path="/drivers_details" element={<DriversDetails/>} />
        <Route path="/entities_details" element={<EntitiesDetails/>} />
        <Route path="/trailers_details" element={<TrailersDetails/>} />
        <Route path="/products_details" element={<ProductsDetails/>} />
        <Route path="/destinations_details" element={<DestinationsDetails/>} />
        <Route path="/contacts_details" element={<ContactsDetails/>} />
        <Route path="/contacts_details_change" element={<ContactsDetailsChange/>} />
        {/* Add Suppliers  */}
        <Route path="/add_suppliers_name" element={<AddSuppliersName/>} />
        <Route path="/add_suppliers_address" element={<AddSuppliersAddress/>} />
        <Route path="/add_suppliers_optional_settings" element={<AddSuppliersOptionalSettings/>} />
        <Route path="/add_suppliers_finish" element={<AddSuppliersFinish/>} />
        {/* Add Contacts */}
        <Route path="/add_contacts_basics" element={<AddContactsBasics/>} />
        <Route path="/add_contacts_notifications" element={<AddContactsNotifications/>} />
        <Route path="/add_contacts_finish" element={<AddContactsFinish/>} />
        {/* Add Destinations */}
        <Route path="/add_destinations_name" element={<AddDestinationsName/>} />
        <Route path="/add_destinations_terminal_setting" element={<AddDestinationsTerminalSetting/>} />
        <Route path="/add_destinations_finish" element={<AddDestinationsFinish/>} />
        {/* Add Trailers */}
        <Route path="/add_trailers_name" element={<AddTrailersName/>} />
        <Route path="/add_trailers_capacity" element={<AddTrailersCapacity/>} />
        <Route path="/add_trailers_inspection" element={<AddTrailersInspection/>} />
        <Route path="/add_trailers_finish" element={<AddTrailersFinish/>} />
        {/* Add drivers */}
        <Route path="/add_drivers_name" element={<AddDriversName/>} />
        <Route path="/add_drivers_indentiflication" element={<AddDriversIndentiflication/>} />
        <Route path="/add_drivers_finish" element={<AddDriversFinish/>} />
        {/* Add Product */}
        <Route path="/add_products_name" element={<AddProductsName/>} />
        <Route path="/add_products_product_type" element={<AddProductsProductType/>} />
        <Route path="/add_product_compliance_hazard" element={<AddProductComplianceHazard/>} />
        <Route path="/add_product_optional_settings" element={<AddProductOptionalSettings/>} />
        <Route path="/add_product_finish" element={<AddProductFinish/>} />
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
