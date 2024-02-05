const btn_Random = document.querySelector("button")

function numberRandom() {
    const inputMin = Math.ceil(document.querySelector("#valueInput-left").value)
    const inputMax = Math.floor(document.querySelector("#valueInput-right").value)
    const valueResult = document.querySelector("#valueResult")

    const result = Math.floor(Math.random() * (inputMax - inputMin + 1)) + inputMin;

    valueResult.innerHTML = result

}


btn_Random.addEventListener("click", numberRandom)


