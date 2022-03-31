// Sounds
const tick = new Audio("sounds/tick.mp3");
const tock = new Audio("sounds/tock.mp3");
const snare = new Audio("sounds/snare-drum.mp3");
const kick = new Audio("sounds/kick-drum.mp3");
const hi = new Audio("sounds/hi-hat.mp3");
//////
let count = 0;
////////   Queries
let counter = document.querySelector("#counter");
let Metronome = document.querySelector("#Metronome");
let snaredrum = document.querySelector("#Snaredrum");
let kick_drum = document.querySelector("#Kick_drum");
let hi_Hat = document.querySelector("#Hi_Hat");

// This function is called every 600ms
function update() {
  count++;
  if (Metronome.checked === true) {
    //     // Play the 'tick' and 'tock' sound

    if (count % 4 === 0) {
      tock.play();
    } else {
      tick.play();
    }
    counter.innerText = count;
    if (count >= 4) {
      count = 0;
    }
  } else if (snaredrum.checked === true) {
    snare.play();
    counter.innerText = count;
    if (count >= 4) {
      count = 0;
    }
  } else if (kick_drum.checked === true) {
    kick.play();
    counter.innerText = count;
    if (count >= 4) {
      count = 0;
    }
  } else if (hi_Hat.checked === true) {
    hi.play();
    counter.innerText = count;
    if (count >= 4) {
      count = 0;
    }
  }
}

// This function sets up update() to be called every 600ms
function setupUpdate() {
  setInterval(update, 600);
}

// Call setupUpdate() once after 300ms
setTimeout(setupUpdate, 300);
