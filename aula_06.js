//método get do Date

var data = new Date();

document.write(data.getDay()+"<br>");
document.write(data.getMonth()+"<br>");
document.write(data.getUTCFullYear());

var hoje = new Date();

document.write("<br>O dia atual é "+ hoje.getDay());
document.write("<br>O mês atual é "+ hoje.getMonth());
document.write("<br>O ano atual é "+ hoje.getFullYear());

//Para mostrar o dia escrito e não número
var dia = new Date();
var dias = ["Domingo","Segunda","Terça","Quarta","Quinta","Sexta","Sábado"];
document.write("<br>"+dias[data.getDay()]);

var ano = new Date();
var mes = ["Janeiro","Fevereiro","Março","Abril","Maio","Junho","Julho","Agosto","Setembro","Outubro","Novembro","Dezembro"];
document.write("<br>"+mes[data.getMonth()]);

//GMTString - para definir o fuso horário internacional
var xis = new Date();
document.write("<br>"+data.toGMTString());

//LocaleString - para definir o fuso horário local
var zis = new Date();
document.write("<br>"+data.toLocaleDateString());

//Função getHours - para recuperar a hora
var pis = new Date();
document.write("<br>"+data.getHours());

//Função getUTCHours - para recuperar a hora internacional
var tus = new Date();
document.write("<br>"+data.getUTCHours());

//Função getSeconds - retorna os segundos
var pos = new Date();
document.write("<br>"+data.getSeconds());

//Função getTime - retorna os milisegundos
var cas = new Date();
document.write("<br>"+data.getTime());