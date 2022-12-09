const container = document.querySelector('.container')

container.addEventListener('mouseover', (event) => {
	if (event.target.className == 'panel') {
		Array.from(container.children).forEach((child) => {
			child.classList.remove('active')
		})
		event.target.classList.add('active')
	}
})

//V.1
// const panels = document.querySelectorAll('.panel')

// function removeClass() {
// 	panels.forEach((panel) => panel.classList.remove('active'))
// }

// panels.forEach((panel) => {
// 	panel.addEventListener('mouseover', () => {
// 		removeClass()
// 		panel.classList.add('active')
// 	})
// })
