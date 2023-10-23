//38
/*Crea un programa que muestre en el documento HTML la siguiente información:
Alto y ancho interno y externo de la ventana actual
Nombre y versión del navegador.
Comprobar si las cookies están habilitadas
Muestra la URL actual.
Muestra la profundidad de color de la pantalla  y la resolución.*/


/*
console.log(window.innerHeight, window.innerWidth);
console.log(window.outerHeight, window.outerWidth);
console.log(navigator.appName, navigator.appVersion);
console.log(navigator.cookieEnabled);
console.log(window.location.href);
console.log(screen.colorDepth,screen.pixelDepth);

Crea un programa que pida al usuario una URL, 
y con este dato abrir  otra ventana con esta URL 
y de ancho y alto la mitad de la ventana actual.


let url=prompt("Introduce una url");
let alto= window.innerHeight/2;
let ancho=window.innerWidth/2;
window.open(url,"_blank",`height: ${alto}, width: ${ancho} `)
*/ 

/*Crea un programa que vaya mostrando en un documento HTML 
la hora, debe actualizarse cada segundo. El Mensaje que muestre 
debe ser con  el siguiente formato: “Son las 09:25:03 horas PM” es 
decir debe mostrar la hora en formato 12 Horas (AM/PM). Ayuda , debes 
usar alguno de los métodos globales del objeto window que nos permite 
diferir la ejecución de una tarea.

function hora(){

    let fecha =new Date;

    let hora=fecha.getHours()
    let minutos=fecha.getMinutes();
    let segundos=fecha.getSeconds();
    document.body.innerHTML=`Son las ${hora}:${minutos}:${segundos} horas `;
}

setInterval(hora,1000)
*/

/*Crea un programa que pida el nombre a usuario la primera vez que visita 
el documento, si ya la ha visitado que le muestre un mensaje “Hola nombreUsuario, 
otra vez por aquí”.  Si no la ha visitado que le de la bienvenida y almacene su 
nombre en la cookie. Utiliza una cookie “usuario”.La fecha de expiración de la 
cookie es de un año o 365 días.*/

function setCookie(cname, cvalue, exdays) {
    const d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    let expires = "expires="+d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
  }
  
  function getCookie(cname) {
    let name = cname + "=";
    let ca = document.cookie.split(';');
    for(let i = 0; i < ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) == ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
  }
  
  function checkCookie() {
    let user = getCookie("username");
    if (user != "") {
      alert("Hola " + user+ " otra vez por aqui");
    } else {
      user = prompt("Please enter your name:", "");
      if (user != "" && user != null) {
        setCookie("username", user, 365);
      }
    }
  }
  checkCookie()

