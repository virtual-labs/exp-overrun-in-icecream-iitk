// Ice Cream Experiment Step-wise Control

let step = 0;
let freezer = document.querySelector("#freezer");
let freezerOpen = document.querySelector("#freezer_open");
let mixCup = document.querySelector("#mix-cup");
let cupIceCream = document.querySelector("#cup-icecream");
let popup = document.querySelector("#popup");
let popupMessage = document.querySelector("#popup-message");
let overrunResult = document.querySelector("#overrun-result");
let instructionText = document.querySelector("#text");

// Voice setup
let msg = new SpeechSynthesisUtterance();
msg.lang = 'en-US';

function speak(text) {
  msg.text = text;
  window.speechSynthesis.speak(msg);
}

function beginExperiment() {
  step = 1;
  instructionText.innerText = "Step 1: Click the freezer to start sterilization.";
  speak("Step 1: Click the freezer to start sterilization.");
}

function startSterilization() {
  if (step === 1) {
    popup.style.visibility = "visible";
    popupMessage.innerText = "Sterilizing the freezer...";
    speak("Sterilizing the freezer with hot water or chlorine.");

    setTimeout(() => {
      popup.style.visibility = "hidden";
      freezer.style.display = "none";
      freezerOpen.style.display = "block";
      mixCup.style.display = "block";
      instructionText.innerText = "Step 2: Pour the ice cream mix.";
      speak("Step 2: Pour the ice cream mix.");
      step = 2;
    }, 3000);
  }
}

function pourMix() {
  if (step === 2) {
    mixCup.style.top = "30%";
    popup.style.visibility = "visible";
    popupMessage.innerText = "Pouring mix...";
    speak("Pouring the ice cream mix into the freezer.");

    setTimeout(() => {
      popup.style.visibility = "hidden";
      mixCup.style.display = "none";
      instructionText.innerText = "Step 3: Freezing process started. Cooling to 7°C...";
      speak("Step 3: Freezing process started. Cooling to seven degrees Celsius.");
      startFreezing();
    }, 3000);
  }
}

function startFreezing() {
  let temp = 20;
  let coolInterval = setInterval(() => {
    temp--;
    if (temp <= 7) {
      clearInterval(coolInterval);
      popup.style.visibility = "visible";
      popupMessage.innerText = "Freezing complete. Drawing ice cream...";
      speak("Freezing complete. Drawing the frozen ice cream.");

      setTimeout(() => {
        popup.style.visibility = "hidden";
        cupIceCream.style.display = "block";
        instructionText.innerText = "Step 4: Ice cream is ready. Calculating overrun...";
        speak("Step 4: Ice cream is ready. Calculating overrun.");
        calculateOverrun();
      }, 2000);
    }
  }, 500);
}

function calculateOverrun() {
  let mixWeight = 150; // g
  let iceCreamWeight = 100; // g
  let overrun = ((mixWeight - iceCreamWeight) * 100 / iceCreamWeight).toFixed(1);
  overrunResult.innerText = overrun;
  speak(`Overrun is ${overrun} percent. Simulation complete.`);
  instructionText.innerText = `Overrun: ${overrun}% - Simulation Complete!`;
}
