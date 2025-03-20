const $ = (selector) => {
  return document.querySelector(selector);
};

const hour = $(".hour");
const colon = $(".colon");
const min = $(".min");
const sec = $(".sec");
const week = $(".week");
let showColon = true;

function update() {
  showColon = !showColon;
  const now = new Date();

  if (showColon) {
    colon.classList.add(".invisible");
  } else {
    colon.classList.remove(".invisible");
  }
  hour.textContent = String(now.getHours()).padStart(2, "0");
  min.textContent = String(now.getMinutes()).padStart(2, "0");
  sec.textContent = String(now.getSeconds()).padStart(2, "0");

  Array.from(week.children).forEach((element) => {
    element.classList.remove("active");
  });
  week.children[now.getDay()].classList.add("active");
}

setInterval(update, 500);
