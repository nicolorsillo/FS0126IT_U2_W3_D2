const inputField = document.getElementById("user-name");
const display = document.getElementById("display-name");
const welcome = document.getElementsByClassName("user-welcome");

const welcomeDisplay = () => {
  for (i = 0; i < welcome.length; i++) {
    if (welcome[i].classList.contains("d-none")) {
      welcome[i].classList.replace("d-none", "d-flex");
    } else {
      welcome[i].classList.replace("d-flex", "d-none");
    }
  }
  if (title.innerText === "Registrazione Utente") {
    title.innerText = "Utente Registrato";
  } else {
    title.innerText = "Registrazione Utente";
  }
};

const updateDisplay = () => {
  const savedName = localStorage.getItem("userName");
  const title = document.getElementById("title");
  if (savedName) {
    display.innerText = savedName;
  }
};

const saveName = () => {
  const name = inputField.value.trim();
  if (name !== "") {
    localStorage.setItem("userName", name);
    updateDisplay();
    inputField.value = "";
    welcomeDisplay();
  }
};

const removeName = () => {
  localStorage.removeItem("userName");
  updateDisplay();
  welcomeDisplay();
};

const timerDisplay = document.getElementById("timer");

let seconds = sessionStorage.getItem("sessionTimer")
  ? parseInt(sessionStorage.getItem("sessionTimer"))
  : 0;

timerDisplay.innerText = seconds;

setInterval(() => {
  seconds++;
  timerDisplay.innerText = seconds;
  sessionStorage.setItem("sessionTimer", seconds);
}, 1000);
