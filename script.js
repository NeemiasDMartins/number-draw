const btn_Random = document.querySelector("button")

function numberRandom() {
    const inputMin = Math.ceil(document.querySelector("#valueInput-left").value)
    const inputMax = Math.floor(document.querySelector("#valueInput-right").value)
    const valueResult = document.querySelector("#valueResult")

    const result = Math.floor(Math.random() * (inputMax - inputMin + 1)) + inputMin;

    if (inputMin >= inputMax) {
        alert("O valor mínimo não pode ser maior ou igual ao valor máximo!")
        valueResult.innerHTML = ""
    }
    if (inputMin < inputMax) {
        valueResult.innerHTML = result
    }

}


btn_Random.addEventListener("click", numberRandom)


