var inputText = document.querySelector("#input-text");
var outputText = document.querySelector("#output");

var criptografar = document.querySelector(".btn-criptografar");
var descriptografar = document.querySelector(".btn-descriptografar");

function criptografarFunction() {
  var text = inputText.value;

  var result1 = text.replace(/a/g, "enter");
  var result2 = result1.replace(/e/g, "imes");
  var result3 = result2.replace(/i/g, "ai");
  var result4 = result3.replace(/o/g, "ober");
  var result5 = result4.replace(/u/g, "ufat");
  document.getElementById('output').innerHTML = '<textarea readonly id="text">' + result5 + '</textarea>' + '<button class="btn-copiar" id="copiar" onclick="copiar()">Copiar</button>'



}

function descriptografarFunction() {
  var text = inputText.value;

  var result1 = text.replace(/enter/g, "a");
  var result2 = result1.replace(/imes/g, "e");
  var result3 = result2.replace(/ai/g, "i");
  var result4 = result3.replace(/ober/g, "o");
  var result5 = result4.replace(/ufat/g, "u");

  document.getElementById('output').innerHTML = '<textarea readonly id="text">' + result5 + '</textarea>' + '<button class="btn-copiar" id="copiar" onclick="copiar()">Copiar</button>'
}

function copiar() {
  var texto = document.getElementById('text');

  texto.select();
  document.execCommand('copy');
  alert("Texto copiado para área de transferência.");
}