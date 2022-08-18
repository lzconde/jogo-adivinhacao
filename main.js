/* Variaveis */ 
const screenSelect = document.querySelector(".screen-select")
const screenEasy = document.querySelector(".screen-easy")
const screenHard = document.querySelector(".screen-hard")
const screenResult = document.querySelector(".screen-result")
const btnSelectEasy =document.querySelector(".btn-select-easy")
const btnSelectHard = document.querySelector(".btn-select-hard")
const btnTryEasy = document.querySelector(".btn-try-easy")
const btnTryHard = document.querySelector(".btn-try-hard")
const btnRefresh = document.querySelector("#btn-refresh")
let i = 1

/* Callback Functions */ 

const getRandomEasy = () => {
    const min = Math.ceil(1)
    const max = Math.floor(10)
    let number = (Math.random() * (max - min) + min).toFixed(0);
    
    return number
}

const getRandomHard = () => {
    const min = Math.ceil(1)
    const max = Math.floor(50)
    let number = (Math.random() * (max - min) + min).toFixed(0);
    
    return number
}

const randomNumberEasy = getRandomEasy()
const randomNumberHard = getRandomHard()

const selectEasyClick = () => {
    toggleScreenEasy()
}

const selectHardClick = () => {
    toggleScreenHard()
}

const handleTryEasy = () => {
    event.preventDefault()
    const inputNumber = document.querySelector("#inputNumberEasy")

    if(Number(inputNumber.value) == randomNumberEasy){
        toggleScreenResultEasy()
        screenResult.querySelector("h2").innerText = `Acertou em ${i} tentativas`
    }else{
        inputNumber.value = ""
        document.querySelector("#tryAgainEasy").innerText = "Você errou, tente novamente!"
    }
    i++
}

const handleTryHard = () => {
    event.preventDefault()
    const inputNumber = document.querySelector("#inputNumberHard")

    if(Number(inputNumber.value) == randomNumberHard){
        toggleScreenResultHard()
        screenResult.querySelector("h2").innerText = `Acertou em ${i} tentativas`
    }else{
        inputNumber.value = ""
        document.querySelector("#tryAgainHard").innerText = "Você errou, tente novamente!"
    }
    i++
    
    console.log(randomNumberHard)
}

const refreshPage = () => {
    location.reload()
}

const toggleScreenEasy = () =>  {
    screenSelect.classList.toggle("hide")
    screenEasy.classList.toggle("hide")
}

const toggleScreenHard = () =>  {
    screenSelect.classList.toggle("hide")
    screenHard.classList.toggle("hide")
}

const toggleScreenResultEasy = () => {
    screenEasy.classList.toggle("hide")
    screenResult.classList.toggle("hide")
}

const toggleScreenResultHard = () => {
    screenHard.classList.toggle("hide")
    screenResult.classList.toggle("hide")
}

/* Events */ 

/* Events */ 

btnSelectEasy.addEventListener("click", selectEasyClick)
btnSelectHard.addEventListener("click", selectHardClick)
btnTryEasy.addEventListener("click", handleTryEasy)
btnTryHard.addEventListener("click", handleTryHard)
btnRefresh.addEventListener("click", refreshPage)
document.addEventListener("keydown", function(e){
    if(e.key == "Enter" && screenEasy.classList.contains("hide") && screenSelect.classList.contains("hide") && screenHard.classList.contains("hide")){
        refreshPage()
    }
})
