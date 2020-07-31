// Carne - 450gr por pessoa, se for + de 6 horas, aumentar para 700g
// Cerveja - 1200ml por Pessoa, se for + de 6 horas, aumentar para 2000ml
// Refrigerante/Agua - 1000ml po pessoal, se for + de 6 horas aumentar para 1500ml

// Crianças valem por 0,5

let inputAdultos = document.getElementById('adultos')
let inputCriancas = document.getElementById('criancas')
let inputDuracao = document.getElementById('duracao')

let resultado = document.getElementById('resultado')

function calcular() {
    console.log('calculando...')
    let adultos = inputAdultos.value
    let criancas = inputCriancas.value
    let duracao = inputDuracao.value
    let carne = carnePorPessoa(duracao)
    let cerveja = cervejaPorPessoa(duracao)
    let refri = refriPorPessoa(duracao)

    let qtdTotalCarne = carne * adultos + (carne / 2 * criancas)
    let qtdTotalCerveja = cerveja * adultos
    let qtdTotalRefri = refri * adultos + (refri / 2 * criancas)
    console.log('total de carne é: ' + qtdTotalCarne)
    console.log('total de cerveja é: ' + qtdTotalCerveja)
    console.log('total de refri ou água é: ' + qtdTotalRefri)

    resultado.innerHTML = `<p>Com carne: ${qtdTotalCarne / 1000}kg de Carne</p>`
    resultado.innerHTML += `<p>Com carne e linguiça: ${((qtdTotalCarne / 2) / 1000).toFixed(1) }kg de cada</p>`
    resultado.innerHTML += `<p>Com carne e linguiça e frango: ${((qtdTotalCarne / 3) / 1000).toFixed(1)}kg de cada</p>`
    resultado.innerHTML += `<p>Cerveja 350ml : ${(qtdTotalCerveja / 350).toFixed(0)} Latas</p>`
    resultado.innerHTML += `<p>Cerveja 269ml : ${(qtdTotalCerveja / 269).toFixed(0)} Latas</p>`
    resultado.innerHTML += `<p>Refri / Água: ${qtdTotalRefri / 1000}L</p>`
    // teste para commit
}

function carnePorPessoa(duracao) {
    if(duracao >= 6) {
        console.log('700')
        return 700
    } else {
        return 450
    }
}

function cervejaPorPessoa(duracao) {
    if(duracao >= 6) {
        return 2000
    } else {
        return 1200
    }
}

function refriPorPessoa(duracao) {
    if(duracao >= 6) {
        return 1500 
    } else {
        return 1000
    }
}