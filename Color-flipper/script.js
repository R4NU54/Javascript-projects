const colors = ['red', 'green', 'blue', 'yellowgreen', 'aqua']
const btn = document.getElementById('btn')
const colorTag = document.getElementById('colorTag')
const main = document.querySelector('.main')

btn.addEventListener('click', () => {
	const newColor = getRandomColor()
	main.style.backgroundColor = colors[newColor]
	colorTag.textContent = colors[newColor]
	colorTag.style.color = colors[newColor]
})

function getRandomColor() {
	return Math.floor(Math.random() * colors.length)
}
