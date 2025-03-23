import React from "react";
import CustomerList from "./components/CustomerList";
import AddCustomerModal from "./components/CustomerForm";

function App() {
  return (
    <div>
      <CustomerList />
      <AddCustomerModal />
    </div>
  );
}

export default App;
