function limpar(){
    document.getElementById('visor').value='';
}

function preencher(valor){
    document.getElementById('visor').value+=valor;
}

function calcular(){
    var resultado=0;
    resultado=document.getElementById('visor').value;
    document.getElementById('visor').value='';
    document.getElementById('visor').value=eval(resultado);
}

function limpar(){
    document.getElementById('visor').value='';
}

function imc(){
    var peso = document.getElementById('kg').value;
    var altura = document.getElementById('m').value;
    var imc = peso / (altura * altura);
    document.getElementById('massa').value=imc;
}