(function () {
  const menuBtn = document.querySelector(".menu-btn");
  const overlay = document.querySelector(".overlay");
  const img = document.getElementById("img");
  const home = document.querySelector("#home");
  const card = document.querySelector(".card");
  const projects = document.getElementById("projects");
  const arrowSymbol = document.querySelector(".fa-arrow-down");
  const overLayLinks = document.querySelectorAll(".overlay-Link");
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
  // Scroll Animations
  // helper function to find current position of window
  // isElementInViewport = function (el) {
  //   let rect = el.getBoundingClientRect();
  //   return (
  //     (rect.top <= 0 && rect.bottom >= 0) ||
  //     (rect.bottom >=
  //       (window.innerHeight || document.documentElement.clientHeight) &&
  //       rect.top <=
  //         (window.innerHeight || document.documentElement.clientHeight)) ||
  //     (rect.top >= 0 &&
  //       rect.bottom <=
  //         (window.innerHeight || document.documentElement.clientHeight))
  //   );
  // };
  // const scroll = requestAnimationFrame;
  // function loop() {
  //   projListItems.forEach(function (element) {
  //     if (isElementInViewport(element)) {
  //       element.classList.add("is-visible");
  //     } else {
  //       element.classList.remove("is-visible");
  //     }
  //   });

  //   scroll(loop);
  // }
  let rect = projects.getBoundingClientRect();
  // function isElementInViewport(el) {
  //   // special bonus for those using jQuery
  //   if (typeof jQuery === "function" && el instanceof jQuery) {
  //     el = el[0];
  //   }
  //   var rect = el.getBoundingClientRect();
  //   return (
  //     (rect.top <= 0 && rect.bottom >= 0) ||
  //     (rect.bottom >=
  //       (window.innerHeight || document.documentElement.clientHeight) &&
  //       rect.top <=
  //         (window.innerHeight || document.documentElement.clientHeight)) ||
  //     (rect.top >= 0 &&
  //       rect.bottom <=
  //         (window.innerHeight || document.documentElement.clientHeight))
  //   );
  // }

  const topProj = rect.top;
  const bottomProj = rect.bottom;
  const y_Start = innerHeight;
  function animate() {
    requestAnimationFrame(animate);
  }
  sessionStorage.setItem("top", topProj);
  sessionStorage.setItem("bottom", bottomProj);
  // function loop() {
  //   projListItems.forEach(function (element) {
  //     if (isElementInViewport(element)) {
  //       console.log("in Da Projectz");
  //     } else {
  //       console.log("out the projects");
  //     }
  //   });
  //   requestAnimationFrame(loop);
  // }
  console.log(topProj, bottomProj);
  window.addEventListener("scroll", function () {
    let y = scrollY + y_Start;
    animate();
    let top_Of_Div = sessionStorage.getItem("top");
    let bottom_Of_Div = sessionStorage.getItem("bottom");
    if (y > top_Of_Div && y < bottom_Of_Div) {
      console.log("we in the projects", scrollY);
      for (i = 0; i < projListItems.length; i++) {
        projListItems[i].classList.add("ripple");
        projListItems[i].style.animationDelay = `${
          i / projListItems.length + 0.24
        }s`;
      }
    }
    if (scrollY < innerHeight) {
      opacity = scrollY / (innerHeight / 3);
    } else {
      opacity = 1;
    }
    img.style.opacity = `${opacity}`;
    arrowSymbol.style.opacity = `${1 - opacity}`;
    home.style.opacity = `${1 - opacity}`;
    // console.log(top_Of_Div, bottom_Of_Div);
  });
  // Dark/Light UI
  const lights = document.getElementById("lights");
  const body = document.getElementById("body");
  //*** NOTE TO SELF": Do something here so the UI stays the same after the page has been reloaded
  lights.addEventListener("click", function () {
    if (body.classList.contains("light-mode")) {
      body.classList.add("dark-mode");
      body.classList.remove("light-mode");
      img.src = "KM_Logo_black.png";
    } else {
      body.classList.add("light-mode");
      body.classList.remove("dark-mode");
      img.src = "KM_Logo_white.png";
    }
  });
  //
})();
