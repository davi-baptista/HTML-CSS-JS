function generator() {
    let size = document.getElementById('size')
    let resultado = document.getElementById('result')
    let caracteres = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%&*()-_=+[]{};.,<>:?/0123456789"    
    let tam = Number(size.value)
    if (size.value.length == 0 || tam <=0) {
        window.alert('[ERRO] Verifique o tamanho solicitado')
    }
    resultado.innerHTML = ""
    while (tam > 0) {
        let rnumber = Math.floor(Math.random()*87)
        resultado.innerHTML += caracteres[rnumber]
        tam--;
    }
}