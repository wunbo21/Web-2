/*Exercicio
1- Ler dois valores a parti do prompt, calcular e imprimir da tela:
a.A soma destes valores;
b.O produto deles;
c.O quociente entre eles;
d.A diferença entre eles.

2- Elabore um programa em JS que calcule a média aritmetica de duas notas e exiba o resultado na tela

3- Desenvolva um programa em JS em que a variavel 1 recebe o valor 5, a variavel 2 recebe 3 e a variavel 3 recebe o resultado da subtração de var 1 e var 2 e mostra na tela a 
frase "Resultado da subtração é: concatenado com o valor do resultado */

//Questão 1
var n1 = parseInt(prompt("Entre com um valor:"));
var n2 = parseInt(prompt("Entre com um valor:"));

//Qst 1 letra A
document.write("<br>A soma de "+ n1 +"+"+ n2 +" é igual a\u00A0"+ (n1 + n2));

//Qst 1 letra B
document.write("<br>O produto entre "+ n1 +" e "+ n2 +" é igual a:"+ (n1 * n2));

//Qst 1 letra C
document.write("<br>A divisão entre "+ n1+" e "+ n2+" é igual a:"+ (n1 / n2));

//Qst 1 letra D
document.write("<br>A subtração entre "+ n1+" e "+ n2+" é igual a:"+ (n1 - n2));

//Questão 2
var nota1 = parseInt(prompt("Entre com um valor:"));
var nota2 = parseInt(prompt("Entre com um valor:"));
document.write("<br>A média das duas notas é igual a "+ ( (nota1 + nota2) / 2) );

//Questão 3
var v1 = 5;
var v2 = 3;
var v3 = (v1 - v2);
document.write("<br>A variavel 3 é igual a "+ v3);