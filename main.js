// Show add money form on click
document.getElementById("add-button").addEventListener("click", () => {
  showForm(addMoneyForm);
  attachAddMoneyLogic(); // attach logic when form is shown
});

function attachAddMoneyLogic() {
  const validPin = 1234;
  document
    .getElementById("add-money-btn")
    .addEventListener("click", function (e) {
      e.preventDefault();
      const bank = document.getElementById("bank").value;
      const accountNumber = document.getElementById("account-number").value;
      const amount = parseInt(document.getElementById("add-amount").value);
      const pin = document.getElementById("add-pin").value;

      const availableBalance = parseInt(
        document.getElementById("available-balance").innerText
      );

      if (isNaN(amount) || amount <= 0) {
        alert("Please enter a valid amount.");
        return;
      }

      if (accountNumber.length < 11) {
        alert("Please provide a valid account number.");
        return;
      }

      if (pin != validPin) {
        alert("Please provide a valid pin number.");
        return;
      }

      const totalNewAvailableBalance = amount + availableBalance;
      document.getElementById("available-balance").innerText =
        totalNewAvailableBalance;

      alert(`✅ Successfully added $${amount} to your account from ${bank}.`);
    });
}
