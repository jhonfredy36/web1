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
    }else if (menu==5) {
        contadorCinco+=1
        // ejercicio 5
        let cantidadProducto=parseInt(prompt("ingrese la cantidad de productos comprados"))
        let valorProducto=parseFloat(prompt("ingrese el valor unitario del producto"))
        let iva=(cantidadProducto*valorProducto*0.19)
        let valorCompra=(cantidadProducto*valorProducto)+iva
        let valorAPagar

        if(valorCompra>500000 && valorCompra<=1000000){
            valorAPagar=(cantidadProducto*valorProducto)

            console.log(`el valor de su compra es :${valorCompra}`)
            console.log(`el valor de su iva es :${iva}`)
            console.log("el iva se retorna a usted por que su compra fue superior a 500.000")
            console.log(`el valor a pagar es :${valorAPagar}`)
            menuInicio()
        }else if(valorCompra>1000000){
            valorAPagar=(cantidadProducto*valorProducto)-(cantidadProducto*valorProducto*0.10) 
            console.log(`el valor de su compra es :${valorCompra}`)
            console.log(`el valor de su iva es :${iva}`)
            console.log("el iva se retorna a usted por que su compra fue superior a 500.000 y ademas se le hace un 10% de descuento sobre su compra por comprar mas de 1.000.000 ")
            console.log(`el valor a pagar es :${valorAPagar}`)
            menuInicio()
        }else{
            console.log(`el valor de su iva es :${iva}`)
            console.log(`el valor de su compra es :${valorCompra}`)
            menuInicio()
        }
    }else if (menu==6) {
        contadorSeis+=1
        // ejercicio 6
        let notaUno = parseFloat(prompt("ingrese nota uno "))
        let notaDos = parseFloat(prompt("ingrese nota dos "))
        let notaTres = parseFloat(prompt("ingrese nota tres "))
        let notaCuatro = parseFloat(prompt("ingrese nota cuatro "))
        let notaUnoIncremento
        let notaDosIncremento
        let notaTresIncremento
        let porcentajeNotaUno=notaUno*0.10
        let porcentajeNotaDos=notaDos*0.20
        let porcentajeNotaTres=notaTres*0.30
        let porcentajeNotaCuatro=notaCuatro*0.40
        let notaDefinitiva=0

        if (notaCuatro==5) {
            if (notaUno<=4) {
                notaUnoIncremento=Number(notaUno+1)
            }else{
                notaUnoIncremento=5
            }
            if (notaDos<=4) {
                notaDosIncremento=Number(notaDos+1)
            }else{
                notaDosIncremento=5
            }
            if (notaTres<=4) {
                notaTresIncremento=Number(notaTres+1)                
            }else{
                notaTresIncremento=5;
            }
            notaDefinitiva=(notaUnoIncremento*.10)+(notaDosIncremento*.20)+(notaTresIncremento*.30)+(notaCuatro*.40)
            console.log(`el valor nota definitiva :${notaDefinitiva}`)
            
                if (notaDefinitiva>3.5) {
                    console.log("aprobo la asignatura")
                }else{
                    console.log("no aprobo la asignatura")
                } 
                menuInicio()   
        }
        else{
            notaDefinitiva=porcentajeNotaUno+porcentajeNotaDos+porcentajeNotaCuatro+porcentajeNotaTres

            if (notaDefinitiva>3.5) {
                console.log("aprobo la asignatura")
            }else{
                console.log("no aprobo la asignatura")
            }
            menuInicio()
        }
    } else { 
        num=8   
    }
}
document.write(`el ejercicio 1 :${contadorUno}`)
document.write("<br>")
document.write(`el ejercicio 2 :${contadorDos}`)
document.write("<br>")
document.write(`el ejercicio 3 :${contadorTres}`)
document.write("<br>")
document.write(`el ejercicio 4 :${contadorCuatro}`)
document.write("<br>")
document.write(`el ejercicio 5 :${contadorCinco}`)
document.write("<br>")
document.write(`el ejercicio 6 :${contadorSeis}`)
document.write("<br>")

