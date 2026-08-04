const homeHTML = `
        <h1 id="greetings">
          Hi, I'm Abhishek!<br />
          Software  
            <span id="wordContainer">
              <span id="word1">Engineer</span>
              <span id="word2">Developer</span>
            </span>
        </h1>

        <p id="aboutMe">
          Software 
          <span id="wordContainer1">
              <span id="word3">Engineer</span>
              <span id="word4">Developer</span>
          </span>
          with 2 years of experience in Java Backend
          Development using Spring Boot. Passionate about building scalable
          applications, solving Data Structures & Algorithms, and continuously
          improving my Full Stack Development and Machine Learning skills.
        </p>

        <a href="resume/abhishek_kumbhar.pdf" target="_blank" id="resumeButton">
          🧐 View Resume
        </a>    
`;

const skillsHTML = `
  <h1>Skills</h1>

      <div id="skillList">
      Languages: Java, JavaScript, C++, SQL<br/>
      Frameworks: Spring Boot, React, Node.JS<br/>
      Databases: MySQL, MongoDB<br/>
      Tools: Intellij, Eclips, Spring suite, Git, Docker, Postman, VS Code<br/>
      </div>`;

const codingHTML = `
 <h1>Coding Profiles</h1>
 <div id="codingList">
 <div id="git">
    <a href="https://github.com/avk1996" target="_blank"> GitHub </a>
  </div>
  <div id="leet">
    <a href="https://leetcode.com/kumbhara976" target="_blank">LeetCode</a>
  </div>
  <div id="hack">
    <a href="https://www.hackerrank.com/kumbhara976" target="_blank">HackerRank</a>
  </div>
  </div>
`;

const projectsHTML = `
  <h1>Projects</h1>

  <article>
        <h3>Quiz Management System</h3>

        <p>Description of your project.</p>

        <a href="#">GitHub</a>

        <a href="#">Live Demo</a>
      </article>

      <article>
        <h3>Train Reservation System</h3>

        <p>Description of your project.</p>

        <a href="#">GitHub</a>
      </article>
`;

const contactsHTML = `
 <h1>Contact</h1>
  <div id="linkList">
      <div id="gmail">
        <a href="kumbhara976@gmail.com">📧 Email </a>
      </div>
      <div id="linkedin">
        <a
          href="https://linkedin.com/in/abhishek-kumbhar-323129214"
          target="_blank"
        >
        ℹ️ LinkedIn
        </a>
      </div>
      <div id="gitLink"> 
        <a href="https://github.com/avk1996" target="_blank">
          🐙 GitHub
        </a>
      </div>
  </div>`;

const home = document.getElementById("homeLink");
const skill = document.getElementById("skillsLink");
const coding = document.getElementById("codingLink");
const project = document.getElementById("projectsLink");
const contact = document.getElementById("contactLink");

const content = document.getElementById("content");

changeContent(homeHTML);

home.addEventListener("click", (event) => {
  event.preventDefault();
  changeContent(homeHTML);
});

skill.addEventListener("click", (event) => {
  event.preventDefault();
  changeContent(skillsHTML);
});

coding.addEventListener("click", (event) => {
  event.preventDefault();
  changeContent(codingHTML);
});

project.addEventListener("click", (event) => {
  event.preventDefault();
  // content.innerHTML = projectsHTML;
  changeContent(homeHTML);
});

contact.addEventListener("click", (event) => {
  event.preventDefault();
  changeContent(contactsHTML);
});

function changeContent(html) {
  content.classList.add("fade");

  setTimeout(() => {
    content.innerHTML = html;

    content.classList.remove("fade");
  }, 300);
}
