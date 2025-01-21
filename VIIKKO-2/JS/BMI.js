'use strict';

let lowBmi = `If the body mass index is less than 18.5, it means excessive thinness. It can be caused by a long-term illness or a weight loss disorder, i.e. anorexia. If there is no actual illness, but the body mass index has dropped below 18.5, you should see a doctor. If the weight has dropped significantly from over 20 in a few months, it is safest to see a doctor when the body mass index approaches 19.`;

let normalBmi = `The body mass index range in which a person's health is at its best has been chosen as normal. The normal BMI range is between 18.5 and 25. If the body mass index is lower than 18.5 or higher than 25, the risk of diseases increases. The body mass index can be used from the age of 18.`;

let highBmi = `When the body mass index exceeds 25, we are overweight. The amount of excess kilos can vary greatly, from a few kilos to many tens of kilos. Therefore, it is useful to specify how much excess weight is involved.`;


const nappula = document.querySelector('.calculate');
nappula.addEventListener('click', function (evt) {

  const weight = Number(document.getElementById('weight').value);
  const height = Number(document.getElementById('height').value);

  if (!weight || !height) {
  } else {
    const result = bmiLaskuri(weight, height);
    resettiFunktio(result);
  }
});

function bmiLaskuri(weight, height) {
  let bmi = (weight / ((height * height) / 10000)).toFixed(1);
  document.querySelector('.bmi-score').textContent = bmi;

  if (bmi < 19) {
    document.querySelector('.analysis').textContent = lowBmi;
    document.querySelector('.bmi0-19').classList.add('lowBmi');
    return 'low';
  } else if (bmi > 25) {
    document.querySelector('.analysis').textContent = highBmi;
    document.querySelector('.bmi25-30').classList.add('highBmi');
    return 'high';
  } else {
    document.querySelector('.analysis').textContent = normalBmi;
    document.querySelector('.bmi19-25').classList.add('normalBmi');
    return 'normal';
  }
}

function resettiFunktio(result) {
  // täällä kannattaa resetoida tyylit
  if (result == "low") {
        document.querySelector(".bmi19-25").classList.remove("normalBmi");
        document.querySelector(".bmi25-30").classList.remove("highBmi");
    }
    else if (result == "normal") {
        document.querySelector(".bmi0-19").classList.remove("lowBmi");
        document.querySelector(".bmi25-30").classList.remove("highBmi");
    }
    else if (result == "high") {
        document.querySelector(".bmi19-25").classList.remove("normalBmi");
        document.querySelector(".bmi0-19").classList.remove("lowBmi");
    }
}