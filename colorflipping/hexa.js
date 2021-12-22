(function () {
  const hexa = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
  const btn = document.getElementById("btn");
  const color = document.querySelector(".color");
  btn.addEventListener("click", (event) => {
    let hexaColor = "#";
    for (let i = 0; i < 6; i++) {
      hexaColor += hexa[getRandomNumber()];
    }
    color.innerText = hexaColor;
    document.body.style.backgroundColor = `${hexaColor}`;
  });
  function getRandomNumber() {
    return Math.floor(Math.random() * hexa.length);
  }
})();
