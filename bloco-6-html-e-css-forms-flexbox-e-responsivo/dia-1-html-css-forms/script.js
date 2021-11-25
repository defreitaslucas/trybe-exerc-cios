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
