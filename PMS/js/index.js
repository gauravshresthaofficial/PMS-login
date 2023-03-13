// import key from "./key.js";
// console.log("hi");
import key from "../DATA/admin_login_key.js";
// const userNameField = document.querySelector(".username "),
//   passwordField = document.querySelector(".password"),
  // console.log(userNameField),
  visibilityOn = document.querySelector("#visibility"),
  visibilityOff = document.querySelector("#visibility-off"),
  forgetPassword = document.querySelector(".forget-password"),
  loginBtn = document.querySelector(".login"),
  wrongDetail = document.querySelector(".wrong-detail");

// const userName = key.map((data) => {
//   return data.userName;
// });
// const password = key.map((data) => {
//   return data.password;
// });
// console.log(userName, password);

// let inputedUserName, inputedPassword;
// function loginBtnClick() {
//   inputedUserName = userNameField.value;
//   inputedPassword = passwordField.value;

//   console.log(inputedUserName, inputedPassword);
//   userNameField.value = "";
//   passwordField.value = "";
//   // userName.forEach((e) => {
//   //   console.log(e, inputedUserName);
//   // });
//   for (let i = 0; i < userName.length; i++) {
//     console.log(userName[i]);
//     if (userName[i] === inputedUserName && password[i] === inputedPassword) {
//       console.log("HI");
//       window.location.href = "./DASHBOARD/dashboard.html";
//     } else {
//       wrongDetail.classList.remove("opacity");
//     }
//   }
// }
function visibilityOffClick() {
  visibilityOff.style.display = "none";
  visibilityOn.style.display = "block";
  passwordField.type = `text`;
}
function visibilityOnClick() {
  visibilityOff.style.display = "block";
  visibilityOn.style.display = "none";
  passwordField.type = `password`;
}
loginBtn.addEventListener("click", loginBtnClick);
visibilityOff.addEventListener("click", visibilityOffClick);
visibilityOn.addEventListener("click", visibilityOnClick);