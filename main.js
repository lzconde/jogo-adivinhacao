/* Variaveis */ 
const screen1 = document.querySelector(".screen1")
const screen2 = document.querySelector(".screen2")
const btnTry = document.querySelector("#btn-try")
const btnRefresh = document.querySelector("#btn-refresh")
let i = 1

/* Callback Functions */ 

const getRandom = () => {
    const min = Math.ceil(1)
    const max = Math.floor(10)
    let number = Math.random() * (max - min) + min;
    
    return number
}


const randomNumber = getRandom().toFixed(0)

const handleTryClick = () => {
    event.preventDefault()
    console.log(randomNumber)
    const inputNumber = document.querySelector("#inputNumber")

    if(Number(inputNumber.value) == randomNumber){
        toggleScreen()
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

const toggleScreen = () =>  {
    screen1.classList.toggle("hide")
    screen2.classList.toggle("hide")
}

/* Events */ 

/* Events */ 

btnTry.addEventListener("click", handleTryClick)
btnRefresh.addEventListener("click", refreshPage)
