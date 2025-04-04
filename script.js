document.addEventListener("DOMContentLoaded", () => {
    const accordionHeaders = document.querySelectorAll(".accordion-header");
  
    accordionHeaders.forEach(header => {
      header.addEventListener("click", () => {
        const tabId = header.getAttribute("data-tab");
        const content = document.getElementById(`content-${tabId}`);
  
        // Toggle active state
        if (content.classList.contains("active")) {
          content.classList.remove("active"); // Collapse the tab
          header.classList.remove("active");
        } else {
          // Collapse all other tabs first
          document.querySelectorAll(".accordion-content").forEach(content => {
            content.classList.remove("active");
            document.querySelectorAll(".accordion-header").forEach(header => {
                header.classList.remove("active");
              });
          });
          content.classList.add("active"); 
          header.classList.add("active");
        }
      });
    });
  });
  