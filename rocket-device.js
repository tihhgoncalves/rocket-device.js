
function checkScreenSize() {
  let screenSize = window.innerWidth;

  if (screenSize < 768) {
    document.body.classList.remove('rocket-tablet');
    document.body.classList.remove('rocket-desktop');
    document.body.classList.add('rocket-mobile');
  } else if (screenSize >= 768 && screenSize < 1024) {
    document.body.classList.remove('rocket-mobile');
    document.body.classList.remove('rocket-desktop');
    document.body.classList.add('rocket-tablet');
  } else {
    document.body.classList.remove('rocket-mobile');
    document.body.classList.remove('rocket-tablet');
    document.body.classList.add('rocket-desktop');
  }
}

checkScreenSize();

window.addEventListener('resize', function() {
  checkScreenSize();
});
