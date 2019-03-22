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
var b2 = parseInt(prompt("Entre com o valor de b2: "));
sub(a1,b1);