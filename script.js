console.log("Portfolio Website Loaded Successfully");

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function(e) {
        const targetId = this.getAttribute("href");

        if (targetId.startsWith("#")) {
            e.preventDefault();

            document.querySelector(targetId).scrollIntoView({
                behavior: "smooth"
            });
        }
    });
});

// Contact button alert
const contactButton = document.querySelector('.hero a[href="#contact"] button');

contactButton.addEventListener("click", function() {
    alert("Scrolling to Contact Section");
});