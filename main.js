const screen1 = document.querySelector(".screen1")
const screen2 = document.querySelector(".screen2")

const getRandom = () => {
    const min = Math.ceil(1)
    const max = Math.floor(10)
    let number = Math.random() * (max - min) + min;
    
    return number
}

let i = 1

const randomNumber = getRandom().toFixed(0)

const handleTryClick = (event) => {
    event.preventDefault()

    const inputNumber = document.querySelector("#inputNumber")

    if(Number(inputNumber.value) == randomNumber){
        screen1.classList.add("hide")
        screen2.classList.remove("hide")

        screen2.querySelector("h2").innerText = `Acertou em ${i} tentativas`
    }else{
        inputNumber.value = ""
        document.querySelector("#tryAgain").innerText = "Você errou, tente novamente!"
    }
    i++
    
}

const refreshPage = () => {
    location.reload()
}

const btnTry = document.querySelector("#btn-try")
const btnRefresh = document.querySelector("#btn-refresh")

btnTry.addEventListener("click", handleTryClick)
btnRefresh.addEventListener("click", refreshPage)