const colors = [
	'Red',
	'Green',
	'Blue',
	'Yellowgreen',
	'Crimson',
	'Cyan',
	'White',
	'Purple',
	'Gold',
	'Orange',
]
const btn = document.getElementById('btn')
const colorTag = document.getElementById('colorTag')
const main = document.getElementById('main')

function getRandomColor() {
	return Math.floor(Math.random() * colors.length)
}

btn.addEventListener('click', (e) => {
	const newColor = getRandomColor()
	main.style.backgroundColor = colors[newColor]
	colorTag.textContent = colors[newColor]
	colorTag.style.color = colors[newColor]
})
