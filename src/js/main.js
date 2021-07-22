console.log(` 
Change this message, and make sure it changes in the browser 
to verify that you're working in the right files.`)



window.addEventListener('load', function() {
    document.querySelector('.loading').classList.add('hide')
});

// let accordianButton = document.querySelector('.accordian-btn');

// for (let i = 0; i < accordianButton.length; i++){
//     accordionButton[i].addEventListener('click', function() {
//         this.classList.toggle('active');
// })
// }

let accordionButtons = document.getElementsByClassName('accordion-item__button');


for (let i = 0; i < accordionButtons.length; i++) {
    accordionButtons[i].addEventListener('click', function() {
        this.classList.toggle('active');
        let accordionContent = this.nextElementSibling;
        
        if (accordionContent.style.maxHeight) {
            accordionContent.style.maxHeight = null;
        }
         else {
            accordionContent.style.maxHeight = accordionContent.scrollHeight + "px";
        }
    });
}