document.querySelector(".btn-more").addEventListener("click", () => {
    document.querySelector(".education").scrollIntoView({
        behavior: "smooth"
    });
});

const reveals = document.querySelectorAll(".reveal");

function revealOnScroll() {
    reveals.forEach(section => {
        const top = section.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        if (top < windowHeight - 100) {
            section.classList.add("active");
        }
    });
}

window.addEventListener("scroll", revealOnScroll);

/* ✅ THIS FIXES THE BLANK PAGE */
window.addEventListener("load", revealOnScroll);
