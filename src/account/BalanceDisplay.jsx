function formatCurrency(value) {
  return new Intl.NumberFormat("en", {
    style: "currency",
    currency: "INR",
  }).format(value);
}

function BalanceDisplay() {
  return (
    <div className="balance">
      <h2>Balance : {formatCurrency(123456)}</h2>
    </div>
  );
}

export default BalanceDisplay;
