/////////////////// Initial List /////////////////////
let listOfGifts = ['Ropa Crossfit', 'Monitor Curvo', 'Zapatillas Crossfit']

///////////////// SELECT ITEMS //////////////////
const giftList = document.getElementById('list')
const form = document.getElementById('formGift')
const gift = document.getElementById('inputGift')
// const buttonDelete = document.getElementById('delete')
const buttonDeleteAll = document.getElementById('deleteAllButton')
const msgEmptyList = document.getElementById('msg-empty')

//////////////// Event listeners ////////////////////

// Add gifts to list with submit form
form.addEventListener('submit', (e) => {
	e.preventDefault()
	if (gift.value === '') {
		form.classList.add('shake')
		setTimeout(() => {
			form.classList.remove('shake')
		}, 500)
	} else {
		if (listOfGifts.length == 0) {
			hideMsgEmptyList()
		}
		addItem(gift.value)
		storeItem(gift.value)
		gift.value = ''
	}
})

// Remove gift from the list by clicking a gift one at a time.
giftList.addEventListener('click', (event) => {
	// remove from the list
	event.target.remove()
	// remove from storage
	listOfGifts = deleteItemFromStorage(event.target.textContent)

	if (listOfGifts.length == 0) {
		showMsgEmptyList()
	}
})

// Remove all the gifts at once
deleteAllButton.addEventListener('click', (event) => {
	// remove all from the list
	while (giftList.lastChild) {
		giftList.removeChild(giftList.lastChild)
	}
	// remove from storage
	listOfGifts = []
	showMsgEmptyList()
})

//////////////// Functions //////////////////////

// Store a gift in the list
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

function showMsgEmptyList() {
	msgEmptyList.classList.remove('hidden')
}

function hideMsgEmptyList() {
	msgEmptyList.classList.add('hidden')
}

function initializeList() {
	if (listOfGifts.length == 0) {
		showMsgEmptyList()
	} else {
		listOfGifts.forEach((giftText) => {
			addItem(giftText)
		})
	}
}

initializeList()
