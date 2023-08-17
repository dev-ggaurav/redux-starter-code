import CreateCustomer from "./components/CreateCustomer";
import Customer from "./components/Customer";
import AccountOperations from "./components/AccountOperations";
import BalanceDisplay from "./components/BalanceDisplay";

function App() {
  return (
    <div>
      <h1>React Redux Bank</h1>
      <CreateCustomer />
      <Customer />
      <AccountOperations />
      <BalanceDisplay />
    </div>
  );
}

export default App;
