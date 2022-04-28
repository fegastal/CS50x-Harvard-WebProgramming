// 1) Qual a forma correta de executar a função saudação?

function desafio(){
    console.log("Vamos ao desafio!")
}

// Resposta: b) desafio()


// 2) Analisando o código exibido qual será o resultado exibido:

function f1 (n) {
    if (n % 2 == 0) {
        
        return --n

    } else { 
        return ++n
    }
}
console.log(f1(8))

// Resposta: c) 7
// Porque na função f1, será dado um parâmetro n. Esse parâmetro n será dividido por 2 e seu módulo será 0.
// Ou seja, sabemos que n é par se seu módulo for 0.
// Se isso acontecer, vai retornar o número ímpar (n - 1)
// Se o seu módulo não for 0, ou seja, se n for ímpar, vai retornar (n + 1): ou seja, um valor par.
// Portanto, considerando-se que n seja igual a 8 e 8 é um número par, retornará 7.


// 3) Analise as expressões abaixo  e selecione a opção com a sequência correta de valores lógicos retornados:

var a1=true && true
var a2=true && false
var a3=false && true
var o1=true || true
var o2=false || true
var n2 = !false
var n3 = !"Gato"

console.log(a1,a2,a3,o1,o2,n2,n3)

// Resposta: B) true false false true true true false
//true && true = true
//true && false = false
//false && true = false
//true || true = true
//false || true = true
//!false = true
//!"Gato" = false


// 4) O que o código abaixo irá imprimir?

function desafio(n) { 
    var text = " "
    var i = 1
    while (i <= n) {
        text += 1 + '; '
        i++
    } return text
}
console.log(desafio(8))

// Considerando-se que n=8 e começando com i=1,
// Enquanto o i for menor ou IGUAL a 8,
// text = text + 1 + '; '
// e o i vai acrescentar em uma unidade
// então: c) 1; 2; 3; 4; 5; 6; 7; 8;


// 5) Com relação ao Java Script, analise as afirmativas a seguir:

// I. o operador ++ é utilizado para incrementar variáveis de 1.
// Por exemplo, se x vale 34, y = ++x faz x igual a 35 e depois y igual a 35.
// Resposta: Correto.

// II. o operador binário % retorna o inteiro restante da divisão dos dois operandos.
// Por exemplo, em x = 13 % 8, x assume o valor 5.
// Resposta: Correto.

// III. o operador != retorna verdadeiro caso os operandos não sejam iguais.
//Por exemplo, se a = 7 e b = 9, em a != 7; retorna verdadeiro e em a != b; retorna falso.
// Resposta: Não, incorreto.

// Resposta final: d) Somente as afirmativas I e II estão corretas.


// 6) Os nomes de cada aluno de uma turma são guardados como elementos de um array.
// Sabendo que esse array está armazenado em uma variável chamada nomes, qual trecho
// de código abaixo retornará o nome da última pessoa no array? 

// Resposta: O nome da última pessoa do array será retornado pela segunda alternativa,
// ou seja, nomes[nomes.lenght - 1]. Lembrar sempre que a posição começa em [0]
// Como acessar itens de um array?
// Em basicamente todas as linguagens de programação temos uma convenção de que a
// contagem dos índices de um array começa com zero e não com um.
// Sendo assim, temos que nomes.lenght retorna o tamanho da variável nomes, porém,
// não existe o índice que tem o tamanho de lenght dado que começamos a contagem com zero
// e não com um, sendo assim, o acesso de nomes[nomes.lenght - 1] está correto.


// 7) O que o trecho de código abaixo irá imprimir?

g = (x,y) => x**2+y

console.log(typeof g)

// Resposta: Nesse caso, estaremos pedindo pra imprimir o tipo de g
// E, no caso, g é uma função. Então b) function


// 8) O que faz a função Math.round()?
// Resposta: Retorna o valor de um número arredondado para o inteiro, mais próximo.


// 9) O que o trecho de código abaixo irá imprimir?

