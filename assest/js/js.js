const navbar = document.querySelector(".navbar")
function changeBackground() {
    if (window.scrollY !== 0 ) {
        navbar.style.backgroundColor = "#000000ad";
        console.log("gg")

    } else {
        navbar.style.backgroundColor = null
    }
}
window.addEventListener("scroll", changeBackground);

const secations = document.querySelectorAll("section");
const li = document.querySelectorAll(".navbar ul li a");
window.addEventListener('scroll', () => {
    secations.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop;
        let height = sec.offsetHeight;

        if (top >= offset && top < offset + height) {

            let id = sec.getAttribute('id');
            li.forEach(links => {
                let link = links.getAttribute('href');
                links.classList.remove('active');
                if (link.includes(id)) {
                    links.classList.add('active');
                }
            });
        }
    });
});
const list = document.querySelector(".list-down");
const items = document.querySelector(".navbar .items");
const close = document.querySelector("i");
const home = document.querySelector(".hero")
list.addEventListener('click' , () => {
    items.classList.add("flex-items");
    console.log(items);
})
close.addEventListener("click" , () => {
    console.log("hhhh");
    items.classList.remove("flex-items");
})