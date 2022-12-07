function tabuada () {
    let num = window.document.getElementById('num')
    let seltab = window.document.getElementById('seltab')
    if (num.value.length == 0) {
        alert('[ERRO] Coloque um número')
    }
    else {
        seltab.innerHTML = ''
        for (let i = 1; i<=10; i++) {
            let opt = document.createElement('option')
            opt.text = `${Number(num.value)} x ${i} = ${Number(num.value)*i}`
            seltab.appendChild(opt)
        }
    }
}