let peso = document.querySelector('.peso')
let altura = document.querySelector('.altura')
let btnEnviar = document.querySelector('.btn-enviar')
let display = document.querySelector('.display')
let h1 = document.createElement('h1')
let span = document.createElement('span')
display.appendChild(h1)
display.appendChild(span)


const calcular = () =>{
    if(peso.value && altura.value){

        let imc = 0
        let alturaFormatada = altura.value.replace(',','.')
    
        imc = +peso.value / (+alturaFormatada * +alturaFormatada)
    
        displayInfo(imc.toFixed(2))
        zerarCampos()
    }
   
}

const displayInfo = (val) =>{
        display.style.background = '#5EAAA7';
        h1.innerText = `O seu IMC é de ${val}`
        
        switch(true){
            case (+val < 18.5):
                console.log('Você está abaixo do peso')
                span.innerText = `Você está abaixo do peso`
                break;
            case (+val >= 18.5 && +val <= 24.9):
                console.log('Você está com o peso normal')
                span.innerText = `Você está com o peso normal`
                break;
            case (+val >= 25 && +val <= 29.9):
                console.log('Você está com sobrepeso')
                span.innerText = `Você está com sobrepeso`
                break;
            case (+val >= 30 && +val <=34.9):
                console.log('Você está com obesidade de  Grau I')
                span.innerText = `Você está com obesidade de Grau I`
                break;
            case (+val >= 35 && +val <= 39.9):
                console.log('Você está com obesidade de Grau II')
                span.innerText = `Você está com obesidade de Grau II`
                break;
            case (+val >= 40):
                console.log('Você está com obesidade de Grau III ou Mórbida')
                span.innerText = `Você está com obesidade de Grau III ou Mórbida`
        }
}

const zerarCampos = () =>{
    peso.value = ''
    altura.value = ''
}