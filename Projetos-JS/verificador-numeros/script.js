let num = []

function inList(n) {
    if (num.indexOf(Number(n.value)) != -1) {
        return true
    }
    return false
}

function addnumber() {
    let res = window.document.getElementById('res')
    res.innerHTML = ''
    let n = window.document.getElementById('numtxt')
    let seltab = window.document.getElementById('seltxt')
    let opt = document.createElement('option')
    if (n.value.length == 0) {
        alert('[ERRO] Verifique os valores e tente novamente')
    }
    else {
        if (inList(n)) {
            alert('[ERRO] Número já adicionado, tente outro número')
        }
        else {
        num.push(Number(n.value))
        opt.text = `Valor ${Number(n.value)} adicionado`
        seltab.appendChild(opt)
        }
    }
}

function calcnum() {
    let res = window.document.getElementById('res')
    res.innerHTML = `O vetor possui tamanho ${num.length}`
    let menor = num[0]
    let maior = num[0]
    let soma = 0
    let media
    for (let i in num) {
        soma += num[i]
        if (num[i]>maior) {
            maior = num[i];
        }
        if (num[i]<menor) {
            menor = num[i]
        }
    }
    media = soma/num.length
    res.innerHTML += `<br>O maior valor do vetor é ${maior}`
    res.innerHTML += `<br>O menor valor do vetor é ${menor}`
    res.innerHTML += `<br>O somatório é ${soma}`
    res.innerHTML += `<br>A média é ${media}`
}