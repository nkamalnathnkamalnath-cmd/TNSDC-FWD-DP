const texts = ["Video Editor", "UI/UX Designer", "Creative Thinker"];

let index = 0;

let charIndex = 0;

let currentText = "";

let isDeleting = false;

function typeEffect() {

  currentText = texts[index];

  const typingElement = document.getElementById("typing");

  if (isDeleting) {

    typingElement.textContent = currentText.substring(0, charIndex--);

  } else {

    typingElement.textContent = currentText.substring(0, charIndex++);

  }

  if (!isDeleting && charIndex === currentText.length + 1) {

    isDeleting = true;

    setTimeout(typeEffect, 1000); // pause at full text

    return;

  } else if (isDeleting && charIndex === 0) {

    isDeleting = false;

    index = (index + 1) % texts.length;

  }

  setTimeout(typeEffect, isDeleting ? 80 : 120);

}

document.addEventListener("DOMContentLoaded", typeEffect);