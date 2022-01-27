let estado = document.getElementById('estado')

function criaEstados(){
    let arrayEstado = ['AC',
    'AL',
    'AP',
    'AM',
    'BA',
    'CE',
    'DF',
    'ES',
    'GO',
    'MA',
    'MT',
    'MS',
    'MG',
    'PA',
    'PB',
    'PR',
    'PE',
    'PI',
    'RJ',
    'RN',
    'RS',
    'RO',
    'RR',
    'SC',
    'SP',
    'SE',
    'TO']
    for(let index = 0; index < arrayEstado.length; index += 1){
        let option = document.createElement('option')
        option.value = arrayEstado[index].toLowerCase()
        option.innerText = arrayEstado[index]
        estado.appendChild(option)
    }
} 
criaEstados()

let data = document.querySelector('#data')

data.addEventListener('change', function () {
    if(data.value.length == 0){
        alert('A data não foi preenchida!')
    }
    
    let regex = /^\d\d\/\d\d\/\d\d\d\d$/;
    
    if(!regex.test(data.value)){
        alert('Data: Formato inválido');
    }
    
    let splitted = data.value.split('/');
    let day = splitted[0];
    let month = splitted[1];
    let year = splitted[2];
    
    if(day <= 0 || day > 31){
        alert('Dia inválido')
    }
    
    if(month <= 0 || month > 12){
        alert('Mês inválido')
    }
    
    if(year <= 0 || year > 2200) {
        alert('Ano inválido')
    }
    
    return true;
})

let btn = document.querySelector('#button-enviar')