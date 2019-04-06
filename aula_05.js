//Vetor

//Método construtor

var frutas = new Array("Maça","Pera","Tody","Morango");
document.write(frutas);

document.write("<hr>Na posição 1 o elemento é\u00A0"+frutas[2]); //Escolhe a posição

//Arrays indexados

//Função length- para mostrar a quantidade de elementos no array
var filme = new Array("Harry Potter e a Pedra Filosofal","Harry Potter e a Câmara secreta","Harry Potter e o Prisioneiro de Azkabam");
document.write("<hr>A quantidade de elementos é: "+frutas.length);

//Função indexOf - para identificar qual a posição do elemento
var comida = new Array("Churros","Sonho","Pavê","Prestigio");
document.write("<hr>A posição do elemento é:"+comida.indexOf("Pavê"));

//Função lastIndexOf - Informa qual a ultima ocorrência de um determinado 
var carro = new Array("Ferrari","Pagani","BMW","Mercedes");
document.write("<hr>A ultima posição do vetor carro é: "+carro.lastIndexOf("Mercedes"));

//Método literal - []
var lanche = ["Biscoito","Cuzcuz","Salgado","Refrigerante"];
document.write("<hr>"+lanche);

///Uma string também é um array
var a = "Açai";
document.write("<hr>"+a);
document.write("<hr>A quantidade de elementos é: "+a.length);

//Criando array com indice
var series = new Array();
series[0] = "American Gods";
series[1] = "The Good Place";
series[2] = "Dr. House";
series[3] = "The Flase";
document.write("<hr>"+series);

//Função de Ordenação

//Função reverse - Inverte a ordem dos elementos
var sopa = ["Milho","Ervilha","Legumes","Abobora"];
document.write("<hr>"+ sopa.reverse());

//Função sort - Coloca os elementos em ordem alfabética
var sopa = ["Milho","Ervilha","Legumes","Abobora"];
document.write("<hr>"+ sopa.sort());

//Cortes e Emendas

//Método join - Para alterar o separador
var dia = ["Domingo","Segunda","Terça","Quarta","Quinta","Sexta","Sábado"];
document.write("<hr>"+ dia.join("♦"));
document.write("<hr>"+ dia.join("♥"));
document.write("<hr>"+ dia.join("♠"));
document.write("<hr>"+ dia.join("♣"));

//Função concat - Para inserir no Array
var remedio = ["Aspirina", "Dipirona","Penegripe","Amoxilina"];
document.write("<hr>"+ remedio.concat("Aspirina","Novalgina"));

//Função slice - Retorna o elemento a partir de onde foi definido
var junina = ["Cocada","Arroz Doce","Curral","Bolo de Milho"];
document.write("<hr>"+ junina.slice(2));

/* Função splice - É utilizado para remover elementos do Array e incluir novos, o primeiro valor é a posição e o segundo é a quantidade de
elementos que vou excluir */
var natal = ["Rabanada","Torta de Limão","Torta Alemã","Pavê"];
document.write("<hr>"+ natal.splice(1,2,"Torta de Morango","Panetone"));
document.write("<hr>"+ natal);

//Função de Fila Fifo (first int first out) - O primeiro elemento a entrar e o primeiro a sair

//Método push - Adiciona elemento no final da fila
var aluno = ["Gabriel","Eric","Lucas","Matheus","André"];
document.write("<hr>O novo aluno(a) é: "+ aluno.push("Claudemiro"));
document.write("<hr>A nova lista de aluno é: "+ aluno.join(" "));

//Função shift - Para remover o primeiro elemento da fila
var bala = ["Mentos","Halls","Trident",];
document.write("<hr>A primeira bala a ser excluida é: "+ bala.shift());
document.write("<hr>"+ bala);

//Função pop - Para remover o ultimo elemento da fila
var refrigerante = ["Guarana","Coca-Cola","Sprite","Mineirinho"];
document.write("<hr>O ultimo elemento a ser excluido é: "+ refrigerante.pop());
document.write("<hr>A nova lista de refrigerante é: "+ refrigerante);

//Função unshift - Adiciona o elemento no inicio da fila
var programacao = ["C","Java","Python","Ruby","C++"];
document.write("<hr>O aluno que está furando fila é: "+ programacao.unshift("C#"));
document.write("<hr>A nova lista é: "+ programacao);