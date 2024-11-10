var hideButton = document.getElementById('toggleSkillsBtn');
var skills = document.getElementById('Skills');
hideButton.addEventListener('click', function () {
    if (skills.style.display === 'none') {
        skills.style.display = 'block';
        hideButton.textContent = 'Hide Skills';
    }
    else {
        skills.style.display = 'none';
        hideButton.textContent = 'Show Skills';
    }
});
