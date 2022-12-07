function contar () {
    let ini = window.document.getElementById('ini')
    let fim = window.document.getElementById('fim')
    let passo = window.document.getElementById('passo')
    let res = window.document.getElementById('res')
    
    if (ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        alert('[ERRO] Verifique os dados!')
    }
    else {
        if(Number(passo.value) == 0) {
            window.alert('[ERRO] Número de passo inválido, corrigindo passo para 1!')
            passo.value = 1
        }
        if(Number(ini.value)>Number(fim.value)) {
            res.innerHTML = ''
            for(let i = Number(ini.value); i>=Number(fim    .value); i--) {
                res.innerHTML += `${i} \u{1F449}`
            }
            res.innerHTML += '\u{1F3C1}'
        }
        else {
            res.innerHTML = ''
            for(let i = Number(ini.value); i<=Number(fim.value); i+=Number(passo.value)) {
                res.innerHTML += `${i} \u{1F449} `
            }
            res.innerHTML += '\u{1F3C1}'
        }
    }
}