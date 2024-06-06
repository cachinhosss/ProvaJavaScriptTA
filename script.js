let nome = document.getElementById("nome")
let resposta = document.getElementById("resposta")

function Apertar()
{
    resposta.innerHTML = "Olá, " + nome.value + " tudo bem?"
}

//2
let cm = document.getElementById("Centimetro")
let conversao = document.getElementById("Conversao")

function Calcular()
{
    conversao.innerHTML = parseInt(cm.value) / 100
}

//3
let antecessor = document.getElementById("antes")
let sucessor =  document.getElementById("depois")
let RelaçãoEntreEles = document.getElementById("Contar")

function Valores()
{
}

//4
let primeirovalor = document.getElementById("Valor1")
let segundovalor =  document.getElementById("Valor2")
let MaiorValorentreEles = document.getElementById("MaiorValor")

function Maior()
{
    if ( primeirovalor.value < segundovalor.value)
        {
            MaiorValorentreEles.innerHTML = segundovalor.value
        }

        else
        {
            MaiorValorentreEles.innerHTML =  primeirovalor.value   
        }
}

//5
let Salario = document.getElementById("Salario")
let Calcule = document.getElementById("Calcule")

function Calculo()
{
    if (Salario.value > 1250)
        {
            contar.innerHTML = parseInt(Salario.value) + 0.01
        }

        else
        {
            contar.innerHTML = parseInt(Salario.value) + 0.15
        }
}

console.log("Exercício 07/6°")
//6
var d = 1
while(d <= 100)
    {
        console.log(d)
        d = d + 1
    }

console.log("Exercício 08/7°")

//7
var e = 50
while(e >= 0)
    {
        console.log(e)
        e = e - 5
    }

    console.log("Exercício 09/8°")
//8
var f = 100
while(f >= 0)
    {
        console.log(f)
        f = f - 10
    }
