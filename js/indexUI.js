(function () {
  const menuBtn = document.querySelector(".menu-btn");
  const overlay = document.querySelector(".overlay");
  const img = document.getElementById("img");
  const home = document.querySelector("#home");
  const aLinks = document.querySelectorAll("a");
  const projects = document.getElementById("projects");
  const arrowSymbol = document.querySelector(".fa-arrow-down");
  const overLayLinks = document.querySelectorAll(".overlay-Link");
  const threeScene = document.querySelector(".threeDscene");
  let opacity = 0;
  let menuOpen = false;
  let projListItems = projects.getElementsByTagName("li");
  //SFX for links and clicks
  console.log(projects.querySelectorAll("a"));
  aLinks.forEach(function (link) {
    link.addEventListener("mouseover", () => {
      if (
        !link.classList.contains("social") &&
        !link.classList.contains("overlay-Link")
      ) {
        let snd = new Audio("../sounds/spacey-cricket-click.wav");
        snd.play();
      } else if (link.classList.contains("overlay-Link")) {
        let snd = new Audio("../sounds/pop-click.wav");
        snd.play();
      }
      console.log(snd);
    });
    link.addEventListener("click", () => {
      if (!link.classList.contains("social")) {
        let audio = new Audio("../sounds/button-confirm-spacey.wav");
        audio.play();
        console.log(audio);
      }
    });
  });
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
  function animate() {
    requestAnimationFrame(animate);
  }
  window.addEventListener("scroll", function () {
    if (scrollY < innerHeight) {
      opacity = (scrollY / innerHeight) * 1.2;
    } else {
      opacity = 1;
    }
    img.style.opacity = `${opacity}`;

    threeScene.style.opacity = `${1 - opacity}`;

    arrowSymbol.style.opacity = `${1 - opacity}`;
    home.style.opacity = `${1 - opacity}`;
  });

  //Form Submission
  const form = document.getElementById("myForm");
  // form.addEventListener("onsubmit", ()=>{

  // })
})();
