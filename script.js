const pics = document.querySelectorAll(".pic");
var counter = 0;

pics.forEach((pic, ind) => {
  pic.style.left = `${ind * 100}%`;
});