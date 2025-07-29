document.addEventListener('DOMContentLoaded', () => {  
  const logoLink = document.querySelector('.site-title');
  if (logoLink) {
    logoLink.setAttribute('href', 'https://www.nkkswitches.com');
    logoLink.setAttribute('target', '_blank');
    logoLink.setAttribute('rel', 'noopener');
  }  

  document.querySelectorAll('a[href^="http"]').forEach(link => {
    if (!link.href.includes(window.location.hostname)) {
      link.setAttribute('target', '_blank');
      link.setAttribute('rel', 'noopener noreferrer');
    }
  });  
});
