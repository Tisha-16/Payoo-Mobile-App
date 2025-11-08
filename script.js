// login button functionality
document.getElementById("loginButton").addEventListener("click", function (e) {
  e.preventDefault();
  console.log("login button clicked");
  console.log(e);
  const mobileNumber = 11316668115;
  const pinNumber = 1234;
  const mobileNumberValue = document.getElementById("mobile-number").value;
  const mobileNumberValueConverted = parseInt(mobileNumberValue);

  const pinNumberValue = document.getElementById("pin-number").value;
  const pinNumberValueConverted = parseInt(pinNumberValue);

  console.log(mobileNumberValueConverted);
  console.log(pinNumberValueConverted);

  if (
    mobileNumberValueConverted === mobileNumber &&
    pinNumberValueConverted === pinNumber
  ) {
    // console.log("all values matched ");
    window.location.href = "./main.html";
  } else {
    // console.log("Invalid");
    alert("Invalid");
  }
});
