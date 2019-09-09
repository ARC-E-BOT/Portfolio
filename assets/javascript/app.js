const mainContainer = document.getElementById("mainContainer");
const aboutMe = document.getElementById("aboutMe");
const portfolio = document.getElementById("portfolio");
const contact = document.getElementById("contact");

const aboutMeRawHTML = `
<div class="main-body" id="mainBody">
    <h1>About Me</h1>
    <img src="./assets/images/CoopPick.png" id="profilePic">
    <p>Hello, I am Adam Cooper. I am currently going to a coding bootcamp at the university of minnesota.</p>
</div>`;

mainContainer.innerHTML = aboutMeRawHTML;


let isAboutMe = true;
let isPortfolio = false;
let isContact = false;

aboutMe.addEventListener("click", function () {
    if (isAboutMe) return;
})