// sidebar.js

// Get current page filename, e.g., "cryptocurrency.html"
const currentPage = window.location.pathname.split("/").pop();

// Find all sidebar links
document.querySelectorAll("#sidebar ul li a").forEach(link => {
  // Remove any existing active class
  link.classList.remove("active");

  // If the link href matches the current page, add active class
  if (link.getAttribute("href") === currentPage) {
    link.classList.add("active");
  }
});
