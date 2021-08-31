alert("hola mundo")

let nombre="gaby"
let saludo= "hola"

console.log(saludo + nombre)

//Ejercicio 1
let n = 90
let m = 50
let r = n + m

console.log(r)

//Ejercicio 2
let a = 1
let b = 2
let c = 3
let d = 4
let e = 5
let z = a * b * c * d * e

console.log(z)

//Ejercicio 3
let x=8
let y=10
let z1=90

let (w=(x+z1)*y*y)

console.log(w)

//Ejercicio 4
let texto1 ="hola"
let texto2 ="mundo"

console.log(texto1 + texto2)

//Ejercicio 5
let a1="5"
let b1="3"
let c1="7"
let d= a1+b1+c1

console.log(a1 + " + " + b1 + " + " + c1 + "=" + d)

//Ejercicio 6
let usuario1={nombre:"juan", apellido:"perez"}
let usuario2={nombre:"sara", apellido:"aparicio"}
let usuario3={nombre:"sebastián", apellido:"gonzalez"}
let usuario4={nombre:"catalina", apellido:"rodriguez"}
let usuario5={nombre:"laura", apellido:"quintanilla"}
let usuario6={nombre:"camila", apellido:"lopez"}
let usuario7={nombre:"carlos", apellido:"gutierrez"}
let usuario8={nombre:"sergio", apellido:"chacon"}

usuario1.nombre

if(n==1){
    console.log("Hola, " + usuario1.nombre + usuario1.apellido)
}else if(n==2){
    console.log("Hola, " + usuario2.nombre + usuario2.apellido)
}else if(n==3){
    console.log("Hola, " + usuario3.nombre + usuario3.apellido)
}else if(n==4){
    console.log("Hola, " + usuario4.nombre + usuario4.apellido)
}else if(n==5){
    console.log("Hola, " + usuario5.nombre + usuario5.apellido)
}else if(n==6){
    console.log("Hola, " + usuario6.nombre + usuario6.apellido)
}else if(n==7){
    console.log("Hola, " + usuario7.nombre + usuario7.apellido)
}else if(n==8){
    console.log("Hola, " + usuario8.nombre + usuario8.apellido)
}else {
    console.log("faltan datos)
}

//Ejercicio 7: Arreglo
let usuarios=[usuario1, usuario2, usuario3, usuario4,
                usuario5, usuario6, usuario7, usuario8]

if(n<=usuarios.length){
    console.log("Hola con arreglo"+ usuarios[n-1].nombre+""+usuarios[n-1].apellido)
}else{
    console.log("usuario no registrado")
}

//Ejercicio 2
a=2
b=3

if(a>b){
    console.log(a + " es mayor")
}else{
    console.log(b + " es mayor")
}

//Ejercicio 3
a=2
b=3

if(a>b){
    console.log(a + " es mayor y " + b + " es menor")
}else if (b>a){
    console.log(b + " es mayor y " + a + " es menor")
}else{
    console.log(a + " y " + b + " son iguales")
}

//Ejercicio 4 división modular
n=6

if(n%2==0){
    console.log(n + " es par")
}else{
    console.log(n + " es impar")
}

//Ejercicio 5
n=9

if(n%2!=0){
    console.log(n + " es impar")
}else{
    console.log(n + " es par")
}

//Ejercicio 6
let edad= prompt("Ingrese su edad")
let categoria=prompt("Ingrese la categoría A, B, C, D")

if (edad<==0 && categoria == "A" || categoria == "B" || categoria == "C" ||categoria == "D"){

    if (categoria=="A"){
    alert("Sí, puede ver la película cat A")
}else if (categoria=="B" && edad>=9){
    alert("Sí, puede ver la película cat B")
}else if (categoria=="C" && edad>=18){
    alert("Sí, puede ver la película cat C")
}else if (categoria=="D" && edad>=25){
    alert("Sí, puede ver la película cat D")
}else{
    alert.log("Para la casa")
}

}else{
    alert("Edad o categoría inválidas")
}
