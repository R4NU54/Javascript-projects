// Initial List
let listOfGifts = ['Ropa Crossfit', 'Monitor Curvo', 'Zapatillas Crossfit']

// SELECT ITEMS
const ul = document.getElementById('list')
const form = document.getElementById('formGift')
const gift = document.getElementById('inputGift')
let buttonDelete = document.getElementById('delete')

// Event listeners
form.addEventListener('submit', (e) => {
	e.preventDefault()
	if (gift.value === '') {
		form.classList.add('shake')
		setTimeout(() => {
			form.classList.remove('shake')
		}, 500)
	} else {
		addItem(gift.value)
		storeItem(gift.value)
		gift.value = ''
	}
})

ul.addEventListener('click', (event) => {
	// remove from the list
	event.target.remove()
	// remove from storage
	listOfGifts = deleteItemFromStorage(event.target.textContent)
})

// Functions
function storeItem(item) {
	listOfGifts = [...listOfGifts, item]
}

function deleteItemFromStorage(item) {
	const itemIndex = listOfGifts.indexOf(item)
	return listOfGifts.filter((e) => e !== item)
}

function addItem(item) {
	const li = document.createElement('li')
	// const button = document.createElement('button')
	// button.innerText = 'Borrar'
	// // button.classList.add('delete')
	// button.id = 'delete'
	// li.appendChild(button)
	li.textContent = item
	ul.appendChild(li)
}

function initializeList() {
	listOfGifts.forEach((giftText) => {
		addItem(giftText)
	})
}
initializeList()
