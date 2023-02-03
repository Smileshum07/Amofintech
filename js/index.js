

// active class of menu items onscroll

window.addEventListener('scroll', () => {
    let scrollDistance = window.scrollY;
    console.log(scrollDistance);

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


//anchor scroll

const anchors = document.querySelectorAll('.nav-link-sidebar[href*="#"]');
console.log(anchors);

for (let anchore of anchors) {
    anchore.addEventListener("touch", function (event) {
        event.preventDefault();
        const blockID = anchore.getAttribute('href');
        console.log(blockID);
        document.querySelector('' + blockID).scrollIntoView({
            behavior: "smooth",
            block: "end"
        })
    })
}

