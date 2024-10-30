window.onload = function() {
  //write your code here
  excuseGenerator();
};

let who = ["El autobusista", "Ella", "Mi abuela", "Mi lapiz", "Mi perro"];
let action = [
  " se ha comido",
  " ha destruido",
  " ha teletransportado",
  " ha sacrificado a las fuerzas del caos"
];
let what = [
  " mis deberes",
  " el autobús en el que iba",
  " mi teléfono",
  " a Paco, mi vecino del cuarto,"
];
let when = [
  " cuando estaba en el baño.",
  " mientras comía.",
  " mientras lloraba desconsoladamente sin poder hacer nada para impedirlo.",
  " cuando estaba durmiendo."
];

function randomItemOfArray(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

function excuseGenerator() {
  let excuse = `${randomItemOfArray(who)}${randomItemOfArray(action)
  }${randomItemOfArray(what)}${randomItemOfArray(when)}`;

  document.getElementById("generatedExcuse").innerText = excuse;
}

// function excuseGenerator() {

//   let excuse = `${who[Math.floor(Math.random() * who.length)]}${
//     action[Math.floor(Math.random() * action.length)]
//   }${what[Math.floor(Math.random() * what.length)]}${
//     when[Math.floor(Math.random() * when.length)]
//   }`;

//   document.getElementById("generatedExcuse").innerText = excuse;
// }
