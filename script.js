
function toggleDetails(companyId) {
    var details = document.getElementById(companyId);
    details.style.display = details.style.display === 'none' ? 'block' : 'none';
}


const savedTheme = localStorage.getItem('theme');
if (savedTheme) {
    document.body.classList.add(savedTheme);
} else {
    
    document.body.classList.add('light-mode');
}

// Toggle between dark and light mode
function toggleDarkMode() {
    const body = document.body;
    if (body.classList.contains('dark-mode')) {
        body.classList.remove('dark-mode');
        body.classList.add('light-mode');
        localStorage.setItem('theme', 'light-mode');
    } else {
        body.classList.remove('light-mode');
        body.classList.add('dark-mode');
        localStorage.setItem('theme', 'dark-mode');
    }
}

