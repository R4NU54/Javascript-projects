const colors = [
	'red',
	'green',
	'blue',
	'yellowgreen',
	'crimson',
	'cyan',
	'white',
	'purple',
	'gold',
	'orange',
]
const btn = document.getElementById('btn')
const colorTag = document.getElementById('colorTag')
const main = document.getElementById('main')

function changeColor() {
	const oldColor = main.style.backgroundColor
	let newColor = colors[getRandomColor()]

	while (newColor === oldColor) {
		newColor = colors[getRandomColor()]
	}

	main.style.backgroundColor = newColor
	colorTag.textContent = newColor
	colorTag.style.color = newColor
}

btn.addEventListener('click', changeColor)

function getRandomColor() {
	return Math.floor(Math.random() * colors.length)
}
