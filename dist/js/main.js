"use strict";

console.log(" \nChange this message, and make sure it changes in the browser \nto verify that you're working in the right files.");
window.addEventListener('load', function () {
  document.querySelector('.loading').classList.add('hide');
});
var accordianButton = document.querySelector('.accordian-btn');

for (var i = 0; i < accordianButton.length; i++) {
  accordionButton[i].addEventListener('click', function () {
    this.classList.toggle('active');
  });
}
//# sourceMappingURL=main.js.map
