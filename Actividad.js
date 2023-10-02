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



for(let i=1; i<=9;i++){
    document.write("")
    for(let j=0;j<i;j++){
        document.write("*")
    }
    document.write("<br>")
}


*/

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





