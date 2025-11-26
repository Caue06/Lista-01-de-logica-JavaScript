const exercicio01 = document.querySelector("#ex01")
const exercicio02 = document.querySelector("#ex02")
const exercicio03 = document.querySelector("#ex03")
const exercicio04 = document.querySelector("#ex04")
const exercicio05 = document.querySelector("#ex05")
const exercicio06 = document.querySelector("#ex06")
const exercicio07 = document.querySelector("#ex07")
const exercicio08 = document.querySelector("#ex08")
const exercicio09 = document.querySelector("#ex09")
const exercicio10 = document.querySelector("#ex10")
const exercicio11 = document.querySelector("#ex11")
const exercicio12 = document.querySelector("#ex12")
const exercicio13 = document.querySelector("#ex13")
const exercicio14 = document.querySelector("#ex14")
const exercicio15 = document.querySelector("#ex15")
const exercicio16 = document.querySelector("#ex16")
const exercicio17 = document.querySelector("#ex17")
const exercicio18 = document.querySelector("#ex18")
const exercicio19 = document.querySelector("#ex19")
const res = document.querySelector(".res")

exercicio01.addEventListener("click", () => {
    res.innerHTML = ""
    let nome = prompt("Digite o seu nome:")
    res.innerHTML = `Seja Bem-Vindo, ${nome}`
    //1) Faça um programa que solicite o nome do usuário e exiba uma mensagem de saudação.
})

exercicio02.addEventListener("click", () => {
    res.innerHTML = "Soma"
    let numero1 = parseFloat(prompt("Digite o primeiro número:"))
    let numero2 = parseFloat(prompt("Digite o segundo número:"))
    res.innerHTML = `A soma dos números digitados é : ${numero1 + numero2}`

    // 2) Faça um programa que peça ao usuário para digitar dois números e exiba a soma desses números.
})

exercicio03.addEventListener("click", () => {
    res.innerHTML = "Subtração"
    let numero1 = parseFloat(prompt("Digite o primeiro número:"))
    let numero2 = parseFloat(prompt("Digite o segundo número:"))
    res.innerHTML = `A subtração dos números digitados é de ${numero1 - numero2}`
    // 3) Faça um programa que peça ao usuário para digitar dois números e exiba a subtração desses números.
})

exercicio04.addEventListener("click", () => {
    res.innerHTML = "Mulriplicação"
    let numero1 = parseFloat(prompt("Digite o primeiro número:"))
    let numero2 = parseFloat(prompt("Digite o segundo número:"))
    res.innerHTML = `A multiplicação dos números digitados é de ${numero1 * numero2}`
    // 4) Faça um programa que peça ao usuário para digitar dois números e exiba a multiplicação desses números.
})

exercicio05.addEventListener("click", () => {
    res.innerHTML = "Divisão"
    let numero1 = parseFloat(prompt("Digite o primeiro número:"))
    let numero2 = parseFloat(prompt("Digite o segundo número:"))
    res.innerHTML = `A divisão dos números digitados é de ${(numero1 / numero2).toFixed(2)}`
    // 4) Faça um programa que peça ao usuário para digitar dois números e exiba a divisão desses números.
})

exercicio06.addEventListener("click", () => {
    res.innerHTML = ""
    let numeroDigitado = parseFloat(prompt("Digite um número para ver o seu sucessor:"))
    res.innerHTML = `O Sucessor do número digitado: ${numeroDigitado + 1}`
    // 6)  Faça um programa que peça ao usuário para digitar um número e exiba o sucessor desse número.
})

exercicio07.addEventListener("click", () => {
    res.innerHTML = ""
    let numeroDigitado = parseFloat(prompt("Digite um número para ver o seu antecessor:"))
    res.innerHTML = `O Antecessor do número digitado: ${numeroDigitado - 1}`
    // 7)  Faça um programa que peça ao usuário para digitar um número e exiba o antecessor desse número.
})

exercicio08.addEventListener("click", () => {
    let baseRetangulo = parseFloat(prompt("Digite a base do retângulo:"))
    let alturaRetangulo = parseFloat(prompt("Digite altura do retângulo:"))
    res.innerHTML = `A área do retângulo é ${baseRetangulo * alturaRetangulo}`
    // 8) Crie um programa que leia a base e a altura de um retângulo e exiba a sua área.
})

exercicio09.addEventListener("click", () => {
    let baseTriangulo = parseFloat(prompt("Digite a base do triângulo"))
    let alturaTriangulo = parseFloat(prompt("Digite a altura do triângulo"))
    let areaTriangulo = baseTriangulo * alturaTriangulo / 2
    res.innerHTML = `A área do Triângulo é ${areaTriangulo}`
    // 9) Crie um programa que leia a base e a altura de um triângulo e exiba a sua área.
})

