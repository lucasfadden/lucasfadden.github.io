// Alert on page load (very 2000s-style)
window.onload = function() {
    alert("Welcome to Lucas Fadden's Portfolio Website!");
};

// Smooth scroll to sections
document.querySelectorAll("nav a").forEach(anchor => {
    anchor.addEventListener("click", function(e) {
        e.preventDefault();
        const targetId = this.getAttribute("href").substring(1);
        const section = document.getElementById(targetId);
        section.scrollIntoView({ behavior: "smooth" });
    });
});

// Highlight nav link based on scroll position
window.addEventListener("scroll", function () {
    const sections = document.querySelectorAll("section");
    const scrollPos = window.scrollY + 80;

    sections.forEach(section => {
        const id = section.getAttribute("id");
        const navLink = document.querySelector(`nav a[href="#${id}"]`);

        if (
            scrollPos >= section.offsetTop &&
            scrollPos < section.offsetTop + section.offsetHeight
        ) {
            navLink.style.backgroundColor = "#888";
            navLink.style.color = "#fff";
        } else {
            navLink.style.backgroundColor = "";
            navLink.style.color = "#000";
        }
    });
});

// Example email validation (optional enhancement for a form)
function validateEmail(email) {
    const pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    return pattern.test(email);
}
