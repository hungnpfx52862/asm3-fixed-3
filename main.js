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

const btnMore = document.querySelectorAll(".viewmoreBTN");
const btnLess = document.querySelectorAll(".viewlessBTN");
btnMore.forEach((btn) => {
  btn.addEventListener("click", () => {
    btn.style.display = "none";
    btn.classList.remove("active");
    btn.nextElementSibling.style.display = "block";
    btn.nextElementSibling.nextElementSibling.style.display = "block";
  });
});

btnLess.forEach((btn) => {
  btn.addEventListener("click", () => {
    btn.style.display = "none";
    btn.previousElementSibling.style.display = "none";
    btn.previousElementSibling.previousElementSibling.classList.add("active");
  });
});

// Toggle box
// document.querySelectorAll(".sixbox .box").forEach((box) => {
//   box.addEventListener("click", () => {
//     box.classList.toggle("active");
//   });
// });
