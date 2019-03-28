//Exercicio 1
var nota = prompt("Digite a média do aluno");
var nota = (nota<7?"Reprovado":"Aprovado");
document.write("Você está\u00A0"+ nota);

//Exercicio 2
function juros(valor){
    return valor = valor - (valor * 0.10)
}
var valor = parseFloat(prompt("Entre com o valor do produto "));
document.write("<br>O produto com 10 porcento de desconto custa\u00A0"+ juros(valor));

//Exercicio 3
var x = parseInt(prompt("Digite o valor de x: "));
var y = parseInt(prompt("Digite o valor de y: "));
var soma = x + y;
if(soma <= 20){
    soma = soma -5;
    document.write("<br>O valor é igual a\u00A0"+ soma);
}
else{
    soma = soma + 8;
    document.write("<br>O valor é igual a\u00A0"+ soma);
}

//Exercicio 4
var numero = parseInt(prompt("Digite um numero: "));
var numero = (numero<10?"O valor é menor que 10":"O valor é maior que 10");
document.write("<br>"+ numero);

//Exercicio 5
var sexo = prompt("Qual seu sexo? Masculino ou Femenino");
var altura = parseFloat(prompt("Qual a sua altura: "));
if(sexo == "Masculino"){
    var peso = (altura * 72.7) - 58;
    document.write("<br>O seu peso ideal como homem é igual a\u00A0"+ peso);
}

else {
    var peso = (altura * 62.1) - 44.7;
    document.write("O seu peso ideal se você for mulher é\u00A0"+ peso);
}
