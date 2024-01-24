const characters = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "~",
  "`",
  "!",
  "@",
  "#",
  "$",
  "%",
  "^",
  "&",
  "*",
  "(",
  ")",
  "_",
  "-",
  "+",
  "=",
  "{",
  "[",
  "}",
  "]",
  ",",
  "|",
  ":",
  ";",
  "<",
  ">",
  ".",
  "?",
  "/",
];

let password1 = document.getElementById("password1");
let password2 = document.getElementById("password2");
let pass = ["", ""];

function generate1() {
  let random = Math.floor(Math.random() * characters.length);
  for (let i = 0; i < 15; i++) {
    pass[0] += characters[random];
    random = Math.floor(Math.random() * characters.length);
  }
  password1.value = pass[0];
  password1.addEventListener("click", function () {
    password1.select();
    document.execCommand("copy");
  });
}

function generate2() {
  let random = Math.floor(Math.random() * characters.length);
  for (let i = 0; i < 15; i++) {
    pass[1] += characters[random];
    random = Math.floor(Math.random() * characters.length);
  }
  password2.value = pass[1];
  password2.addEventListener("click", function () {
    password2.select();
    document.execCommand("copy");
  });
}

function passreset() {
  pass[0] = "";
  pass[1] = "";
}

function generate() {
  generate1();
  generate2();
  passreset();
}