if (contadorUno>contadorDos&&contadorUno>contadorTres&&contadorUno>contadorCuatro&&    contadorUno>contadorCinco&&contadorUno>contadorSeis) {
    document.write(`el ejercicio que mas se ejecuto fue la primera con :${contadorUno} veces`)
    document.write("<br>")
} else if(contadorDos>contadorUno&&contadorDos>contadorTres&&contadorDos>contadorCuatro&&  contadorDos>contadorCinco&&contadorDos>contadorSeis){
    document.write(`el ejercicio que mas se ejecuto fue el segundo con :${contadorDos} veces`)
    document.write("<br>")
}else if(contadorTres>contadorUno&&contadorDos<contadorTres&&contadorTres>contadorCuatro&&  contadorTres>contadorCinco&&contadorTres>contadorSeis){
    document.write(`el ejercicio que mas se ejecuto fue el tercero con :${contadorTres} veces`)
    document.write("<br>")
}else if(contadorCuatro>contadorUno&&contadorCuatro>contadorDos&&contadorTres<contadorCuatro&&  contadorCuatro>contadorCinco&&contadorCuatro>contadorSeis){
    document.write(`el ejercicio que mas se ejecuto fue el cuarto con :${contadorCuatro} veces`)
    document.write("<br>")
}else if(contadorCinco>contadorUno&&contadorCinco>contadorDos&&contadorTres<contadorCinco&&contadorCuatro<contadorCinco&&contadorCinco>contadorSeis){
    document.write(`el ejercicio que mas se ejecuto fue el quinto con :${contadorCinco} veces`)
    document.write("<br>")
}else if(contadorSeis>contadorUno&&contadorSeis>contadorDos&&contadorTres<contadorSeis&&contadorCuatro<contadorSeis&&contadorSeis>contadorCinco){
    document.write(`el ejercicio que mas se ejecuto fue el sesto con :${contadorSeis} veces`)
    document.write("<br>")
}

if (contadorUno<contadorDos&&contadorUno<contadorTres&&contadorUno<contadorCuatro&&    contadorUno<contadorCinco&&contadorUno<contadorSeis) {
    document.write(`el ejercicio que menos se ejecuto fue la primera con :${contadorUno} veces`)
    document.write("<br>")
} else if(contadorDos<contadorUno&&contadorDos<contadorTres&&contadorDos<contadorCuatro&&  contadorDos<contadorCinco&&contadorDos<contadorSeis){
    document.write(`el ejercicio que menos se ejecuto fue el segundo con :${contadorDos} veces`)
    document.write("<br>")
}else if(contadorTres<contadorUno&&contadorDos>contadorTres&&contadorTres<contadorCuatro&&  contadorTres<contadorCinco&&contadorTres<contadorSeis){
    document.write(`el ejercicio que menos se ejecuto fue el tercero con :${contadorTres} veces`)
    document.write("<br>")
}else if(contadorCuatro<contadorUno&&contadorCuatro<contadorDos&&contadorTres>contadorCuatro&&  contadorCuatro<contadorCinco&&contadorCuatro<contadorSeis){
    document.write(`el ejercicio que menos se ejecuto fue el cuarto con :${contadorCuatro} veces`)
    document.write("<br>")
}else if(contadorCinco<contadorUno&&contadorCinco<contadorDos&&contadorTres>contadorCinco&&contadorCuatro>contadorCinco&&contadorCinco<contadorSeis){
    document.write(`el ejercicio que menos se ejecuto fue el quinto con :${contadorCinco} veces`)
    document.write("<br>")
}else if(contadorSeis<contadorUno&&contadorSeis<contadorDos&&contadorTres>contadorSeis&&contadorCuatro>contadorSeis&&contadorSeis<contadorCinco){
    document.write(`el ejercicio que menos se ejecuto fue el sesto con :${contadorSeis} veces`)
    document.write("<br>")
}