// const colors = ['red', 'green', 'blue', 'yellowmelon']
// const btn = document.getElementById('btn')
// const colorTag = document.getElementById('colorTag')
// const main = document.querySelector('main')

// btn.addEventListener('click', () => {
// 	const newColor = getRandomColor()
// 	main.style.backgroundColor = colors[newColor]
// 	colorTag.textContent = newColor
// })

// function getRandomColor() {
// 	return Math.floor(Math.random() * colors.length)
// }
const colors = ['aqua', 'red', 'green', 'blue']
const btn = document.getElementById('btn')
const main = document.querySelector('.main')
const colorTag = document.getElementById('color-tag')

btn.addEventListener('click', () => {
	/* TODO: ensure that the random number is different from the current number */
	const newColorNumber = getRandomNumber()
	main.style.backgroundColor = colors[newColorNumber]
	colorTag.textContent = colors[newColorNumber]
	colorTag.style.color = colors[newColorNumber]
	console.log
})

function getRandomNumber() {
	return Math.floor(Math.random() * colors.length)
}
