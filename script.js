


// 1 meter = 3.281 feet
// 1 litre = 0.264 gallon
// 1 kilogram = 2.204 pound

const btn = document.getElementById("btn-el")
const input = document.getElementById("input-el")
let meter = document.getElementById("result-meter")
let kilo = document.getElementById("result-kilo")
let litre = document.getElementById("result-litre")







btn.addEventListener("click",function(){
    const user =Number(input.value)
    let feet = (user * 3.281).toFixed(3)
    let gallon =(user * 0.264).toFixed(3)
    let pound = (user * 2.204).toFixed(3)

    meter.textContent = `${user} Meter | ${feet} Feet`
    kilo.textContent = `${user} Kilogram | ${pound} Pound`
    litre.textContent = `${user} Litre | ${gallon} Gallon`
})


