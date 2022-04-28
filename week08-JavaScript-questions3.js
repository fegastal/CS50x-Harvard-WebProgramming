// 1) Na linguagem JS podemos comparar valores de tipos diferentes.
// Nas comparações abaixo, qual tem como resultado de sua avaliação o valor true verdadeiro)?
// Resposta: 5 == "5"

const { appendFile } = require("fs");


// 2) Qual dessas palavras não é uma palavra reservada no JS?
// func.


// 3) O JS é uma linguagem de tipagem dinâmica. O que isso significa?
// O tipo das variáveis é conferido ao longo da execução do código.

// 4) Dado o código abaixo, escrito com JS,
// qual é o valor da variável resultado no final?

var numero1 = 21

var numero2 = 2

var resultado = (numero1 - 3 + 3) % 8 + numero2

// Resposta: 6


// 5) Qual dos métodos abaixo está presente em todos os objetos no JS?
// Resposta: object.toString()


// 6) Qual operador utilizado para detectar o tipo de uma variável?
// Resposta: typeof


// 7) Qual das seguintes alternativas representa a maneira correta de se criar uma String em JS?
// Resposta: var myString = "hello";


// 8) O que será impresso após a execução do código abaixo?

var soma = 8 + "2" - 5;
console.log(soma);

// Resposta: 77


// 9) Qual a maneira mais correta de se declarar uma função?
// Resposta: function hello(){}


// 10) Quais dos itens abaixo são importantes para uma API ser
// considerada RESTful?
// Resposta: Client-server, Stateless, Cacheable.


// 11) O que significa API?
// Resposta: Application Programming Interface


// 12) Qual dos conceitos abaixo é uma solução utilizada na integraçaõ
// de sistemas e na comunicação entre apps diferentes?
// Web Services


// 13) Dado o serviço REST usando a URI http://service.com. Qual das URIs
// a seguir representa a requisição de todos os posts incluídos na conta do usuário 433?
// Resposta: http://service.com/433/posts


// 14) Qual protocolo é usado pelos serviços de rede RESTfull?
// Resposta: HTTP


// 15) A comunicação entre o cliente e o servidor deve ser baseada em recursos e não em ações.
// Os recursos são identificados por?
// Resposta: URL


// 16) O que é REST?
// Resposta: É uma arquitetura baseada em padrões da web e usa
// o protocolo HTTP para comunicação de dados.


// 17) O que é uma biblioteca?
// Resposta: É um conjunto de funcionalidades implementadas que são
// escritas por uma interface de utilização (API).


// 18) Existem alguns tipos diferentes de APIs. Quais são?
// Resposta: Bibliotecas e Frameworks.
// APIs para Sistemas Operacionais
// Web API.


// 19) O que é um Framework?
// Resposta: São diferentes de bibliotecas no sentido de que eles podem
// oferecer um conjunto de APIs que implementam várias bibliotecas.


// 20) Qual das alternativas abaixo é a maneira mais correa de imprtar 
// o módulo http no Node.js?
// Resposta: var http = require('http');


// 21) 1. A função lerArquivo é chamada
//     2. Quando a função lerArquivo terminar de ler ele, ela irá chamar
//      o callback passando o resultado como parâmetro.
//     3. Imprime a string "Fim" no terminal.

lerArquivo('arquivo.txt', function(texto){
    console.log(texto)
});

console.log('Fim');


// 22) Qual dos exemplos abaixo é um JSON válido?

[
    {
        "id": 102,
        "name": "Fernanda",
        "idade": 30
    }
]


// 23) A sigla JSON significa Notação de Objetos JavaScript (JavaScript Object Notation).
// Ele é...
// Resposta: um padrão para estruturar a info de forma que ela seja lgível
// tanto para humanos quanto para computadores.


// 24) Qual arquivo ficam informações a respeito da aplicação e
// as dependências do projeto?
// Resposta: package.json;


// 25) Qual das alternativas a seguir são características do Noje.js?
// Resposta: Assíncrono e non-blocking.


// 26) Qual das alternativas abaixo deixam nossas funções acessíveis
// por quem importa nosso módulo?
// Resposta: export.NomeDaFuncao;


// 27) Qual dos trechos abaixo é capaz de enviar como resposta para a requisição?
// Resposta:

appendFile.length("/", function(request, response){
    response.send("<h1>Bem-vindo</h1");
    response.end();
});


// 28) Qual das alternativas abaixo refere-se à importação do construtor
// EventEmitter do módul events do Node.js?
var EventEmitter = require('events').EventEmitter;
