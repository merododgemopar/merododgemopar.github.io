console.log("script.js is connected!");

const skillPills = document.querySelectorAll(".skill-pill");

skillPills.forEach(function (pill) {
  pill.addEventListener("click", function () {
    const detail = pill.querySelector(".skill-detail");
    detail.style.display = "block";
  });
});