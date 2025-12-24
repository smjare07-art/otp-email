
emailjs.init("YTTnxBTZxCqqNxXUk");

let generatedOTP;

const form = document.getElementById("form");
const btn = document.getElementById("button");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  btn.value = "Sending...";

  const email = document.getElementById("email").value;


  generatedOTP = Math.floor(100000 + Math.random() * 900000);

  emailjs.send(
    "service_j9ga86u",     
    "template_348ke3m",    
    {
      to_email: email,
      otp: generatedOTP
    }
  ).then(() => {
    btn.value = "Send OTP";
    document.getElementById("msg").innerText =
      "OTP Sent Successfully ";
  }).catch((error) => {
    btn.value = "Send OTP";
    document.getElementById("msg").innerText =
      "Failed to send OTP ";
    console.log(error);
  });
});


function verifyOTP() {
  const userOTP = document.getElementById("otpInput").value;

  if (userOTP == generatedOTP) {
    document.getElementById("msg").innerText =
      "OTP Verified Successfully ";
  } else {
    document.getElementById("msg").innerText =
      "Wrong OTP ";
  }
}
