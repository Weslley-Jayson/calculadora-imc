const form = document.querySelector('.form')

form.addEventListener('submit', function(event) {
    event.preventDefault()
    
    const inputPeso = form.querySelector('#peso')
    const inputAltura = form.querySelector('#altura')
    
    const peso = Number(inputPeso.value)
    const altura = Number(inputAltura.value)
    
    if (!peso) {
        setResultado('Peso inválido', false)
        return;
    }

    if (!altura) {
        setResultado('Altura inválida', false)
        return;
    }

    const imc = calcularImc(peso, altura)
    const nivelImc = getNivelImc(imc)

    setResultado(`Seu IMC é ${imc} (${nivelImc})`)
})

function calcularImc(peso, altura) {
    const imc = peso / (altura * altura)
    return imc.toFixed(2)
}

function getNivelImc(imc) {
    if(imc >= 40) {
        return 'Obesidade Grau III'
    }
    if(imc >= 35) {
        return 'Obesidade Grau II'
    }
    if(imc >= 30) {
        return 'Obesidade Grau I'
    }
    if(imc >= 25) {
        return 'Sobrepeso'
    }
    if(imc >= 18.5) {
        return 'Peso Nomal'
    } else {
        return 'Abaixo do Peso'
    }
}


function criaParagrafo() {
    const paragrafo = document.createElement('p')
    return paragrafo
}

function setResultado(msg, isValid) {
    const resultado = document.querySelector('.resultado')
    resultado.innerHTML = ''
    const paragrafo = criaParagrafo()

    if(isValid) {
        paragrafo.classList.add('resultado-true')
    } else {
        paragrafo.classList.add('resultado-false')
    }

    paragrafo.innerHTML = `${msg}`
    resultado.appendChild(paragrafo)
}