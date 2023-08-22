import { useSelector } from "react-redux";

function formatCurrency(value) {
  return new Intl.NumberFormat("en", {
    style: "currency",
    currency: "INR",
  }).format(value);
}

function BalanceDisplay() {
  const balance = useSelector((store) => store.account.balance);
  return (
    <div className="balance">
      <h2>Balance : {formatCurrency(balance)}</h2>
    </div>
  );
}

export default BalanceDisplay;
