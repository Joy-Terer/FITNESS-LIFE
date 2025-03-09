/ Function to open sidebar menu
function openSidebar() {
    document.getElementById("sidebar").style.width = "250px"; 
    document.body.classList.add("sidebar-open"); // Prevent scrolling
}

// Function to close sidebar menu
function closeSidebar() {
    document.getElementById("sidebar").style.width = "0"; 
    document.body.classList.remove("sidebar-open"); // Restore scrolling
}

// Add event listeners for buttons
document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("menu-btn").addEventListener("click", openSidebar);
    document.getElementById("close-btn").addEventListener("click", closeSidebar);
});

// Smooth scrolling for menu links
document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll("nav a").forEach(anchor => {
        anchor.addEventListener("click", function (e) {
            e.preventDefault();
            const targetId = this.getAttribute("href").substring(1);
            const targetSection = document.getElementById(targetId);
            if (targetSection) {
                targetSection.scrollIntoView({ behavior: "smooth", block: "start" });
            }
        });
    });

    // Scroll animations - Sections fade in when scrolled into view
    const sections = document.querySelectorAll("section");
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
            }
        });
    }, { threshold: 0.2 });

    sections.forEach(section => {
        observer.observe(section);
    });

    // Image hover effect - Slight zoom on hover
    document.querySelectorAll(".product-image").forEach(image => {
        image.addEventListener("mouseover", () => {
            image.style.transform = "scale(1.1)";
            image.style.transition = "transform 0.3s ease";
        });
        image.addEventListener("mouseleave", () => {
            image.style.transform = "scale(1)";
        });
    });

    // Dynamic footer year
    document.getElementById("year").textContent = new Date().getFullYear();
});
