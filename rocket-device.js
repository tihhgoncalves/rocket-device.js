function checkScreenSize() {
  const screenSize = window.innerWidth;
  const body = document.body.classList;

  body.toggle('rocket-mobile', screenSize < 768);
  body.toggle('rocket-tablet', screenSize >= 768 && screenSize < 1024);
  body.toggle('rocket-desktop', screenSize >= 1024);
}

checkScreenSize();

window.addEventListener('resize', function() {
  checkScreenSize();
});
