function carregar () {
    let msg = window.document.getElementById('mensagem')
    let img = window.document.getElementById('imagem')
    let data = new Date()
    let hora = data.getHours()
    msg.innerHTML = `Agora são exatamente ${hora} horas.`
    if (hora >= 5 && hora <= 12) {
        img.src = 'manha.png'
       document.body.style.background = '#a9784f'
    }
    else if (hora >= 12 && hora <= 18) {    
        img.src = 'tarde.png'
        document.body.style.background = '#436584'
    }
    else {
        img.src = 'noite.png'
        document.body.style.background = '#533e5d'
    }
}