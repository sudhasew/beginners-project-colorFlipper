(function () {
  const colorsArray = [
    "red",
    "pink",
    "yellow",
    "#222",
    "rgba(165,42,42)",
    "rgba(128,128,0)",
  ];
  const btn = document.getElementById("btn");
  const color = document.querySelector(".color");
  btn.addEventListener("click", (event) => {
    let randomNumber = getRandomNumber();
    console.log(randomNumber);
    document.body.style.backgroundColor = colorsArray[randomNumber];
    color.innerText = colorsArray[randomNumber];
  });
  function getRandomNumber() {
    return Math.floor(Math.random() * colorsArray.length);
  }
})();
