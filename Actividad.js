/*
//Ej8
console.log(""+1+0);//10
console.log(""-1+0);//-1
console.log(true+false);//1
console.log(6/"3");//2
console.log("2"*"3");//6
console.log(4+5+"px");//9px
console.log("$"+4+5);//$45
console.log("4"-2);//2
console.log("4px"-2);//NaN
console.log(" -9 "+5);//-9 5
console.log(" -9 "-5);//-14
console.log(null +1);//1
console.log(undefined +1);//NaN
console.log(" \t \n" -2);//-2

//Ej9
let a=prompt("¿Primer número?",1);
let b=prompt("¿Segundo número",2);
alert(parseInt(a)+parseInt(b));

//Ej10
let a=1, b=1;
let c=++a; //2
let d=b++; //1
console.log(c);
console.log(d);


//Ej11
console.log(5>4); //true
console.log("apple">"pineapple");//false
console.log("2">"12");//true
console.log(undefined==null);//true
console.log(undefined===null);//false
console.log(null== "\n0\n");//false
console.log(null=== +"\n0\n");//false

//Ej12
let numero=prompt("Introduce un numero ");
let acceso=numero >=0 ? "El numero es mayor o igual a 0" : "El numero es menor que 0";
alert(acceso);

//Ej13
let edad= prompt("Introduce tu edad");
if(edad <=12){
    alert("Eres un niñ@");
}else if(edad <=26){
    alert("Eres un@ joven");
}else if(edad <=65){
    alert("Eres un@ adult@");
}else{
    alert("Eres un@ jubilad@");
}

//Ej 14
let edad;
do{
    console.log(edad);
}
while(!edad=parseInt(prompt("Introduce tu edad"))){



if(edad <=12){
    alert("Eres un niñ@");
}else if(edad <=26){
    alert("Eres un@ joven");
}else if(edad <=65){
    alert("Eres un@ adult@");
}else{
    alert("Eres un@ jubilad@");
}
let indicador2= edad >=0? "Su edad es mayor que 0" : "Se ha producido un error";
alert(indicador2);
}else{
    alert("Adios");
}
}

//Ej15

let numeroAle= prompt("Introduce un numero del 1 al 10");

if(numeroAle<1 || numeroAle>10){
    alert("Número no válido");
} else{
    for(let i=0;i<=10;i++){
        document.writeln(`<br>${numeroAle} por ${i} = ${numeroAle*i}`);
    }
}



//Ej 16 y 17

let fruta=prompt("Introduce una fruta");

fruta.toLocaleLowerCase();

switch (fruta){
    case 'pera':
        document.write(`La fruta introducida en ingles es Pear`);
        break;
    case 'manzana':
        document.write(`La fruta introducida en ingles es Apple`);
        break;
    case 'piña' :
        document.write(`La fruta introducida en ingles es Pineapple`);
        break;
    case 'fresa' :
        document.write(`La fruta introducida en ingles es Strawberry`);
        break;
    case 'naranja' :
        document.write(`La fruta introducida en ingles es Orange`)
        break;
    default:
        document.write("Fruta desconocida");
            
}


//Ej 18
*/
/*
const mitad=Math.floor(9/2);

for(let i=0; i<=mitad;i++){
    let linea='';
    for(let j=0;j<mitad-i;j++){
        linea+='';
        for(let k=0;k<2*i+1;k++){
            linea+='*';
        }
    }console.log(linea);
}

for(let i=mitad-1;i>=0;i++){
    let linea='';
    for(let j=0;j<mitad-i;j++){
        linea+='';
        for(let k=0;k<2*i+1;k++){
            linea+='*';
        }
        console.log(linea);
    }
}




//Ej 20


function suma1(a,b,c){
    return a+b+c;
}
//------------------------------------------------
let suma2 =function(w,y,z){
    return w+y+z;
}
let suma3=(a,b,c)=> a+b+c 

//--------------------------------------------------

//EJ 21
function operacionesEncadenadas(a,b,operacion1,operacion2,callback){
    operacion1(a,b);
    operacion2(a,b);
    callback();

}

function suma(a,b) {return a+b;}
function produto(a,b){return a*b;}

operacionesEncadenadas(5, 2, suma(a, b), produto(a, b), ()=>alert("hola"));




//indexOf

const frutas = ["manzana", "plátano", "uva", "naranja", "pera","plátano","plátano"];
console.log(frutas.indexOf("plátano"));


//lastIndexOf
console.log(frutas.lastIndexOf(("plátano")));

//find

const numeros=[158,6898,85,2,589,365,7];

const numero=numeros.find((element)=> element > 500);
console.log(numero);

//findIndex

const numeroMayor=(element) => element > 160;
console.log(numeros.findIndex(numeroMayor));

//findLastIndex


const numeroMayor2=(element) => element > 160;
console.log(numeros.findLastIndex(numeroMayor2));



//EJ 21
const numeros=[1,2,3,4,5,6,7];

let result= numeros.reduce((sum, current)=> sum+current);

alert (result);

//Ej 22

let contadorNumerosPares=numeros.reduce((cuantosPares,valorActual)=>{
     if(valorActual%2==0){
        document.writeln(valorActual);
        cuantosPares++;
    }
    return cuantosPares;
}
,0);


//Ej 23
const palabras = ["manzana", "gato", "sol", "montaña", "libro", "ciudad", "agua", "casa", "perro", "avión"];

let palabraLarga=palabras.find()

//Ej 24

const palabrasAleatorias = ["gato", "perro", "manzana", "pelota", "casa", "sol", "luna", "coche"];

function busca(Array){
    let palabraLarga="";

    for(let i=0;i<Array.length;i++){
        const palabraActual=Array[i];
        if(palabraActual.length>palabraLarga.length){
            palabraLarga=palabraActual;
        }
    }
    return palabraLarga;
}

const palabraMasLarga=busca(palabrasAleatorias);
console.log(`La palabra más larga es ${palabraMasLarga}`);


//Ej 25

const valores=[5,89,567,589,65,12,48,5,54968,5787];

let valoresSet=new Set(valores);

console.log(valoresSet);


//Ej 26

    
  const paises = ["México", "Japón", "Italia", "Australia", "Brasil", "Canadá", "Francia", "Alemania", "India", "Argentina", "España", "China", "Sudáfrica", "Rusia", "Corea del Sur", "Reino Unido", "Estados Unidos", "Indonesia", "Egipto", "Turquía"];
  
  function mostrarArray(Array) {
      document.write(`Hay ${Array.length} países`);
      document.write("<ol>");
      
      for (let i = 0; i < Array.length; i++) {
          document.write(`<li>${Array[i]}</li>`);
      }
      
      document.write("</ol>");
  }
  
  function mostrarArrayAlReves(Array) {
      const reversedArray = Array.slice().reverse();
      document.write("<ol>");
      
      for (let i = 0; i < reversedArray.length; i++) {
          document.write(`<li>${reversedArray[i]}</li>`);
      }
      
      document.write("</ol>");
  }
  
  function añadirElemento(Array) {
      let paisNuevo = prompt("Añada un país");
      let posicion = parseInt(prompt("Indique la posición"));
      
      if (!isNaN(posicion) && posicion >= 0 && posicion <= Array.length) {
          Array.splice(posicion, 0, paisNuevo);
          mostrarArray(Array);
      } else {
          document.write("Posición no válida");
      }
  }
  
  function eliminarElementoPaises(Array) {
      let posicion = parseInt(prompt("Indique la posición que quieres borrar"));
      
      if (!isNaN(posicion) && posicion >= 0 && posicion < Array.length) {
          Array.splice(posicion, 1);
          mostrarArray(Array);
      } else {
          document.write("Posición no válida");
      }
  }
  
  function buscarPais(Array) {
      let paisBuscado = prompt("Introduce el país que quieras buscar");
      const posicion = Array.indexOf(paisBuscado);
      
      if (posicion !== -1) {
          document.write(`El país "${paisBuscado}" se encuentra en la posición ${posicion}`);
      } else {
          document.write(`El país "${paisBuscado}" no se encontró en la lista`);
      }
  }
  
  


//Ej 27

const x= Math.round(Math.sqrt(69));

console.log(x);

document.write(`El redonde que hemos utilizado es round ${x}`)

//Ej 28 

const y=Math.random()*5;
console.log(y,`Esta entre el rango 0 y 5`);



//Ej 29

function calcularTrigonometria(angulo, funcionTrigonometrica) {
    let resultado;

    switch (funcionTrigonometrica) {
        case 'sen':
            resultado = Math.sin(angulo * (Math.PI / 180));
            document.write(`El seno de ${angulo} grados es ${resultado}`);
            break;
        case 'cos':
            resultado = Math.cos(angulo * (Math.PI / 180));
            document.write(`El coseno de ${angulo} grados es ${resultado}`);
            break;
        case 'tan':
            resultado = Math.tan(angulo * (Math.PI / 180));
            document.write(`La tangente de ${angulo} grados es ${resultado}`);
            break;
        default:
            document.write('Función trigonométrica no válida');
    }
    
    return resultado;
}

// Ejemplo de uso:
const angulo = 25 // Ángulo en grados
const funcion = 'cos'; // Función trigonométrica (sen, cos, tan)

const resultado = calcularTrigonometria(angulo, funcion);


//Ej 30

let date = new Date();
console.log(date.toLocaleDateString());
console.log(date.toDateString());
console.log(date.toUTCString());


//Ej 31

function mostrarHoraActual() {
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();
  
    // Formato 14:35:07 (hora detallada con minutos y segundos)
    const horaDetallada = `${formatoNumero(hours)}:${formatoNumero(minutes)}:${formatoNumero(seconds)}`;
  
    // Formato 02:35 PM o 02:35 AM (hora con minutos y AM o PM)
    const ampm = hours >= 12 ? 'PM' : 'AM';
    const horaAmPm = `${formatoNumero(getHoraAmPm(hours))}:${formatoNumero(minutes)} ${ampm}`;
  
    console.log(`Hora Detallada: ${horaDetallada}`);
    console.log(`Hora AM/PM: ${horaAmPm}`);
  }
  
  function formatoNumero(numero) {
    return numero < 10 ? `0${numero}` : numero.toString();
  }
  
  function getHoraAmPm(hours) {
    return hours > 12 ? hours - 12 : hours;
  }
  
  mostrarHoraActual();
  


//Ej 32

const date = new Date();

const diaActual = date.getDay();
const mesActual = date.getMonth() + 1; // Sumar 1 para obtener el mes en formato común

const diaFin = 23;
const mesFin = 6;

const restaDias = diaFin - diaActual;
const restaMes = mesFin - mesActual;

console.log(`Quedan ${restaDias} días y ${restaMes} meses`);

//Ej 33

function cumpleañosEnDomingos(dia, mes) {
    const añoActual = new Date().getFullYear();
    let año = añoActual;
    const añosEnDomingo = [];
  
    while (año <= 2100) {
      const fechaCumpleaños = new Date(año, mes - 1, dia); // mes - 1 porque los meses se cuentan desde 0 en JavaScript
      const diaSemana = fechaCumpleaños.getDay(); // 0 para domingo, 1 para lunes, etc.
  
      if (diaSemana === 0) {
        añosEnDomingo.push(año);
      }
  
      año++;
    }
  
    return añosEnDomingo;
  }
  
  const diaCumple = prompt("Introduce el día de tu cumpleaños (1-31):");
  const mesCumple = prompt("Introduce el mes de tu cumpleaños (1-12):");
  
  if (diaCumple && mesCumple) {
    const añosEnDomingo = cumpleañosEnDomingos(parseInt(diaCumple), parseInt(mesCumple));
  
    if (añosEnDomingo.length > 0) {
      console.log(`Tu cumpleaños caerá en domingo en los siguientes años:`);
      console.log(añosEnDomingo.join(", "));
    } else {
      console.log("Lo siento, tu cumpleaños no caerá en domingo en ningún año hasta el 2100.");
    }
  } else {
    console.log("Debes ingresar un día y un mes válidos.");
  }
  

  //Ej 34

  const date=new Date();

  if(date.getDay()==0){
    console.log(`SU`);
  }else if(date.getDay()==1){
    console.log(`MO`);
  }else if(date.getDay()==2){
    console.log(`TU`);
  }else if(date.getDay()==3){
    console.log(`WE`);
  }else if(date.getDay()==4){
    console.log(`TH`);
  }else if(date.getDay()==5){
    console.log(`FR`);
  }else if(date.getDay()==6){
    console.log(`SA`);
  }
  
 //Ej 35

 function esAñoBisiesto(año) {
    // Un año bisiesto es divisible por 4, pero no por 100, o es divisible por 400.
    return (año % 4 === 0 && año % 100 !== 0) || (año % 400 === 0);
  }
  
  function ultimoDiaDelMes(año, mes) {
    if (mes < 1 || mes > 12) {
      return null; // Mes inválido
    }
  
    if (mes === 2) {
      // Febrero
      if (esAñoBisiesto(año)) {
        return 29; // Año bisiesto
      } else {
        return 28; // No es bisiesto
      }
    } else if ([4, 6, 9, 11].includes(mes)) {
      return 30; // Meses con 30 días
    } else {
      return 31; // Meses con 31 días
    }
  }
  
  // Ejemplo de uso:
  const año = 2023;
  const mes = 2;
  
  const ultimoDia = ultimoDiaDelMes(año, mes);
  
  if (ultimoDia !== null) {
    console.log(`El último día de ${mes}/${año} es el día ${ultimoDia}.`);
  } else {
    console.log("Mes o año inválido.");
  }
  */
 //Ej 36
 function segundosDesdeComienzoDelDia() {
    const ahora = new Date();
    const horas = ahora.getHours();
    const minutos = ahora.getMinutes();
    const segundos = ahora.getSeconds();
    
    const segundosTotales = (horas * 3600) + (minutos * 60) + segundos;
  
    return segundosTotales;
  }
  
  // Ejemplo de uso:
  const segundos = segundosDesdeComienzoDelDia();
  console.log(`Han transcurrido ${segundos} segundos desde el comienzo del día.`);
  


