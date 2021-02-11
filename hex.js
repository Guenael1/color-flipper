// Lorsque je clique sur le bouton, le background doit changer de couleur,l'écriture doit changer de couleur
const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
const btn = document.getElementById('btn');
const color = document.querySelector('.color')

btn.addEventListener('click', function () {
    let hexColor = '#'
    for (let i = 0; i < 6; i++) {
        hexColor += hex[getRandomNumber()]
    }
    document.body.style.backgroundColor = hexColor
    color.textContent = hexColor
})

function getRandomNumber() {
    return Math.floor(Math.random() * hex.length)
}