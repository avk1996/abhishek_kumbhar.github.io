const homeHTML = `
<h1>
          Hi, I'm Abhishek!<br />
          Software Engineer
        </h1>

        <p>
          Software Engineer with 2 years of experience in Java Backend
          Development using Spring Boot. Passionate about building scalable
          applications, solving Data Structures & Algorithms, and continuously
          improving my Full Stack Development and Machine Learning skills.
        </p>

        <a href="resume/abhishek_kumbhar.pdf" target="_blank" id="resumeButton">
          ⬇ View Resume
        </a>    
`;

const skillsHTML = `
  <h1>Skills</h1>

      <h3>Languages: Java, JavaScript, C++, SQL</h3>

      <h3>Frameworks: Spring Boot, React, Node.JS</h3>

      <h3>Databases: MySQL, MongoDB</h3>

      <h3>Tools: Intellij, Eclips, Spring suite, Git, Docker, Postman, VS Code</h3>`;

const codingHTML = `
 <h1>Coding Profiles</h1>
    <a href="https://github.com/avk1996" target="_blank"> GitHub </a><br/>
    <a href="https://leetcode.com/kumbhara976" target="_blank">LeetCode</a><br/>
    <a href="https://www.hackerrank.com/kumbhara976" target="_blank">HackerRank</a><br/>
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

      <p>
        <strong>Email:</strong>

        <a href="kumbhara976@gmail.com"> kumbhara976@gmail.com </a>
      </p>

      <p>
        <strong>LinkedIn:</strong>

        <a
          href="https://linkedin.com/in/abhishek-kumbhar-323129214"
          target="_blank"
        >
          LinkedIn Profile
        </a>
      </p>

      <p>
        <strong>GitHub:</strong>

        <a href="https://github.com/avk1996" target="_blank">
          GitHub Profile
        </a>
      </p>`;

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
