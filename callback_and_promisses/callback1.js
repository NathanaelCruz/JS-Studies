//Callbacks
const fs = require("fs");
const callback = (err, conteudo) => {
  if (err) return console.log(err);
  console.log(String(conteudo));
};

console.log("Começando a ler o arquivo ...");
fs.readFile(__dirname + "/callback.txt", callback);
console.log("Terminado de ler ...");
