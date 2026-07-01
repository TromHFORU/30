


// 1 meter = 3.281 feet
// 1 litre = 0.264 gallon
// 1 kilogram = 2.204 pound

const btn = document.getElementById("btn-el")
const input = document.getElementById("input-el")
let meter = document.getElementById("result-meter")
let kilo = document.getElementById("result-kilo")
let litre = document.getElementById("result-litre")

//Testing ternary operator
const playerGuess = 3
const correctAnswer = 6

const message = playerGuess < correctAnswer ? 'Too Low' :
playerGuess > correctAnswer ? 'Too High':'Exactly Correct'

console.log(message)

//Testing Switch

function selectItem(item){
    let price = 0
    switch(item){
        case 'coffee':
            price = 2
            break
        case 'coke':
            price = 3
            break
        case 'salad':
            price = 4
            break
        default:
            return `Sorry, we don't sell ${item}`
    }
    return `You selected ${item}.That will be $${price}`
}
console.log(selectItem('apple'))

// object destructuring
const favouriteDoungha = {
    title : "Renegade Immortal",
    year : 2023,
    genre : "Action"
}

const{title,year,genre} = favouriteDoungha

console.log(`My favourie doughua is ${title} and it was released in ${year} and genre of ${genre}.`)




btn.addEventListener("click",function(){
    
        
    
    const user =Number(input.value)
    let feet = (user * 3.281).toFixed(3)
    let gallon =(user * 0.264).toFixed(3)
    let pound = (user * 2.204).toFixed(3)

    meter.textContent = `${user} Meter | ${feet} Feet`
    kilo.textContent = `${user} Kilogram | ${pound} Pound`
    litre.textContent = `${user} Litre | ${gallon} Gallon`
    
    
        
        
    }
)


