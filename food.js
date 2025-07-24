const images = document.querySelectorAll('.image-collage img');

images.forEach(image => {
    image.addEventListener('mouseover', () => {
        image.style.transform = 'rotate(0deg) scale(1.1)';
        image.style.transition = 'transform 0.3s ease-in-out';
    });

    image.addEventListener('mouseout', () => {
        image.style.transform = 'rotate(45deg) scale(1)';
        image.style.transition = 'transform 0.3s ease-in-out';
    });
});

function debounce(func, wait = 20, immediate = true){
    let timeout;
    return function() {
        const context = this, args = arguments;
        const later = function(){
            timeout = null;
            if(!immediate) func.apply(context, args);
        };
        const callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) func.apply(context, args);
    };
}

const animatedElements = document.querySelectorAll('.animate-on-scroll');

function checkSlide(e){
    animatedElements.forEach(element => {
        const slideInAt = (window.scrollY + window.innerHeight) - element.offsetHeight / 2;
        const elementBottom = element.offsetTop + element.offsetHeight;
        const isHalfShown = slideInAt > element.offsetTop;
        const isNotScrolledPast = window.scrollY < elementBottom;

        if (isHalfShown && isNotScrolledPast) {
            element.classList.add('active');
        } else {
            element.classList.remove('active');
        }
    });
}

window.addEventListener('scroll', debounce(checkSlide));




const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");
const menuBtnIcon = menuBtn.querySelector("i");

menuBtn.addEventListener("click", (e) => {
    navLinks.classList.toggle("open");

    const isOpen = navLinks.classList.contains("open");
    menuBtnIcon.setAttribute("class", isOpen ? "ri-close-line" : "fa-solid fa-bars")
});

navLinks.addEventListener("click", (e) => {
    navLinks.classList.remove("open");
    menuBtnIcon.setAttribute("class", "fa-solid fa-bars");
})


window.onload = function () {
  // Check if the user has visited before
  if (!localStorage.getItem("hasVisited")) {
    alert("Hi There, Welcome to Cherix Eat 😉");
    localStorage.setItem("hasVisited", "true"); // Mark that the user has visited
  }
};
