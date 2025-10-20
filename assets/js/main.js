function updateProfileInfo(profileData) {
    const photo = document.getElementById('profile-photo');
    photo.src = profileData.photo;
    photo.alt = "Foto de " + profileData.name;
    const name = document.getElementById('profile-name');
    name.textContent = profileData.name;
    const job = document.getElementById('profile-job');
    job.textContent = profileData.job;
    const location = document.getElementById('profile-location')
    location.textContent = profileData.location;
    const phone = document.getElementById('profile-phone');
    phone.textContent = profileData.phone;
    phone.href = "tel:" + profileData.phone;
    const email = document.getElementById('profile-email');
    email.textContent = profileData.email;
    email.href = "mailto:" + profileData.email;
    const linkedin = document.getElementById('profile-linkedin');
    linkedin.textContent = profileData.linkedin.username;
    linkedin.href = profileData.linkedin.url;
}

function updateHardSkills(profileData) {
    const hardSkills = document.getElementById('profile-hard-skills');
    hardSkills.innerHTML = profileData.skills.hardSkills.map(skill => `<li><img src="${skill.logo}" alt="${skill.name}" title="${skill.name}"></li>
`).join('');
}

function updateSoftSkills(profileData) {
    const softSkills = document.getElementById('profile-soft-skills');
    softSkills.innerHTML = profileData.skills.softSkills.map(skill => `<li>${skill}</li>`).join('');
}

function updateLanguages(profileData) {
    const languages = document.getElementById('profile-languages');
    languages.innerHTML = profileData.languages.map(lang => `<li>${lang}</li>`).join('');
}

function updatePortfolioProjects(profileData) {
    const projects = document.getElementById('profile-portfolio-projects');
    projects.innerHTML = profileData.portfolio.map(project => `<li><h3 class="title ${project.github ? 'github' : ''}">${project.name}</h3><a href="${project.url}" target="_blank">${project.github ? 'Ver no GitHub' : 'Ver Projeto'}</a></li>`).join('');
}

function updateExperience(profileData) {
    const experience = document.getElementById('profile-experience');
    experience.innerHTML = profileData.professionalExperience.map(exp => `
                    <li>
                        <h3 class="title">${exp.name}</h3>
                        <p class="period">${exp.period}</p>
                        <p>
                            ${exp.description}
                        </p>
                    </li>`).join('');
}

function updateCertifications(profileData) {
    const certifications_dio = document.getElementById('profile-certifications-dio');
    certifications_dio.innerHTML = profileData.certifications.filter(cert => cert.type === 'dio').map(cert => `<li><a href="${cert.url}" target="_blank"><img src="${cert.logo}" alt="${cert.name}"></a></li>`).join('');
    const certifications_others = document.getElementById('profile-certifications-others');
    certifications_others.innerHTML = profileData.certifications.filter(cert => cert.type === 'other').map(cert => `<li><a href="${cert.url}" target="_blank"><img src="${cert.logo}" alt="${cert.name}"></a></li>`).join('');
}

function updateCourses(profileData) {
    const courses = document.getElementById('profile-courses');
    courses.innerHTML = profileData.courses.map(course => `<li><h3 class="title">${course.institution}</h3><p class="description">${course.description}</p></li>`).join('');
}

(async () => {
    const profileData = await fetchProfileData();
    updateProfileInfo(profileData);
    updateHardSkills(profileData);
    updateSoftSkills(profileData);
    updateLanguages(profileData);
    updatePortfolioProjects(profileData);
    updateExperience(profileData);
    updateCertifications(profileData);
    updateCourses(profileData);
})();