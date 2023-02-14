const form = document.querySelector("form");
form.addEventListener("submit", handleSubmit);

// import all the fields from the form.
// eg.
const name = document.getElementById("name");

const email = document.getElementById("email");

const phone = document.getElementById("phone");

const github = document.getElementById("github");

const linkedin = document.getElementById("linkedin");

const degree = document.getElementById("degree");

const college = document.getElementById("college");

const startingyear = document.getElementById("startingyear");

const endingyear = document.getElementById("endingyear");

const cgpa =document.getElementById("cgpa");

const skill = document.getElementById("skill");

const project = document.getElementById("project");

const description1 = document.getElementById("description1");

const link = document.getElementById("link");

const company = document.getElementById("company");

const designation = document.getElementById("designation");

const duration = document.getElementById("duration");

const description = document.getElementById("description");



function handleSubmit(e) {
  e.preventDefault();
  //   here get the values from the form and set it to the resume
  // eg.
  const name_resume = document.getElementById("name_resume");
  name_resume.innerHTML = name.value;
  //   similarly for all the other fields

  const email_resume = document.getElementById("email_resume");
  email_resume.innerHTML = email.value;

  const phone_resume = document.getElementById("phone_resume");
  phone_resume.innerHTML = phone.value;

  const github_resume = document.getElementById("github_resume");
  github_resume.innerHTML = github.value;

  const linkedin_resume = document.getElementById("linkedin_resume");
  linkedin_resume.innerHTML = linkedin.value;

  const degree_resume = document.getElementById("degree_resume");
  degree_resume.innerHTML = degree.value;

  const college_resume = document.getElementById("college_resume");
  college_resume.innerHTML = college.value;

  const startingyear_resume = document.getElementById("startingyear_resume");
  startingyear_resume.innerHTML = startingyear.value;

  const endingyear_resume = document.getElementById("endingyear_resume");
  endingyear_resume.innerHTML = endingyear.value;

  const cgpa_resume= document.getElementById("cgpa_resume");
  cgpa_resume.innerHTML =cgpa.value;

  const skill_resume = document.getElementById("skill_resume");
  skill_resume.innerHTML = skill.value;

  const project_resume = document.getElementById("project_resume");
  project_resume.innerHTML = project.value;

  const description1_resume = document.getElementById("description1_resume");
  description1_resume.innerHTML = description1.value;

  const link_resume = document.getElementById("link_resume");
  link_resume.innerHTML = link.value;

  const company_resume = document.getElementById("company_resume");
  company_resume.innerHTML = company.value;

  const designation_resume = document.getElementById("designation_resume");
  designation_resume.innerHTML = designation.value;

  const duration_resume = document.getElementById("duration_resume");
  duration_resume.innerHTML = duration.value;

  const description2_resume = document.getElementById("description2_resume");
  description2_resume.innerHTML = description2.value;

}

function handleLeft() {
  const left = document.querySelector(".left");
  const right = document.querySelector(".right");
  const print = document.querySelector(".print");
  // write more codes here
  document.getElementById("left").onclick = function () {
    document.getElementById("left").style.display = "none";
  }
  document.getElementById("myButton").style.display = "block";

}
function handlePrint() {
  const right = document.querySelector(".right");
  const left = document.querySelector(".left");
  const print = document.querySelector(".print");
  // write more codes here

  
  window.print();
  
  
}