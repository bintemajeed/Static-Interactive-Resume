
const hideButton = document.getElementById('toggleSkillsBtn') as HTMLButtonElement;
const skills = document.getElementById('Skills') as HTMLElement;

hideButton.addEventListener('click', () => {
    if (skills.style.display === 'none') {
        
        skills.style.display = 'block';
        hideButton.textContent = 'Hide Skills';
    } else{
        skills.style.display = 'none';
        hideButton.textContent = 'Show Skills';
    }
});
