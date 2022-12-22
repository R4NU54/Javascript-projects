// Initial List
let listOfGifts = ['Ropa Crossfit', 'Monitor Curvo', 'Zapatillas Crossfit']

// SELECT ITEMS
const giftList = document.getElementById('list')
const form = document.getElementById('formGift')
const gift = document.getElementById('inputGift')
// const buttonDelete = document.getElementById('delete')
const buttonDeleteAll = document.getElementById('deleteAllButton')

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

giftList.addEventListener('click', (event) => {
	// remove from the list
	event.target.remove()
	// remove from storage
	listOfGifts = deleteItemFromStorage(event.target.textContent)
})

deleteAllButton.addEventListener('click', (event) => {
	// remove all from the list
	while (giftList.lastChild) {
		giftList.removeChild(giftList.lastChild)
	}
	// remove from storage
	listOfGifts = []
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
	giftList.appendChild(li)
}

function initializeList() {
	listOfGifts.forEach((giftText) => {
		addItem(giftText)
	})
}
initializeList()