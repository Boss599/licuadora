
var estadoLicuadora = "apagada";
var sonidoLicuadora = document.getElementById("blender-sound");
var botonLicuadora = document.getElementById("blender-button-sound");

var licuadora = document.getElementById("blender");

var mensaje = document.getElementById("mensaje");


function controlarLicuadora(){
    if (estadoLicuadora == "apagada"){
    estadoLicuadora = "encendido";
    hacerSonido ();
    mensaje.innerHTML ='ENCENDIDA'
    
    licuadora.classList.add("active");
   

} else { 
   
estadoLicuadora = "apagada";
hacerSonido ();
mensaje.innerHTML ='APAGADA'

licuadora.classList.remove("active");

}
}

function hacerSonido (){
    if (sonidoLicuadora.paused){
        botonLicuadora.play();
        sonidoLicuadora.play();


    } else{
        botonLicuadora.play();
        sonidoLicuadora.pause();

        sonidoLicuadora.currentTime =0;
    }
}

