 const toggleBtn = document.getElementById('toggle-Btn');[0]
  const navLinks = document.getElementById('nav-links');[0]

  toggleBtn.addEventListener('click', () => {
    navLinks.classList.toggle('active');
  });