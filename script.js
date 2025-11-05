const skillForm = document.getElementById('skill-form');
const skillsList = document.getElementById('skills-list');

// Load skills from LocalStorage
let skills = JSON.parse(localStorage.getItem('skills')) || [];

function displaySkills() {
  skillsList.innerHTML = '';
  skills.forEach((skill, index) => {
    const skillCard = document.createElement('div');
    skillCard.classList.add('skill-card');
    skillCard.innerHTML = `
      <strong>${skill.name}</strong> - ${skill.progress}%
      <div class="progress-bar" style="width:${skill.progress}%">${skill.progress}%</div>
      <button onclick="deleteSkill(${index})">Delete</button>
    `;
    skillsList.appendChild(skillCard);
  });
}

// Add skill
skillForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const name = document.getElementById('skill-name').value;
  const progress = document.getElementById('skill-progress').value;

  skills.push({name, progress});
  localStorage.setItem('skills', JSON.stringify(skills));
  displaySkills();
  skillForm.reset();
});

// Delete skill
function deleteSkill(index) {
  skills.splice(index, 1);
  localStorage.setItem('skills', JSON.stringify(skills));
  displaySkills();
}

// Initial display
displaySkills();