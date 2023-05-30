let menu
let contadorUno=0
let contadorDos=0
let contadorTres=0
let contadorCuatro=0
let contadorCinco=0
let contadorSeis=0

function menuInicio() {

    menu=parseInt(prompt("ingrese 1 para ordenar numeros , 2 para calcular area de un circulo , 3 para hallar el tipo de triangulo, 4 para saber si dos numeros son amigos , 5 para conocer el valor de una compra , 6 para saber si un estudiante gano una asignatura y 7 para finalizar")) 
    return menu   
}

menuInicio()

while (menu < 7) {
    if (menu==1) {

        contadorUno+=1
        // ejercicio 1
        let num1,num2,num3;
        num1= parseInt(prompt("ingrese el primer numero"))
        num2= parseInt(prompt("ingrese el segundo numero"))
        num3= parseInt(prompt("ingrese el tercer numero"))

        if (num1<num2 && num1<num3) {
            menor=num1
            if(num2<num3){
                console.log("el orden ascendente es es" +num1,+num2,+num3)

            }else
                console.log("el orden ascendente es es" +num1,+num3,+num2)

            }else if(num2<num1 && num2<num3){

                if (num1<num3) {
                    console.log("el orden ascendente es es" +num2,+num1,+num3)
                }else{
                    console.log("el orden ascendente es es" +num2,+num3,+num1)
                }
            }else if (num3<num1 && num3<num2) {
                if(num1<num2){
                    console.log("el orden ascendente es es" +num3,+num1,+num2)
                }else{
                    console.log("el orden ascendente es es" +num3,+num2,+num1)
                }  
            }

            if (num1>num2 && num1>num3) {
                menor=num1
                if(num2>num3){
                    console.log("el orden descendente es es" +num1,+num2,+num3)
                }else
                    console.log("el orden descendente es es" +num1,+num3,+num2)
            }else if(num2>num1 && num2>num3){
                if (num1>num3) {
                    console.log("el orden descendente es es" +num2,+num1,+num3)
                }else{
                    console.log("el orden descendente es es" +num2,+num3,+num1)
                }
            }else if (num3>num1 && num3>num2) {
                if(num1>num2){
                    console.log("el orden descendente es es" +num3,+num1,+num2)
                }else{
                    console.log("el orden descendente es es" +num3,+num2,+num1)
                }  
            }
        menuInicio()
    }else if (menu==2) {

        contadorDos+=1
        let diametro,radio,pi,area

        diametro=parseInt(prompt("ingrese el diametro del circulo"))
        radio=diametro*0.5
        pi=3.14
        area=pi*(radio*radio) 
        console.log("el area del circulo es:"+area)
        menuInicio()
    } else if (menu==3) {
        contadorTres+=1    
        // ejercicio 3 
        let cateto1,cateto2,cateto3
        cateto1= parseInt(prompt("ingrese medida del cateto 1"))
        cateto2= parseInt(prompt("ingrese medida del cateto 2"))
        cateto3= parseInt(prompt("ingrese medida del cateto 3"))
        if (cateto1==cateto2 && cateto2==cateto3) {
            console.log("es un triangulo equilatero")
        }else if (cateto1 == cateto2 && cateto1 != cateto3 || cateto3 == cateto1 && cateto3 != cateto2 || cateto2 == cateto3 && cateto2 != cateto1 ) {
            console.log("es un triangulo isoseles")
        }else{
            console.log("es un triangulo escaleno")
        }
        menuInicio()
    }else if (menu==4) {
        contadorCuatro+=1
        // ejercicio 4
        let numeroUno=parseInt(prompt("ingrese primer numero"))
        let numeroDos=parseInt(prompt("ingrese segundo numero")) 
        let i = 1
        let suma1 = 0
        let j = 1
        let suma2 = 0

        while (i < numeroUno) {
            if(numeroUno % i==0){
                    suma1 = suma1 + i
            }
                i = i + 1
        }
        while (j < numeroDos) {
            if(numeroDos % j==0){
                suma2 = suma2 + j
            }
            j = j + 1
        }
        if (suma1 == numeroDos && suma2 == numeroUno){
            console.log(`los numeros  ${numeroUno} y  ${numeroDos} son amigos `)
            menuInicio()
        } else {
            console.log(`los numeros  ${numeroUno} y  ${numeroDos} no son amigos `)
            menuInicio()
        }
    }
}