var nomes = ["Francisco", "Gabriel", "João", "José"]
for(var i=0; i<nomes.length; i++) {
    if(nomes[i].length > 5){
        console.log(nomes[i]);
    }
}

// Resposta: Franscisco Gabriel
// Considerando-se que tem os um array de 4 itens,
// Para a posição 0 (caractere inicial de um dos itens do array), considerando-se que i seja menor que o comprimento
// desse item e que ele seja incrementado toda vez que entrar em "for"
// Quais são os itens que têm mais de 5 letras, portanto? :) É só analisar.


// 10) A função misteriosa abaixo recebe foi programada para receber dois parâmetros.
// O primeiro, um array de números.
// O segundo um número qualquer.
// Qual das alternativas abaixo descreve o que a função misteriosa faz?

function misteriosa(arrayDeNumeros, n){
    var arrayResultado = [];
    for (var i = 0; i < arrayDeNumeros.length; i++){
        if(arrayDeNumeros[i] > n){
            arrayResultado.push(arrayDeNumeros[i]);
        }
    }
    return arrayResultado;
}

// Resposta: Dos números presentes em arrayDeNumeros ela guarda somente os que são maiores que n
// em arrayResultado e, no final, ela retorna o arrayResultado.


// 11) Um desenvolvedor criou uma função para retornar a menor idade contida no arrayDeIdades.
// No entanto, esta função não está funcionando corretamente. Por quê? 

function menorIdade(arrayDeIdades) {

    if(arrayDeIdades.length == 0) return undefined;

    var menor = arrayDeIdades[0];
    for (var i = 1; i < arrayDeIdades.length; i++) {
        if(menor < arrayDeIdades[i]) {
            menor = arrayDeIdades[i];
        }
    }
    return menor;
}

// Resposta: d) A condição do segundo if deveria comparar usando o “>” e não com o “<”
// Em caso de o valor armazenado na variável for menor do que o elemento do array,
// então o valor maior acaba sendo armazenado, sendo que deveria ocorrer o oposto.
// Somente quando o valor armazenado for maior é que deve ocorrer a nova atribuição à variável menor.


// 12) Analise o código da função abaixo e escolha a opção que descreve o que ela faz.

function desconhecida(){
    var arrayDeRetorno = [];
    for(var i = 1; i <= 6; i++) {
        var numero = Math.floor(Math.random() * 61);
        arrayDeRetorno.push(numero);
    }
    return arrayDeRetorno;
}

// Resposta: D) Retorna um array de números inteiros aleatórios entre 0 e 60
// Math.random() * 61 --> gera um número aleatório entre 0 (incluso) e 61 (excluso), ou seja [0, 61)
// Gera um número qualquer, muito provavelmente decimal. Exemplo: 12,32423
// math.floor( X ) "arredonda pra baixo" o número X para um inteiro
// math.floor(12,32423) = 12
// Math.floor(Math.random() * 61) --> gera um número aleatório entre [0, 61), e depois pega só a parte inteira deste número
// Ou seja, só podem ser 0, 1, 2, 3, ..., 58, 59, 60
// Toda vez que o código lê o comando Math.floor(Math.random() * 61),
// é como se ele "jogasse" um dado de 61 lados (mas começando do 0, até 60)
// quantas vezes ele joga esse dado?
// var i = 1; i<=6; i++
// 1 -> jogo o dado, recolho o resultado e i++
// 2 -> jogo o dado, recolho o resultado e i++
// 3 -> jogo o dado, recolho o resultado e i++
// 4 -> jogo o dado, recolho o resultado e i++
// 5 -> jogo o dado, recolho o resultado e i++
// 6 -> jogo o dado, recolho o resultado e termino
// push > você começa uma lista vazia


// 13) A função oQueIssoFaz definida abaixo recebe como parâmetro uma lista de strings chamada de arrayDeNomes.
// O que essa função realiza?

function oQueIssoFaz(arrayDeNomes) {
    if(arrayDeNomes.length == 0) return undefined;

    arrayDeNomes.forEach(nome => {
        console.log('Nome: ' + nome)
    });
}

