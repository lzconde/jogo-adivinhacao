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
    let number = (Math.random() * (max - min) + min).toFixed(0);
    
    return number
}


const randomNumber = getRandom()

const handleTryClick = () => {
    event.preventDefault()
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
document.addEventListener("keydown", function(e){
    if(e.key == "Enter" && screen1.classList.contains("hide")){
        refreshPage()
    }
})
