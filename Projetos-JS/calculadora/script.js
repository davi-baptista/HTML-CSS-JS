function somar() {
    let elem1 = window.document.querySelector("input#txtn1")
    let elem2 = window.document.querySelector("input#txtn2")
    let resultado = window.document.querySelector("div#resultado")
    let n1 = Number(elem1.value)
    let n2 = Number(elem2.value)
    resultado.innerHTML = "= ";
    resultado.innerHTML += n1 + n2
}
function subt() {
    let elem1 = window.document.querySelector("input#txtn1")
    let elem2 = window.document.querySelector("input#txtn2")
    let resultado = window.document.querySelector("div#resultado")
    let n1 = Number(elem1.value)
    let n2 = Number(elem2.value)
    resultado.innerHTML = "= ";
    resultado.innerHTML += n1 - n2
}
function mult() {
    let elem1 = window.document.querySelector("input#txtn1")
    let elem2 = window.document.querySelector("input#txtn2")
    let resultado = window.document.querySelector("div#resultado")
    let n1 = Number(elem1.value)
    let n2 = Number(elem2.value)
    resultado.innerHTML = "= ";
    resultado.innerHTML += n1 * n2
}
function divi() {
    let elem1 = window.document.querySelector("input#txtn1")
    let elem2 = window.document.querySelector("input#txtn2")
    let resultado = window.document.querySelector("div#resultado")
    let n1 = Number(elem1.value)
    let n2 = Number(elem2.value)
    resultado.innerHTML = "= ";
    resultado.innerHTML += n1 / n2
}