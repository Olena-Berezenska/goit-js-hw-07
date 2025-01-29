function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const button = document.querySelector('.change-color');
const bodyColor = document.querySelector('body');
const spanColor = document.querySelector('.color');
const hendleClick = () => {
  const newColor = getRandomHexColor();
  spanColor.textContent = newColor;
  bodyColor.style.backgroundColor = newColor;
};
button.addEventListener('click', hendleClick);
