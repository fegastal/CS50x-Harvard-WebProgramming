// 1) O que será impresso no terminal após a execução do código abaixo?

var num = 10;
function foo(){
    console.log(num);
    var num = 2;
    console.log(num);
}
foo();
console.log(num);

// undefined
// 2
// 10


// 2) Um JSON só pode ser interpretado corretamente se
// ele for um JSON válido, estando de acordo com todas as regras
// de sintaxe que definem um JSON. Qual das opções abaixo correspondem a um JSON válido?

[
    {
        "user_id": 37,
        "username": "fernandagastal",
        "last_access: "YYYY-MM-DDThh:mmTZD"
    },
    {
        "user_id": 15,
        "username": "teste",
        "last_access": "2017-07-23T12:55-03:00"
    }
]

// 3) Devido ao funcionamento assíncrono, no Node.js é
// muito comum utilizarmos callbacks, funções que são chamadas ao 
// fim de um procedimento. Utilizando JS e Node.js, qual das opções abaixo
// não representa uma callback correta?

var array = [1, 2, 3, 4, 5, 6];

var arrayDobrado = array.map(function(num) {

    return num * 2;

});


const { appendFile } = require("fs");
// 4) Um dos conceitos fundamentais do Node.js é o conceito de módulo.
// Ele nos permite dividir e agrupar funcionalidades similares, facilitando a manutenção e aumentando
// a coesão do código. Essas funções importadas para quando for necessário utilizá-las.
// Qual das alternativas corresponde a importação e utilização de um m´dulo com Node.js?

var http = require("http");
http.createServer(function(req, res) { console.log("Request recebido."); });


// 5) Qual das opções abaixo corresponde a um código
// JS que percorre a array e imprime seus elementos de maneira correta?

var frutas = ["Cupuaçu", "Mangaba", "Pitaia", "Cajá", "Araticum"]
for(var i = 0; i < frutas.length; ++i) {
    console.log(frutas[i])
}


// 6) Qual a forma correta de instanciar um novo
// objejto na linguagem JS, dado o construtor function Pessoa(nome){}?

var pessoa = new Pessoa("Roberto");

// 7) Utilizando Express para criar uma API RESTful com Node.js,
// é possível definir de forma simples as rotas da nossa aplicação. 
// Elas definem as ações a serem realizadas quando uma requisição HTTP com determinado
// método é realizada em uma determinada URI.

// Queremos criar uma rota que sirva para criar um novo usuário na nossa app.
// Qual a alternativa correspondente a rota correta para a criação de um novo usuário
// em nossa aplicação?

app.post("/usuario", function(request, response) {});

// 8) Qual o resultado proveniente da ordenação do array a seguir?

var array = [50, 60, 80, 90, 10, 100, 30, 40, 20, 70];
var saida = array.sort((a,b) => b - a);

console.log(saida.join(' , '));

// 100, 90, 80, 70, 60, 50, 40, 30, 20, 10


// 9) Em uma API RESTfull, a interface de comunicação é baseada em recursos,
// não em ações. Qual das URIs abaixo não correspondem à interface de comunicação de uma API RESTfull?

/usuario/save

// pois save é uma ação.


// 10) O que os métodos push e splice, do objeto array, fazem, respectivamente?

// O método push insere um elemento ao final de uma array
// O método splice remove um elemento do array dada uma posição
// E o reorganiza para que não fique o valor undefined
// na posição do elemento retirado.