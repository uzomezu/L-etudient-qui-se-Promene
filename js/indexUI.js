(function () {
  const menuBtn = document.querySelector(".menu-btn");
  const overlay = document.querySelector(".overlay");
  const img = document.getElementById("img");
  const home = document.querySelector("#home");
  const bodyDoc = document.getElementById("body");
  const card = document.querySelector(".card");
  const projects = document.getElementById("projects");
  const arrowSymbol = document.querySelector(".fa-arrow-down");
  const overLayLinks = document.querySelectorAll(".overlay-Link");
  const threeScene = document.querySelector(".threeDscene");
  let opacity = 0;
  let menuOpen = false;
  let projListItems = projects.getElementsByTagName("li");
  //Open Menu Hamburger to X
  menuBtn.addEventListener("click", function () {
    if (!menuOpen) {
      menuBtn.classList.add("open");
      overlay.classList.remove("hiding");
      overlay.classList.add("show");
      menuOpen = true;
    } else {
      menuBtn.classList.remove("open");
      overlay.classList.add("hiding");
      overlay.classList.remove("show");
      menuOpen = false;
    }
  });
  //Overlay Link to Target DIV
  overLayLinks.forEach(function (button) {
    button.addEventListener("click", (e) => {
      e.preventDefault();
      menuBtn.classList.remove("open");
      overlay.classList.add("hiding");
      overlay.classList.remove("show");
      menuOpen = false;
      document.querySelector(`${button.target}`).scrollIntoView({
        behavior: "smooth",
      });
    });
  });
  let rect = projects.getBoundingClientRect();

  const topProj = rect.top;
  const bottomProj = rect.bottom;
  const y_Start = innerHeight;
  function animate() {
    requestAnimationFrame(animate);
  }
  sessionStorage.setItem("top", topProj);
  sessionStorage.setItem("bottom", bottomProj);
  console.log(topProj, bottomProj);
  window.addEventListener("scroll", function () {
    animate();
    if (scrollY < innerHeight) {
      opacity = scrollY / (innerHeight / 3);
    } else {
      opacity = 1;
    }
    img.style.opacity = `${opacity}`;

    threeScene.style.opacity = `${1 - opacity}`;

    arrowSymbol.style.opacity = `${1 - opacity}`;
    home.style.opacity = `${1 - opacity}`;
  });
  // Dark/Light UI
  // const lights = document.getElementById("lights");
  // const body = document.getElementById("body");
  // //*** NOTE TO SELF": Do something here so the UI stays the same after the page has been reloaded
  // lights.addEventListener("click", function () {
  //   if (body.classList.contains("light-mode")) {
  //     body.classList.add("dark-mode");
  //     body.classList.remove("light-mode");
  //     img.src = "KM_Logo_black.png";
  //   } else {
  //     body.classList.add("light-mode");
  //     body.classList.remove("dark-mode");
  //     img.src = "KM_Logo_white.png";
  //   }
  // });
  // //
})();
