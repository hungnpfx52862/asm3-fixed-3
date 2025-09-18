// Kiểm tra email
document.getElementById("email-submit").addEventListener("click", () => {
  const emailInput = document.getElementById("email-input").value.trim();
  const emailError = document.getElementById("email-error");
  const personalDetails = document.getElementById("personal-details");
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (regex.test(emailInput)) {
    emailError.style.display = "none";
    personalDetails.style.display = "block";
  } else {
    emailError.style.display = "block";
    personalDetails.style.display = "none";
  }
});

// Toggle box
// document.querySelectorAll(".sixbox .box").forEach((box) => {
//   box.addEventListener("click", () => {
//     box.classList.toggle("active");
//   });
// });
