const textoIngresado = document.querySelector("#texto");
const textoResultado = document.querySelector("#textoResultado");
const refreshBtn = document.getElementById("refreshBtn");
const btnEncriptar = document.querySelector("#encri");
const btnDesencriptar = document.querySelector("#desencri");
const btnCopiar = document.querySelector("#copiar");
const btnPegar = document.querySelector("#Pegar");

function encriptar (){
  let texto = textoIngresado.value.toLowerCase();
  let textoEncriptado = texto
  .replaceAll("e", "enter")
  .replaceAll("i", "imes")
  .replaceAll("o", "ober")
  .replaceAll("a", "ai")
  .replaceAll("u", "ufat");

  document.getElementById("noResuelto").style.visibility = "hidden";
  document.getElementById("copiar").style.visibility = "visible";

  textoResultado.value = textoEncriptado;

  document.getElementById("texto").value = '';

}

function desencriptar (){
  let textoEncriptado = textoIngresado.value.toLowerCase();
  let texto = textoEncriptado
  .replaceAll("enter", "e")
  .replaceAll("imes", "i")
  .replaceAll("ober", "o")
  .replaceAll("ai", "a")
  .replaceAll("ufat", "u");

  document.getElementById("noResuelto").style.visibility = "hidden";
  document.getElementById("copiar").style.visibility = "visible";

  textoResultado.value = texto;

  document.getElementById("texto").value = '';

}

function copiar () {
  let textoEncriptado = textoResultado.value;
  navigator.clipboard.writeText(textoEncriptado);
}

btnEncriptar.onclick = encriptar;
btnDesencriptar.onclick = desencriptar;

btnCopiar.onclick = copiar;

function pegar() {  
  if (navigator.clipboard) {
      navigator.clipboard.readText()
          .then(texto => {
              textoIngresado.value = texto;
          })
          .catch(err => {
              console.log('Error al pegar el texto: ', err);
          });
  } else {
      console.log('La API de portapapeles no está disponible en este dispositivo.');
  }
}

btnPegar.onclick = pegar;

refreshBtn.addEventListener("click", function() {
  location.reload();
});