exercicio10.addEventListener("click", () => {
    let ladoQuadrado = parseFloat(prompt("Digite o lado do quadrado:"))
    res.innerHTML = `A área do quadrado é de: ${ladoQuadrado + 2}`
    // 10) Crie um programa que leia a base e a altura de um quadrado e exiba a sua área.
})

exercicio11.addEventListener("click", () => {
    let raio = parseFloat(prompt("Digite o raio do circulo:"))
    let areaCirculo = Math.PI * raio ** 2
    res.innerHTML = `A área do circulo é de: ${areaCirculo.toFixed(2)}`
    // 11) Crie um programa que leia a base e a altura de um circulo e exiba a sua área.
})

exercicio12.addEventListener("click", () => {
    let notas = 0
    for (let contadora = 1; contadora < 4; contadora++) {
        notas += parseFloat(prompt(`Digite a ${contadora}ª nota:`))
    }

    res.innerHTML = `A média das notas é: ${notas / 3}`
    // 12) Faça um programa que receba três notas de um aluno e exiba a média aritmética.
})

exercicio13.addEventListener("click", () => {
    let numeroDigitado = parseFloat(prompt("Digite um número para ver o seu dobro:"))
    res.innerHTML = `O dobro do número digitado é: ${numeroDigitado * 2}`
    // 13) Crie um programa que receba um número inteiro e exiba o seu dobro.
})

exercicio14.addEventListener("click", () => {
    let numeroDigitado = parseFloat(prompt("Digite um número real para exibir a sua parte inteira:"))
    res.innerHTML = `A parte inteira do número digitado é: ${Math.trunc(numeroDigitado)}`
    // 14) Escreva um programa que leia um número real e exiba a sua parte inteira.
})

exercicio15.addEventListener("click", () => {
    let peso = parseFloat(prompt("Digite o seu peso em quilos:"))
    let altura = parseFloat(prompt("Digite a sua altura:"))

    let imc = peso / (altura * altura)
    res.innerHTML = `O seu indice de masssa corporal(IMC) é: ${imc.toFixed(2)}`
    // 15) Crie um programa que leia o peso e a altura de uma pessoa e exiba o seu Índice de Massa Corporal (IMC).
})

exercicio16.addEventListener("click", () => {
    let nomeProduto = prompt("Digite o nome do produto:")
    let precoProduto = parseFloat(prompt("Digite o preço produto:"))

    let desconto = 10 / 100 * precoProduto
    let precoComDesconto = precoProduto - desconto

    res.innerHTML = `Produto: ${nomeProduto} | Preço com 10% de desconto: ${precoComDesconto}`
    // 16) Escreva um programa que leia o nome de um produto e o seu preço, e exiba uma mensagem informando o nome do produto e o preço com 10% de desconto.
})

exercicio17.addEventListener("click", () => {
    let primeiroNome = prompt("Digite o primeiro nome:")
    let segundoNome = prompt("Digite o segundo nome:")
    let terceiroNome = prompt("Digite o terceiro nome:")

    let primeiraIdade = parseInt(prompt("Digite a idade do(a) " + primeiroNome + " :"))
    let segundaIdade = parseInt(prompt("Digite a idade do(a) " + segundoNome + " :"))
    let terceiraIdade = parseInt(prompt("Digite a idade do(a) " + terceiroNome + " :"))

    let mediaIdade = (primeiraIdade + segundaIdade + terceiraIdade) / 3

    res.innerHTML = "A media das idade do " + primeiroNome + ", " + segundoNome + " e " + terceiroNome + " é: " + mediaIdade
    // 17) Crie um programa que leia o nome e a idade de três pessoas e exiba a média das idades.
})

exercicio18.addEventListener("click", () => {
    let metros = parseFloat(prompt("Digite um valor em metros: "))

    let centimetros = metros * 100

    let milimetros = metros * 1000

    res.innerHTML = metros + " metros em centimetros: " + centimetros + " | e " + metros + " metros em milimetros: " + milimetros

    // 18) Faça um programa que solicite ao usuário um valor em metros e exiba o mesmo valor em centímetros e milímetros.
})

exercicio19.addEventListener("click", () => {
    let baseTriangulo = parseFloat(prompt("Digite a base do Triangulo:"))
    let alturaTriangulo = parseFloat(prompt("Digite a altura do Triangulo:"))

    let hipotenusa = Math.sqrt(baseTriangulo ** 2 + alturaTriangulo ** 2)

    res.innerHTML = "O valor da hipotenusa é: " + hipotenusa.toFixed(2)
    // 19) Escreva um programa que leia a base e a altura de um triângulo e exiba o valor da hipotenusa.
})
