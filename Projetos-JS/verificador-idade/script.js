function verificar () {
    let data = new Date()
    let year = data.getFullYear()
    let ano = document.getElementById('year')
    let result = document.getElementById('result')
    if (ano.value > year || ano.value.length == 0) {
        alert('[ERRO] Ano inválido')
    }
    else {
        let sexo = document.getElementsByName('radiosex')
        let idade = year - Number(ano.value)
        if (sexo[0].checked) {
            result.innerHTML = 'Homem'
        }
        else {
            result.innerHTML = 'Mulher'
        }
        result.innerHTML += `<br>${idade} anos`
        if (idade <= 10) {
            result.innerHTML += '<br>Criança'
        }
        else if (idade <= 21) {
            result.innerHTML += '<br>Jovem'
        }
        else if (idade <= 50) {
            result.innerHTML += '<br>Adulto'
        }
        else {
            result.innerHTML += '<br>Idoso'
        }
    }
}