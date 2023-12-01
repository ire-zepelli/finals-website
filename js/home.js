const slider = document.querySelector(".slider");

const leftArrow = document.querySelector(".left");
const rightArrow = document.querySelector(".right");

const firstSliderBtn = document.querySelector(
  ".buttons > .slider-btn:first-child"
);
const secondSliderBtn = document.querySelector(
  ".buttons > .slider-btn:nth-child(2)"
);
const thirdSliderBtn = document.querySelector(
  ".buttons > .slider-btn:last-child"
);

var selectedBtn = firstSliderBtn;

var currentIndex = 0;

function updateSelectedButton(newSelectedBtn) {
  selectedBtn.classList.remove("selected");
  if (currentIndex === 3) {
    let firstButton = document.querySelector(
      ".buttons > .slider-btn:first-child"
    );
    firstButton.classList.add("selected");
    selectedBtn = firstButton;
  } else if (currentIndex === -1) {
    let lastButton = document.querySelector(
      ".buttons > .slider-btn:last-child"
    );
    lastButton.classList.add("selected");
    selectedBtn = lastButton;
  } else {
    newSelectedBtn.classList.add("selected");
    selectedBtn = newSelectedBtn;
  }
}

firstSliderBtn.addEventListener("click", function () {
  console.log("1 clicked");
  slider.style.opacity = "0";
  selectedBtn.classList.remove("selected");
  firstSliderBtn.classList.add("selected");
  selectedBtn = firstSliderBtn;
  currentIndex = 0;
  setTimeout(function () {
    slider.innerHTML = `
                    <section>
                    <img class="featured-img" src="img/featured-sectiion/featured-1.jpg" alt="featured-img"/>
                    </section>
                    <section>
                   <img class="featured-img" src="img/featured-sectiion/featured-2.jpg" alt="featured-img"/>
                   </section>
                   <section> 
                   <img class="featured-img" src="img/featured-sectiion/featured-3.jpg" alt="featured-img"/>
                   </section>
                     `;
    slider.style.opacity = "1";
  }, 150);
});

secondSliderBtn.addEventListener("click", function () {
  console.log("2 clicked");
  slider.style.opacity = "0";
  selectedBtn.classList.remove("selected");
  secondSliderBtn.classList.add("selected");
  selectedBtn = secondSliderBtn;
  currentIndex = 1;
  setTimeout(function () {
    slider.style.opacity = "1";
    slider.innerHTML = `
                    <section>
                   <img class="featured-img" src="img/featured-sectiion/featured-2.jpg" alt="featured-img"/>
                   </section>
                   <section> 
                   <img class="featured-img" src="img/featured-sectiion/featured-3.jpg" alt="featured-img"/>
                   </section>
                   <section>
                    <img class="featured-img" src="img/featured-sectiion/featured-1.jpg" alt="featured-img"/>
                    </section>
                     `;
  }, 150);
});

thirdSliderBtn.addEventListener("click", function () {
  console.log("3 clicked");
  slider.style.opacity = "0";
  selectedBtn.classList.remove("selected");
  thirdSliderBtn.classList.add("selected");
  selectedBtn = thirdSliderBtn;
  currentIndex = 2;
  setTimeout(function () {
    slider.innerHTML = `
    <section> 
    <img class="featured-img" src="img/featured-sectiion/featured-3.jpg" alt="featured-img"/>
    </section>
    <section>
     <img class="featured-img" src="img/featured-sectiion/featured-1.jpg" alt="featured-img"/>
     </section>
     <section>
    <img class="featured-img" src="img/featured-sectiion/featured-2.jpg" alt="featured-img"/>
    </section>
      `;
    slider.style.opacity = "1";
  }, 150);
});

rightArrow.addEventListener("click", function () {
  currentIndex++;
  slider.style.opacity = "0";
  console.log(currentIndex);
  setTimeout(function () {
    let firstItem = document.querySelector(".slider section");
    slider.appendChild(firstItem);
    slider.style.opacity = "1";
  }, 150);
  updateSelectedButton(selectedBtn.nextElementSibling);
  currentIndex = currentIndex > 2 ? 0 : currentIndex;
});

leftArrow.addEventListener("click", function () {
  currentIndex--;
  slider.style.opacity = "0";
  setTimeout(function () {
    let lastItem = document.querySelector(".slider section:last-child");
    slider.prepend(lastItem);
    slider.style.opacity = "1";
  }, 150);

  console.log(currentIndex);
  updateSelectedButton(selectedBtn.previousElementSibling);
  currentIndex = currentIndex < 0 ? 2 : currentIndex;
});
