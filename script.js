let signup_form = document.querySelector(".signup-div");
let signin_form = document.querySelector(".signin-div");
let nav_signup = document.querySelector(".login-signup");
let firstName = document.querySelector(".first-name");
let lasttName = document.querySelector(".last-name").value;
let email = document.querySelector(".email").value;
let pswd = document.querySelector(".password");
let cnfmPswd = document.querySelector(".cnfm-password");
let recommenderGrp = document.querySelector(".recommendation");
let followBtn = document.querySelectorAll(".follow-btn");
let user_loggedIn = document.querySelector(".logged-in");
let username = document.querySelector(".username");
let join_button = document.querySelector(".leave-grp-btn");
let sec_menu_join_button = document.querySelector(".btn-join");
let sec_menu_leave_button = document.querySelector(".leave-btn");
let closeBtn = document.querySelectorAll(".close");
let loggedIn = false;

// for closing signup and signin form 
function closeDiv() {
  signup_form.classList.add("none");
  signin_form.classList.add("none");
}

// for the functioning of follow button 
const follow = (elem) => {
  console.log(elem);
  let element = document.getElementById(elem);
  if (element.innerText === "Follow") {
    element.innerText = "Followed";
    element.style.background = "black";
    element.style.color = "white";
  } else {
    element.innerText = "Follow";
    element.style.background = "#EDEEF0";
    element.style.color = "black";
  }
};

// for validating signup or signin form submit 
function formValidation() {
  recommenderGrp.classList.remove("none");
  nav_signup.classList.add("none");
  user_loggedIn.classList.remove("none");
  username.innerHTML = `${
    firstName.value.length < 1 ? "User" : firstName.value
  }`;
  signup_form.classList.add("none");
  if (join_button.innerText === "Join Group") {
    join_button.innerText = "Leave Group";
  }
  sec_menu_join_button.classList.contains("none");
  sec_menu_leave_button.classList.remove("none");
  sec_menu_join_button.classList.add("none");
  loggedIn=true;
  signin_form.classList.add("none");
}

// for opening signup form 
function openSignupForm() {
  if (signin_form.classList.contains("none")) {
    signup_form.classList.remove("none");
  } else {
    signin_form.classList.add("none");
    signup_form.classList.remove("none");
  }
}

// for opening signin form 
function openSigninForm() {
  signup_form.classList.add("none");
  signin_form.classList.remove("none");
}
