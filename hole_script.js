
const hole = document.querySelector(".hole");
const holeLink = document.querySelector(".hole__link");
const starField = document.querySelector(".star_field");

hole.addEventListener('click', () => {
    hole.classList.add("clicked");
    holeLink.classList.add("clicked");
    starField.classList.add("clicked");

})

