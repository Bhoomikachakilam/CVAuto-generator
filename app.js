const form = document.querySelector("form");
form.addEventListener("submit", handleSubmit);

 //import all the fields from the form.
// eg.
//const name = document.getElementById("name");

function handleSubmit(e) {
  e.preventDefault();
  //  here get the values from the form and set it to the resume
  // eg.
  const name = document.getElementById("name");
  const name_resume = document.getElementById("name_resume");
   name_resume.innerHTML = name.value;

   const email = document.getElementById("email");
   const emailResume = document.getElementById("email_resume");
   emailResume.innerHTML = email.value;
 
   const phone = document.getElementById("phone");
   const phoneResume = document.getElementById("phone_resume");
   phoneResume.innerHTML = phone.value;
 
   const address = document.getElementById("github");
   const addressResume = document.getElementById("github_resume");
   githubResume.innerHTML = github.value;

   const Linkedin = document.getElementById("Linkedin");
  const name_resume = document.getElementById("linkedin_resume");
  Linkedinresume.innerHTML = Linkedin.value;

   const degree = document.getElementById("degree");
   const degree_resume= document.getElementById("degree_resume");
   degreeResume.innerHTML = degree.value;
 
   const college = document.getElementById("phone");
   const phoneResume = document.getElementById("phone_resume");
   phoneResume.innerHTML = phone.value;
 
   const address = document.getElementById("address");
   const addressResume = document.getElementById("address_resume");
   addressResume.innerHTML = address.value;

   
  //   similarly for all the other fields
}

function handleLeft() {
  const left = document.querySelector(".left");
  const right = document.querySelector(".right");
  const print = document.querySelector(".print");
  // write more codes here
}
function handlePrint() {
  const right = document.querySelector(".right");
  const left = document.querySelector(".left");
  const print = document.querySelector(".print");
  // write more codes here
}