// Resposta: Exibe cada um dos nomes no console, precedido pela string “Nome: ”


// 14) Um teatro vai exibir a peça de Peter Pan e quer mostrar em seu site quais atores irão
// representar cada um dos personagens. O código do programador começou a ser feito,
// mas ele não sabe como concluir. Você pode ajudar?

function listarPersonagens() {
    var pessoas = [
        { nome: 'Josué', papel: 'Peter Pan' },
        { nome: 'Joseayne', papel: 'Wendy' },
        { nome: 'Guilherme', papel: 'Capitão Gancho' },
        { nome: 'Luiza', papel: 'Tinker Bell' }
    ];
}

// Resposta: O forEach executa o callback fornecido uma vez para
// cada elemento da ordem com um valor atribuido.

pessoas.forEach(pessoa => {
    console.log('Ator:' + pessoa.nome);
    console.log('Papel: ' + pessoa.papel);
});


// 15) O programador escreveu a função maiorNome abaixo
// para que ela retornasse o maior nome do arrayDeNomes. Por que ela não funciona como esperado?

function maiorNome(arrayDeNomes) {

    // Se o arrayDeNomes estiver vazio, retornar undefined
    if(arrayDeNomes.length == 0) return undefined;

    // Atribuindo o primeiro elemento a variável maior
    var maior = arrayDeNomes[0];
    for(let i = 1; i < arrayDeNomes.length; i++) {
        if(maior.length < arrayDeNomes[1]) {
            maior = arrayDeNomes[i];
        }
    }
}

// Exemplo:
//'Fernanda', 'Luana', 'Daniel'
//arrayDeNomes[0] = 'Fernanda'= maior = 8 caract
//'Luana' = arrayDeNomes[1] = menor que o [0] = 5 caract
//Então, maior != arrayDenomes[i]
// D) A condição do if está comparando o comprimento da string na variável maior com a
// string que está no arrayDeNomes. Deveria comparar com o tamanho da string que está
// no arrayDeNomes, e também a variável i no laço deveria começar em 0 e também não
// consta a linha return maior após o laço.


// QUESTÕES EXTRAS!

// 1) O que são variáveis?
//  Uma maneira de guardar informações na memória.

// 2) Qual das opções abaixo é uma criação válida de variável em Javascript?
// ) var nome = 'Pompeu Pompílio Pomposo'

// 3) O que o código abaixo irá imprimir?

var anoNascimento = 2005;
var anoAtual = 2021;
if(anoAtual - anoNascimento < 18){
    console.log("Proibida a entrada.");
} else {
    console.log("Entrada permitida");
}

// Resposta: c) Proibida a entrada.


// 4) Sabe-se que a autonomia de um carro é dada pela distância que ele pode
// andar até que seu combustível acabe. Um carro é capaz de percorrer 10km
// por litro de gasolina.
// Como seria uma função que retornasse a autonomia desse carro a partir da
// quantidade de combustível presente no tanque?

function autonomia(qtdCombustivel){
    return 10 * qtdCombustivel;
}


// 5) Qual das funções abaixo retorna 5 quando recebe 3 como parâmetro?

function calcula(x){
    return 2 * x - 1;
}

// (2 * 3) - 1 = 5

// 6) Analisando o código abaixo, tratar-se:

converterSegundo = (totalSegundos) => {
    console.log("Horas  :", parseInt(totalSegundos/3600))
    console.log("Minutos:   ", parseInt((totalSegundos%3600)/60))
    console.log("Segundos:  ", parseInt((totalSegundos%360)%60))
}

// Resposta: Uma Arrow function em JS que converte valores de total de segundos em
// horas, minutos e segundos, utilizando de divisões e/ou e operações de módulo,
// convertendo os resultados através da função de transformação de tipo de real para
// inteiro.


// 7) Ainda usando a função da questão anterior obtivemos o seguinte
// resultado em tela, com base neste resultado qual foi o número informado
// como argumento da função (totalSegundos)

//Resultados de output:
// Horas: 3
// Minutos: 31
// Segundos: 30

// Resposta: converterSegundo(12690);