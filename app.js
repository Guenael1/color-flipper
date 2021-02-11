//Lorsque je clique sur le bouton << Cliquez ici >>, la couleur du background doit changer ainsi que l'écriture.
const colors = ["green", "red", "rgba(133,122,200)", "#f15025"]
const btn = document.getElementById('btn')
const color = document.querySelector('.color')

btn.addEventListener('click', function () {
    const randomNumber = getRandomNumber()
    document.body.style.background = colors[randomNumber]
    color.textContent = colors[randomNumber]

})

function getRandomNumber() {
    return Math.floor(Math.random() * colors.length)
}