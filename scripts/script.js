'use strict'; 

addEventListener('load',()=>{
    // Declaración de variables; 
    

    // Inicialización de variables; 


    // Instrucciones; 


    // Funciones;
    // Cálculo del perímetro y el área de un cuadrado y un triángulo; 
    console.group('Cuadrilátero'); 
    let cuadrilatero = (lado1,lado2)=>{
        let perimetro = lado1*4; 
        let area = lado1*lado2;
        return ({
            perimetro,
            area
        })
    }
    console.log(cuadrilatero(4,4)); 
    console.groupEnd('Cuadrilátero'); 

    console.group('Triángulo'); 
    let triangulo = (base,lado1,lado2,altura)=>{
        let perimetro = base+lado1+lado2; 
        let area = (base*altura) /2;
        return{
            perimetro,
            area  
        }
    }

    console.log(triangulo(6,4,4,3)); 
    console.groupEnd('Triángulo'); 

    console.group('Circulo'); 
    let circulo = (radio)=>{
        let diametro = radio*2; 
        let perimetro = 2 * Math.PI * radio; 
        let area = (Math.pow(radio,2)) * Math.PI;
        // Otra forma de hacer el exponente;
        let segundaArea = (radio ** 2) *Math.PI;  

        return{
            diametro,
            perimetro,
            area,
            segundaArea
        }
    }

    console.log(circulo(5)); 
    console.groupEnd('Circulo'); 

    // Cálculo de un triángulo Isosceles; 
    console.group('Triángulo isosceles'); 
    let trianguloIsosceles = (base,lado) =>{
        let altura = Math.sqrt((Math.pow(lado,2))-(Math.pow(base,2)/4)); 
        return altura; 
    }
    console.log(`La altura del tríangulo es:`,trianguloIsosceles(6,4));
    console.groupEnd('Triángulo isosceles'); 


}); 