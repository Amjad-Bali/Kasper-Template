let shuffleLi = document.querySelectorAll(".portfolio .shuffle li");
let imges = Array.from(document.querySelectorAll(".portfolio .imgs-container .box"));
/* console.log(imges) */
shuffleLi.forEach((ele) => {
  ele.addEventListener("click", removeClass);
  ele.addEventListener("click", mangeImage);
});

function removeClass() {
  shuffleLi.forEach((ele) => {
    ele.classList.remove("active");
    this.classList.add("active");
  });
}
function mangeImage() {
  imges.forEach((ele) => {
    ele.style.display = "none";
  });
  document.querySelectorAll(this.dataset.type).forEach((ele) => {
    ele.style.display = "block";
  });
  /*   console.log(this.dataset.cont); */
}
/*-----------------------------------------------------------------------------------------------------------*/
let iconsNext = document.querySelector(".landing .next");
let iconsPrevios = document.querySelector(".landing .previos");
let landing = document.querySelector(".landing");
let bulletsLi = document.querySelectorAll(".bullets li");
let bulletsArray = Array.from(bulletsLi);

const interval = setInterval(() => {
  nextImag();
}, 2500);

iconsNext.addEventListener("click", nextImag);
iconsNext.addEventListener("click", () => {
  clearInterval(interval);
});
iconsPrevios.addEventListener("click", previosImag);
iconsPrevios.addEventListener("click", () => {
  clearInterval(interval);
});

let i = 0;
let img = [];
img[0] = `url(/image/landing2.jpg)`;
img[1] = `url(/image/landing.jpg)`;
img[2] = `url(/image/subscribe.jpg)`;

/* console.log(landing) */

function nextImag() {
  if (i < img.length - 1) i++;
  else i = 0;
  /* console.log(i) */
  landing.style.backgroundImage = img[i];
  bulletsLi.forEach((ele) => {
    ele.classList.remove("active");
  });
  bulletsArray[i].classList.add("active");
}

function previosImag() {
  if (i == 0) i = img.length - 1;
  else i--;
  landing.style.backgroundImage = img[i];
  bulletsLi.forEach((ele) => {
    ele.classList.remove("active");
  });
  bulletsArray[i].classList.add("active");
}

bulletsLi.forEach((ele) => {
  ele.addEventListener("click", (ele) => {
    bulletsLi.forEach((ele) => {
      ele.classList.remove("active");
    });
    ele.currentTarget.classList.add("active");
    landing.style.backgroundImage = img[ele.currentTarget.dataset.cont];
  });
});

//------------------------------------------------------------------------------------------------------
let progress = Array.from(document.querySelectorAll(".skills .prog-holder span"));
let skills = document.querySelectorAll(".our-skills ");
let isRunProgress = true;
window.onscroll = function () {
  EnterSkills();
  EnterPrincing();
};

function EnterSkills() {
  if (window.scrollY >= skills[0].offsetTop) {
    progress.forEach((ele) => {
      let text = parseInt(ele.getAttribute("data-text"));
      let value = parseInt(ele.getAttribute("data-value"));
      if (isRunProgress) {
        ele.style.width = `${value}%`;
        let interval = setInterval(() => {
          text++;
          ele.setAttribute("data-text", `${text}%`);
          if (text >= value) {
            clearInterval(interval);
          }
        }, 15);
      }
    });
    isRunProgress = false;
  }
}

//------------------------------------------------------------------------------------------------------
let box = Array.from(document.querySelectorAll(".pricing"));
let pricing = Array.from(document.querySelectorAll(".pricing .plans .plan span"));
let isRunPrice = true;
function EnterPrincing() {
  if (window.scrollY >= box[0].offsetTop) {
    pricing.forEach((price) => {
      if (isRunPrice) {
        let count = 1;
        let value = parseInt(price.getAttribute("data-value"));
        let interval = setInterval(() => {
          price.innerText = count++;
          if (count >= value) {
            clearInterval(interval);
          }
        }, 35);
      }
    });
    isRunPrice = false;
  }
}
//------------------------------------------------------------------------------------------------------
let bullets2 = Array.from(document.querySelectorAll(".our-skills .testimonials .bullets2 li"));
let testimonials = Array.from(document.querySelectorAll(".our-skills .testimonials .wrapper .box"));

console.log(bullets2);
console.log(testimonials);

bullets2.forEach((ele, index) => {
  ele.addEventListener("click", function () {
    bullets2.forEach((ele) => {
      ele.classList.remove("active");
    });
    testimonials.forEach((ele) => {
      ele.classList.remove("visable");
    });
    console.log(testimonials[index]);
    testimonials[index].classList.add("visable");
    ele.classList.add("active");
  });
});
