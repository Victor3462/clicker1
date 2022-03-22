let clickCounter = document.querySelector(".clickCounter");
let clickerButton = document.querySelector(".clicker");
let adderButton = document.querySelector(".adder");
let doubleIncomeButton = document.querySelector(".doubleIncome");
let tinyUpgradeButton = document.querySelector(".tinyUpgrade");
let ClickerImg = document.querySelector(".ClickerImg");
let clicked = 0;
let adder = 1;
let doubleIncome = 1;
let tinyUpgrade = 1;

adderButton.addEventListener("click", function () {
  if (clicked >= 100) {
    clicked -= 100;
    adder++;
    clickCounter.innerHTML = clicked;
  }
});

tinyUpgradeButton.addEventListener("click", function () {
if (clicked >= 1000){
  clicked -= 1000;
  adder = adder + 10;
  clickCounter.innerHTML = clicked;
  }
});

doubleIncomeButton.addEventListener("click", function() {
  if (clicked >= 100000){
    clicked -= 100000;
    adder = adder * 2;
    clickCounter.innerHTML = clicked;
  }
});

clickerButton.addEventListener("click", handleClick);
function handleClick() {
  clicked += adder;
  clickCounter.innerHTML = clicked;
  if (clicked > 100 && clicked < 200) {
    ClickerImg.setAttribute("src", "havrekaka.jfif");
  } else if (clicked > 200 && clicked < 700) {
    ClickerImg.setAttribute("src", "chavrekaka.jfif");
  } else if (clicked > 700 && clicked < 10000) {
    ClickerImg.setAttribute("src", "banankaka.jpg");
  } else if (clicked > 10000 && clicked < 40000) {
    ClickerImg.setAttribute("src", "shack.jfif");
  } else if (clicked > 40000 && clicked < 100000) {
    ClickerImg.setAttribute("src", "drömmar.jfif");
  } else if (clicked > 100000 && clicked < 1000000) {
    ClickerImg.setAttribute("src", "hallongrotta.jpeg");
  } else if (clicked > 1000000 && clicked < 3000000) {
    ClickerImg.setAttribute("src", "cookiefactory.jpg");
  }
  console.log(clicked);
}