'use strict';

const button = document.querySelector('#button');

const jokeTeller = async function () {
  try {
    const response = await fetch('https://v2.jokeapi.dev/joke/Any');
    const data = await response.json();
    const jokeSetup = new SpeechSynthesisUtterance(data?.setup ?? data.joke);
    const jokeDelivery = new SpeechSynthesisUtterance(data?.delivery);

    speechSynthesis.speak(jokeSetup);
    speechSynthesis.speak(jokeDelivery);
  } catch (error) {
    console.error(error);
  }
};

button.addEventListener('click', jokeTeller);
