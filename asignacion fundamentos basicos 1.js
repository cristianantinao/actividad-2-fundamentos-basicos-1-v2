console.log ('1.Obten del 1 al 255:');
/* Escribe una función que devuelve un array con todos los números del 1 al 255. */
function get_array(){
    var arr = [];
    for(var i=1 ; i<256 ; i++){
        arr.push(i);
    }
    return arr;
}
console.log(get_array());

console.log('-----------------');

console.log('2.consigue pares hasta el 1000:');
/* Escribe una función que entregue la suma de todos los números pares 
del 1 al 1000 - Puedes usar un operador de módulo para este ejercicio.  */

function sum_even_numbers(){
    var sum = 0;
    for (var i=1;i<1001;i++){
        if(i%2===0)
        sum = sum+i;
    }
    return sum
}
console.log(sum_even_numbers());

console.log('-----------------');

console.log('3.suma impares hasta el 5000:');
/* Escribe una función que devuelva la suma de todos los números 
impares entre 1 y 5000 (ej: 1+3+5+...+4997+4999). */

function sum_odd_numbers(){
    var sum=0;
    for( var i=1; i<5001; i++){
        if(i%2===1)
        sum+=i;
    }
    return sum;
}
console.log(sum_odd_numbers());

console.log('-----------------');

console.log('4.itera un Array:');
/* Escribe una función que devuelva la suma de todos los valores dentro 
de un array (ej:  [1,2,5] retorna 8. [-5,2,5,12] retorna 14).  */

function iterateArr(arr){
    var sum=0;
    for (var i=0;i<arr.length;i++){
        sum=sum+arr[i];
    }
    return sum;
}

console.log(iterateArr([1,2,5]));
console.log('-----------------');

console.log('5.encuentra el mayor(max):');
/* Dado un array con múltiples valores, escribe una función que devuelva el
 número mayor (ej: para [-3,3,5,7] el número mayor (max) es 7).  */

function findmax(arr){
    var max=0;
    for( var i=0;i<arr.length;i++){
        if(arr[i]>arr[max]){
        var max = i;
        }
    }
    return arr[max];
}

console.log(findmax([-1,-300,-2,-200,-5]))
console.log('-----------------');

console.log('6.Encuentra el promedio(avg):');
/* Dado un array con múltiples valores, escribe una función que devuelva 
el promedio de los valores (ej: para [1,3,5,7,20] el promedio es 7.2). */

function findavg(arr){
    var sum=0;
    for(var i=0;i<arr.length;i++){
        sum=sum+arr[i];
    }
    return sum/arr.length;

}

console.log(findavg([1,3,5,7,20]));
console.log('-----------------');

console.log('7.Array de impares:')
/* Escribe una función que devuelva un array de todos los números impares entre 1 y 50 
(ej: [1,3,5, …, 47,49]). Pista: Usa el método ‘push’. */

function oddnumbers(){
    var arr=[];
    for(var i=1;i<51;i++){
        if(i%2===0)
        arr.push(i);
    }
    return arr;
}

console.log(oddnumbers());
console.log('-----------------');

console.log('8.Mayor que Y:');
/* Dado un valor Y, escribe una función que toma un array y devuelve los valores 
mayores que Y. Por ejemplo, si arr = [1,3,5,7] y Y = 3,
 tu función devolverá 2 (hay 2 números en el array mayores que 3, esto son 5 y 7).  */

function greaterY(arr, Y){
    var count=0;
    for (var i=0;i<arr.length;i++){
        if(arr[i]>Y)
        count++;
    }
    return count;
}

console.log(greaterY([1,3,5,7], 3));
console.log('-----------------');

console.log('9.Cuadrados:');
/* Dado un array con múltiples valores, escribe una función que reemplace cada 
valor por el cuadrado del mismo valor (ej: [1,5,10,-2] será [1,25,100,4]).*/

function squarevalue(arr){
    for(var i=0;i<arr.length;i++){
        arr[i]=arr[i]*arr[i];
    }
    return arr;
}

console.log(squarevalue([1,5,10,-2]));
console.log('-----------------');

console.log('10.Negativos:');
/*  Dado un array con múltiples valores, escribe una función que reemplace cualquier número
 negativo dentro del array por 0. Cuando el programa esté listo, el array no debiera contener 
 números negativos (ej: [1,5,10,-2] se convertirá en [1,5,10,0]). */

function nonegative(arr){
    for(var i=0;i<arr.length;i++){
        if(arr[i]<0)
        arr[i]=0;
    }
    return arr;
}

console.log(nonegative([1,5,10,-2]));
console.log('-----------------');

console.log('11.Max/Min/Avg:');
/*  Dado un array con múltiples valores, escribe una función que devuelva un nuevo array que 
solo contenga el valor mayor (max), menor (min) y promedio (avg) del array original 
(ej: [1,5,10,-2] devolverá [10,-2,3.5]). */

function maxminavg(arr){
    var max=0
    var min=0
    var avg=0;
    var sum=0;

    for(var i=0;i<arr.length;i++){
        if(arr[i]>arr[max]){
            max = i;
        }
        if(arr[i]<arr[min]){
            minimo = i;
        }
    
    sum=sum+arr[i];
    avg=sum/arr.length;
    }
    var arrnew=[arr[max],arr[min],avg];
    return arrnew;
}

console.log(maxminavg([1,5,10,-2]))
console.log('-----------------');

console.log('12.Intercambia Valores:');
/* Escribe una función que intercambie el primer y el último valor de cualquier array. 
La extensión mínima predeterminada del array es 2 
(ej: [1,5,10,-2] será [-2,5,10,1]).  */
function swap(arr){
    var firstvalue=arr[0];
    arr[0]=arr[arr.length-1];
    arr[arr.length-1]=firstvalue;
    return arr;
}

console.log(swap([1,5,10,-2]));
console.log('-----------------');

console.log('13.De numero a string:');
/* Escribe una función que tome un array de números y reemplace cualquier valor negativo por el string ‘Dojo’.
 Por ejemplo, dado el array = [-1,-3,2], tu función devolverá [‘Dojo’,‘Dojo’,2]. */
function numbertostring(arr){
    var x='DOJO';
    for(var i=0;i<arr.length;i++){
        if(arr[i]<0)
        arr[i]="Dojo";
    }
    return arr;
}

console.log(numbertostring([-1,-3,2]));
console.log('-----------------');
