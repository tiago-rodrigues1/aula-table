let situationCol = document.querySelectorAll(".situation");

situationCol.forEach(element => {
    if (element.innerText == "Aprovado") {
        element.classList.add("aprovado")
    } else {
        element.classList.add("reprovado")
    }
})