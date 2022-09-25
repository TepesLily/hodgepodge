
const hole = document.querySelector(".hole");
const holeLink = document.querySelector(".hole__link");

hole.addEventListener('click', () => {
    hole.classList.add("clicked");
    holeLink.classList.add("clicked");
})

