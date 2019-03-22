//Função somar, 1ª maneira
function somar(x,y){
	document.write("A soma de x e y é igual a\u00A0"+ (x + y));
}
somar(10,30);

//Função soma, 2ª maneira, passando os valores pelo prompt
function soma(a,b){
	document.write("<br>A soma de a e b é igual a\u00A0"+ (a + b));
}
var a = parseInt(prompt("Entre com o valor de a: "));
var b = parseInt(prompt("Entre com o valor de b: "));
soma(a,b);

//Função subtração
function sub(a1,b1){
	document.write("<br>A subtração de a1 e b1 é igual a\u00A0"+ (a1 - b1));
}
var a1 = parseInt(prompt("Entre com o valor de a1: "));
var b1 = parseInt(prompt("Entre com o valor de b1: "));
sub(a1,b1);

//Função multiplicação
function mult(a2,b2){
	document.write("<br>A multiplicação de a2 e b2 é igual a\u00A0"+ (a2 * b2));
}
var a2 = parseInt(prompt("Entre com o valor de a2: "));
var b2 = parseInt(prompt("Entre com o valor de b2: "));
mult(a2,b2);

//Função dividir
function div(a3,b3){
	document.write("<br>A divisão de a3 e b3 é igual a\u00A0"+ (a3 / b3));
}
var a3 = parseInt(prompt("Entre com o valor de a3: "));
var b3 = parseInt(prompt("Entre com o valor de b3: "));
div(a3,b3);