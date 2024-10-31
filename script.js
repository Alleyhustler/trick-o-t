document.addEventListener("DOMContentLoaded", function () {
    const trickBtn = document.getElementById("trickBtn");
    const treatBtn = document.getElementById("treatBtn");
  
    trickBtn.addEventListener("click", function () {
      document.querySelector(".overlay").classList.add("fade-out");
      setTimeout(() => {
        window.location.href = "trick.html";
      }, 1000);
    });
  
    treatBtn.addEventListener("click", function () {
      document.querySelector(".overlay").classList.add("fade-out");
      setTimeout(() => {
        window.location.href = "treat.html";
      }, 1000);
    });
  });
  