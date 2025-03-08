// Color del tema

document.querySelector("#dark-mode-toggle").addEventListener("click", () => {
  document.body.classList.toggle("dark");
  const isDarkMode = document.body.classList.contains("dark");
  localStorage.setItem("darkmode", isDarkMode);

  //cambia el color de la barra de estado del movil
  document
    .querySelector('meta[name="theme-color"]')
    .setAttribute("content", isDarkMode ? "#1a1a2e" : "#fff");
});

//==========================================

let level_index = 0;
let level = CONSTANT.LEVEL[level_index];

document.querySelector("#btn-level").addEventListener("click", () => {
  level_index =
    level_index + 1 > CONSTANT.LEVEL.length - 1 ? 0 : level_index + 1;
  level = CONSTANT[level_index];
  e.target.innerHTML = CONSTANT.LEVEL_NAME[level_index];
});

// =========================================

const init = () => {
  const darkmode = JSON.parse(localStorage.getItem("darkmode"));
  document.body.classList.add(darkmode ? "dark" : "light");
  document
    .querySelector('meta[name="theme-color"]')
    .setAttribute("content", darkmode ? "#1a1a2e" : "#fff");
};

init();
