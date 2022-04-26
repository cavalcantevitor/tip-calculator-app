"use strict";

const tipBtn = document.querySelectorAll(".tip");
const customBtn = document.querySelector(".custom--btn");
const resetBtn = document.querySelector(".reset--btn");

const tip = document.getElementById("tip--only");
const total = document.getElementById("total");

let bill, numberOfPeople;

for (let i = 0; i < tipBtn.length; i++) {
  tipBtn[i].addEventListener("click", function () {
    bill = Number(document.querySelector(".bill").value);
    numberOfPeople = Number(
      document.querySelector(".number--of--people").value
    );

    if (numberOfPeople === 0) {
      alert("Please inform how many people will pay the bill");
    } else {
      tip.textContent = `$${
        Number(tipBtn[i].value * bill) / 100 / numberOfPeople
      }`;
      total.textContent = `$${
        Number(tipBtn[i].value * bill) / 100 / numberOfPeople +
        bill / numberOfPeople
      }`;
    }
  });
}

customBtn.addEventListener("click", function () {
  bill = Number(document.querySelector(".bill").value);
  numberOfPeople = Number(document.querySelector(".number--of--people").value);

  const customTip = prompt("What is the % that you want the tip to be?");

  if (numberOfPeople === 0) {
    alert("Please inform how many people will pay the bill");
  } else {
    tip.textContent = Number(customTip * bill) / 100 / numberOfPeople;
    total.textContent = Number(tip.textContent) + bill / numberOfPeople;
  }
});

resetBtn.addEventListener("click", function () {
  document.querySelector(".bill").value = "";
  document.querySelector(".number--of--people").value = "";
  tip.textContent = "$0.00";
  total.textContent = "$0.00";
});
