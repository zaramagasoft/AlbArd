const socket = io();

socket.on("connect", function () {
  console.log("conectao");
  let data;
  data = "conectado a AlbArd ";
  mensajeToConsola(data);
});

socket.on("mensaje", function (data) {
  console.log("mensaje recibio" + data);
  mensajeToConsola("Octopi: " + data);
});
function mensajeToConsola(data) {
  //  var textArea
  //  textArea=document.createElement('consolaMensajes')
  //  textArea.value+=data+'/r/n'
  let text = document.getElementById("consolaMensajes").value + "&#13;";
  // text= text.replace(/\n/g, "<br />");

  document.getElementById("consolaMensajes").innerHTML =
    data + "&#13;" + text + "&#13;";
}

//SystemInformation cliente
socket.on("dataHard", function (data) {
  //    console.log('HW->'+data)

  mensajeHard(data);
});
function mensajeHard(data) {
  document.getElementById("hardInf").innerHTML = data;
}

//apagar equipo etc
function apagar(){
    console.log('le has dao a apagar')
    //enviar un post
    
}

