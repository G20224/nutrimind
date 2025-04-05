function loadPage(page) {
    fetch(page)
      .then(response => response.text())
      .then(html => {
        document.getElementById("page-content").innerHTML = html;
      })
      .catch(error => {
        console.error("Error loading page:", error);
        document.getElementById("page-content").innerHTML = "<p>Failed to load page.</p>";
      });
  }
  
  window.onload = () => {
    loadPage('myList.html'); // загружается при старте
  };
  