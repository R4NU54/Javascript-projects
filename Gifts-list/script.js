// Initial List
const listOfGifts = ['Ropa Crossfit', 'Monitor Curvo', 'Zapatillas Crossfit']

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
	}
	addItem(gift.value)
	persistItem(gift.value)
	gift.value = ''
})

// Functions
function persistItem(item) {
	listOfGifts.push(item)
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
