//3. Estructura For
//i. imprimir en consola los números desde el 0 hasta el número n separados por -
let n=10
let salida=""

for (let index = 0; index <= n; index++) {

    if(index==n){
        salida = salida + index
    }else{
        salida = salida + index + "-"
    }
}
console.log(salida)

//ii. imprimir la suma acumulativa de los números desde el 0 hasta el -n separados por ;
n=10
salida=""

for (let index = 0; index <= n; index++) {
    if(index==n){
        //salida = (suma + index * -1)
        salida += (index * -1)
    }else{
        suma  += (index * -1) + ";"
    }
}
console.log(salida)

//for (let index = 0; index >= -n; index--) {
//    if(index==n){
//        //salida = (suma + index)
//        salida -= index)
//    }else{
//        suma  -= index + ";"
//    }
//}
//console.log(salida)

//iii. realizar la suma acumulativa de los números desde 0 hasta n y mostrar en consola la suma total con el mensaje "suma total: suma_total"
n=10
let suma_total=0

for (let index = 0; index <= n; index++) {

        suma_total += index
}

console.log("suma total: " + suma_total)

//iv. imprimir todos los números pares desde el 0 hasta m

//v. imprimir todos los números impares desde el 0 hasta m

//vi. realizar el falctorial de un número n e imprimirlo en consola