// Initial List
let listOfGifts = ['Ropa Crossfit', 'Monitor Curvo', 'Zapatillas Crossfit']

// SELECT ITEMS
const giftList = document.getElementById('list')
const form = document.getElementById('formGift')
const gift = document.getElementById('inputGift')

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

// Functions
function storeItem(item) {
	listOfGifts = [...listOfGifts, item]
}

function deleteItemFromStorage(item) {
	const itemIndex = listOfGifts.indexOf(item)
	return listOfGifts.filter((e) => e !== item)
}

function addItem(item) {
	const newElement = document.createElement('li')
	newElement.textContent = item
	giftList.appendChild(newElement)
}

function initializeList() {
	listOfGifts.forEach((giftText) => {
		addItem(giftText)
	})
}
initializeList()
