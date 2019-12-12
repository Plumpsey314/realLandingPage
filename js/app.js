//define global variables
const navBar = document.querySelector('#navbar__list');
let navArray = ['']
const numOfSectionsOnPage = document.querySelectorAll('section').length;
// define helper Functions
function addReflection() {
  navArray[navArray.length] = 'Reflection' + navArray.length;
  navBar.innerHTML += `<li ><a href='#reflection${navArray.length-1}' id = 'anchorForReflection${navArray.length -1}' class = 'menu__link' >Reflection ${navArray.length -1}</a></li>`
}

function updateReflectionYouAreOn() {
  let idOfSectionYouAreOn = 'anchorForReflection1';
  let arrayOfYCoordinatesForReflections = [];
  for (j = 0; j < numOfSectionsOnPage; j++) {
    const sectionjYValue = document.querySelectorAll('section')[j].getBoundingClientRect().y;
    if (sectionjYValue <= 400) {
      arrayOfYCoordinatesForReflections.push(sectionjYValue);
    }
  }
  if (arrayOfYCoordinatesForReflections.length != 0) {
    idOfSectionYouAreOn = `anchorForReflection${arrayOfYCoordinatesForReflections.length}`
  }
  document.querySelectorAll('style')[0].innerHTML = `#${idOfSectionYouAreOn}{
      color: green;
    }`;
  if (document.querySelectorAll('section')[0].getBoundingClientRect().y < 100) {

    document.querySelectorAll('style')[1].innerHTML = '.page__footer {background: transparent;position: fixed;padding-right: 100px; text-align: right;width: 100%;;bottom: 0; width: 100%;z-index: 5;}';
  } else document.querySelectorAll('style')[1].innerHTML = '.footer__link{display: none;}';
}

function closeHeaderLink() {
  document.querySelectorAll('style')[2].innerHTML = '.page__header{display: none;}'
}
// allows elements to collapse
for (i = 0; i < document.getElementsByClassName("collapsible").length; i++) {
  const coll = document.getElementsByClassName("collapsible");
  coll[i].addEventListener("click", function() {
    this.classList.toggle("your-active-class");
    //let landing__container = this.nextElementSibling;
    let landing__container = this.nextElementSibling;
    landing__container.style.maxHeight ? landing__container.style.maxHeight = null : landing__container.style.maxHeight = landing__container.scrollHeight + "px";
  });
}
// adds as many reflections as sections
for (k = 0; k < numOfSectionsOnPage; k++) {
  addReflection();
};
// timeout for closing Header__link
setInterval(closeHeaderLink, 9000);
//if the page is scrolled, it is updated
document.addEventListener('scroll', function() {
  document.querySelectorAll('style')[2].innerHTML = ''
  updateReflectionYouAreOn();
});
