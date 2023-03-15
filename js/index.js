// active class of menu items onscroll

window.addEventListener('scroll', () => {
    let scrollDistance = window.scrollY;
    document.querySelectorAll('section').forEach((el, i) => {
        if (el.offsetTop - document.querySelector('nav').clientHeight <= scrollDistance) {
            document.querySelectorAll('.nav-link').forEach((el) => {
                if (el.classList.contains('active')) {
                    el.classList.remove('active');
                }
            });
            document.querySelectorAll('.nav-item')[i].querySelector('.nav-link').classList.add('active');
        }
    })
});

//animate underline

const animations = document.querySelectorAll('.animation');
console.log(animations);
window.addEventListener('scroll', onAnimation);
onAnimation();

function onAnimation() {
    const triggerBottom = window.innerHeight / 4 * 4;
    animations.forEach(animation => {
        const animTop = animation.getBoundingClientRect().top;

        if (animTop < triggerBottom) {
            animation.classList.add('active');
        } else {
            animation.classList.remove('active');
        }
    })
}



//anchor scroll

const anchors = document.querySelectorAll('.nav-link-sidebar[href*="#"]');
for (let anchore of anchors) {
    anchore.addEventListener("click", function (event) {
        event.preventDefault();
        const blockID = anchore.getAttribute('href');
        
        document.querySelector('' + blockID).scrollIntoView({
            behavior: "smooth",
            block: "end"
        })
    })
}

//close the offcanvas

const offcanvas = document.querySelector('.offcanvas')
const links = document.querySelectorAll('.nav-link-sidebar');
links.forEach((link) => { link.addEventListener("click", closeOnClick); });
function closeOnClick() {
    offcanvas.classList.remove('show');
    const backdrops = document.querySelectorAll('.offcanvas-backdrop');
    backdrops.forEach(backdrop => backdrop.classList.remove('show'));
}


