// No cambies los nombres de las funciones.

function deObjetoAmatriz(objeto){
  // Escribe una función que convierta un objeto en una matriz, donde cada elemento representa
  // un par clave-valor en forma de matriz.
  //Ejemplo:
  /*objeto({
      D: 1,
      B: 2,
      C: 3
    }) ➞ [["D", 1], ["B", 2], ["C", 3]]*/
  //Escribe tu código aquí
var matriz =[];
for(var clave in objeto)
{
  if(clave!==null){
  matriz.push([clave, objeto[clave]]);

  }
 }
return matriz;
}


function numberOfCharacters(string) {
  //La función recibe un string. Recorre el srting y devuelve el caracter con el número de veces que aparece
  //en formato par clave-valor.
  //Ej: Recibe ---> "adsjfdsfsfjsdjfhacabcsbajda" || Devuelve ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 }
  //Escribe tu código aquí
var contador=0;
var valores = new Object();

for(var i=0; i<string.length;i++)
 {
   var cara=string.charAt(i);
   for (var j=0; j<string.length; j++)
   {
     if(string.charAt(i)===string.charAt(j))
     {
        contador++;
        valores[cara] = contador;
         }
       }
     contador=0;
}
return valores;
}

function capToFront(s) {
  //Realiza una función que reciba como parámetro un string y mueva todas las letras mayúsculas
  //al principio de la palabra.
  //Ejemplo: soyHENRY -> HENRYsoy
  //Escribe tu código aquí
  var cmay=0;
  var cmin=0;
  var nuevaFrase;
  var minusculas;
  var mayuscula;
  var min;
  var may;
  for(var i=0; i<s.length; i++)
   {
     var letra=s.charAt(i);
     if(letra === letra.toUpperCase())
     {
       if(cmay===0)
       {
         may=letra;
         cmay=cmay+1;
       }
       else
       {
         mayuscula=letra;
         may=may+mayuscula;
       }

     }

     else
     {
       if(cmin===0)
       {
         min=letra;
         cmin=cmin+1;
       }
       else
       {
       minusculas=letra;
       min=min+minusculas;
        }
     }
}
nuevaFrase=may+min;
return nuevaFrase;
}



function asAmirror(str) {
  //La función recibe una frase.
  //Escribe una función que tome la frase recibida y la devuelva de modo tal que se pueda leer de izquierda a derecha
  //pero con cada una de sus palabras invertidas, como si fuera un espejo.
  //Ej: Recibe ---> "The Henry Challenge is close!" || Devuelve ---> "ehT yrneH egnellahC si !esolc"
  //Escribe tu código aquí

var separado = str.split(" ");
var alrevez=[];
var mirror;

for(var i=0; i<separado.length;i++)
{
    alrevez[i]=separado[i].split("").reverse().join("");
  }

mirror=alrevez.join(" ");
return mirror;
}


function capicua(numero){
  //Escribe una función, la cual recibe un número y determina si es o no capicúa.
  //La misma debe retornar: "Es capicua" si el número se número que se lee igual de
  //izquierda a derecha que de derecha a izquierda. Caso contrario retorna "No es capicua"
  //Escribe tu código aquí
  var num=numero.toString();
  var numRev=num.split("").reverse().join("");
  if(num===numRev)
  {
      return "Es capicua";
  }
  else
  {
  return "No es capicua";
  }

}


function deleteAbc(cadena){
  //Define una función que elimine las letras "a", "b" y "c" de la cadena dada
  //y devuelva la versión modificada o la misma cadena, en caso de contener dichas letras.
  //Escribe tu código aquí

  var nueva;
  nueva=cadena.replace("a","");
  nueva=nueva.replace("b","");
  nueva=nueva.replace("c","");
  return nueva;

}

function sortArray(arr) {
  //La función recibe una matriz de strings. Ordena la matriz en orden creciente de longitudes de cadena
  //Ej: Recibe ---> ["You", "are", "beautiful", "looking"] || Devuelve ---> [“You", "are", "looking", "beautiful"]
  //Escribe tu código aquí
for(var i = 0; i < arr.length; i++){
for(var x = i+1; x < arr.length; x++){
if(arr[i].length>arr[x].length){
    var auxMayor=arr[i];
    arr[i]=arr[x];
      arr[x] = auxMayor;

    }
  }
}
return arr;
}



function buscoInterseccion(arreglo1, arreglo2){
  //Existen dos arrays, cada uno con 5 números. A partir de ello, escribir una función que permita
  //retornar un nuevo array con la intersección de ambos elementos. (Ej: [4,2,3] unión [1,3,4] = [3,4].
  //Si no tienen elementos en común, retornar un arreglo vacío.
  //Aclaración: los arreglos no necesariamente tienen la misma longitud
  //Escribe tu código aquí
var inter=[];

for(var i=0; i<arreglo2.length;i++)
{
  if(arreglo1.includes(arreglo2[i]))
  {
    inter.push(arreglo2[i]);
  }

}
return inter;
}



// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
   deObjetoAmatriz,
   numberOfCharacters,
   capToFront,
   asAmirror,
   capicua,
   deleteAbc,
   sortArray,
   buscoInterseccion,
};
