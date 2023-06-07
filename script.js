// Detecting Button Press
let drumButtons = document.querySelectorAll('.drum');

for (let i = 0; i < drumButtons.length; i++) {
  document.querySelectorAll('.drum')[i].addEventListener('click', function () {
    var buttonText = this.innerHTML;
    makeSound(buttonText);
  });
}

// Detecting Keyboard Events
document.addEventListener('keypress', function (event) {
  let eventKey = event.key;

  // To accept Small & Capital Letters
  let keyPressed = eventKey.toLowerCase();

  // Adding Animation on keypress
  let activeBTN = document.querySelector(`.${keyPressed}`);
  console.log(activeBTN);
  activeBTN.classList.add('active');

  makeSound(keyPressed);

  console.log(activeBTN);

  setTimeout(() => {
    activeBTN.classList.remove('active');
  }, 300);
});


function makeSound(key) {
  switch (key) {
    case 'tom':
    case 'w':
      let tom1 = new Audio('sounds/tom.mp3');
      tom1.play();
      break;

    case 'crash':
    case 'a':
      let tom2 = new Audio('sounds/crash.mp3');
      tom2.play();
      break;

    case 'snare':
      case 's':
      let tom3 = new Audio('sounds/snare.mp3');
      tom3.play();
      break;

    case 'kick':
      case 'd':
      let tom4 = new Audio('sounds/kick.mp3');
      tom4.play();
      break;

    case 'close':
      case 'j':
      let snare = new Audio('sounds/close.mp3');
      snare.play();
      break;

    case 'floor':
      case 'f':
      let crash = new Audio('sounds/floor.mp3');
      crash.play();
      break;

    default:
  }
}

// End JavaScript
