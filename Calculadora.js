let number_one; 
let number_two;
let resultado;
let operacion;

function dato_one(){
    document.getElementById("input_data").innerText =document.getElementById("input_data").textContent + "1";
}
function dato_two(){
    document.getElementById("input_data").innerText =document.getElementById("input_data").textContent + "2";
}
function dato_tres(){
    document.getElementById("input_data").innerText =document.getElementById("input_data").textContent + "3";
}
function dato_cuatro(){
    document.getElementById("input_data").innerText =document.getElementById("input_data").textContent + "4";
}
function dato_cinco(){
    document.getElementById("input_data").innerText =document.getElementById("input_data").textContent + "5";
}
function dato_seis(){
    document.getElementById("input_data").innerText =document.getElementById("input_data").textContent + "6";
}
function dato_siete(){
    document.getElementById("input_data").innerText =document.getElementById("input_data").textContent + "7";
}
function dato_ocho(){
    document.getElementById("input_data").innerText =document.getElementById("input_data").textContent + "8";
}
function dato_nueve(){
    document.getElementById("input_data").innerText =document.getElementById("input_data").textContent + "9";
}
function dato_cero(){
    document.getElementById("input_data").innerText =document.getElementById("input_data").textContent + "0";
}

function suma(){
    number_one = parseInt(document.getElementById("input_data").textContent)
    document.getElementById("input_data").textContent = "";
    operacion = "suma";
    //document.getElementById("oper").textContent = "+";
}
function resta(){
    number_one = parseInt(document.getElementById("input_data").textContent)
    document.getElementById("input_data").textContent = "";
    operacion = "resta"
}
function multiplicar(){
    number_one = parseInt(document.getElementById("input_data").textContent)
    document.getElementById("input_data").textContent = "";
    operacion = "multiplicar"
}
function dividir(){
    number_one = parseInt(document.getElementById("input_data").textContent)
    document.getElementById("input_data").textContent = "";
    operacion = "dividir"
}

function igual(){
    
    number_two = parseInt(document.getElementById("input_data").textContent)
    document.getElementById("input_data").textContent = "";
    if(operacion == "suma"){
        document.getElementById("ouput_data").textContent = number_one + number_two;
        number_one = undefined;
        number_two = undefined;
    }else if(operacion == "resta"){
        document.getElementById("ouput_data").textContent = number_one - number_two;
        number_one = undefined;
        number_two = undefined;
    }else if(operacion == "multiplicar"){
        document.getElementById("ouput_data").textContent = number_one * number_two;
        number_one = undefined;
        number_two = undefined;
    }else if(operacion == "dividir"){
        document.getElementById("ouput_data").textContent = number_one / number_two;
        number_one = undefined;
        number_two = undefined;
    }
}



/*
if(document.getElementById("igual").onclick == true){
    number_two = parseInt(document.getElementById("input_data").textContent)
    resultado = number_one + number_two
    console.log(resultado);
}*/