const slider = document.querySelector(".slider");

const leftArrow = document.querySelector(".left");
const rightArrow = document.querySelector(".right");

const firstSliderBtn = document.querySelector('.buttons > .slider-btn:first-child');
const secondSliderBtn = document.querySelector('.buttons > .slider-btn:nth-child(2)');
const thirdSliderBtn = document.querySelector('.buttons > .slider-btn:last-child');

var selectedBtn = firstSliderBtn;

let currentIndex = 0;

function updateSelectedButton(newSelectedBtn) {
    selectedBtn.classList.remove('selected');
    newSelectedBtn.classList.add('selected');
    selectedBtn = newSelectedBtn;
}

firstSliderBtn.addEventListener('click', function(){
    console.log("1 clicked");
    selectedBtn.classList.remove('  selected');
    firstSliderBtn.classList.add('selected');
    selectedBtn = firstSliderBtn;

});

secondSliderBtn.addEventListener('click', function(){
    console.log("2 clicked");
    selectedBtn.classList.remove('selected');
    secondSliderBtn.classList.add('selected');
    selectedBtn = secondSliderBtn;

});

thirdSliderBtn.addEventListener('click', function(){
    console.log("3 clicked");
    selectedBtn.classList.remove('selected');
    thirdSliderBtn.classList.add('selected');
    selectedBtn = thirdSliderBtn;
    
});

rightArrow.addEventListener('click', function(){
    currentIndex = currentIndex < 2? currentIndex + 1: 0;
    let firstItem = document.querySelector(".slider section");
    slider.appendChild(firstItem);
    console.log(currentIndex);
    updateSelectedButton(selectedBtn.nextElementSibling);
});

leftArrow.addEventListener('click', function(){
    currentIndex = currentIndex > 0? currentIndex - 1: 2;
    let lastItem = document.querySelector(".slider section:last-child");
    slider.prepend(lastItem);
    console.log(currentIndex);
    updateSelectedButton(selectedBtn.previousElementSibling);
});