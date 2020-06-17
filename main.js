// ---------- query selectors ----------
const bodySelector = document.querySelector('body')

// ---------- create elements ----------
// main
const mainElement = document.createElement('main')
// script
const scriptElement = document.createElement('script')
// button
const buttonElement = document.createElement('button')
buttonElement.className = 'delete-main-button'
const userCreateElement = document.createElement('button')
userCreateElement.className = 'user-create-button'
const userRemoveElement = document.createElement('button')
userRemoveElement.className = 'user-remove-button'
// image
const imageElement = document.createElement('img')
imageElement.className = 'image'
imageElement.src = 'http://shorturl.at/qDKT5'
imageElement.height = 725
imageElement.width = 512
// anchor
const anchorElement = document.createElement('a')
anchorElement.className = 'link'
anchorElement.href = 'https://www.deeprockgalactic.com/'
// input
const inputRemoveElement = document.createElement('input')
inputRemoveElement.className = 'user-input-remove'
inputRemoveElement.type = 'text'
inputRemoveElement.placeholder = 'enter a css selector'

const inputCreateElement = document.createElement('input')
inputCreateElement.className = 'user-input-create'
inputCreateElement.type = 'text'
inputCreateElement.placeholder = 'enter a string of text'

// ---------- append elements ----------

// body
bodySelector.append(buttonElement)

bodySelector.append(inputCreateElement)
bodySelector.append(userCreateElement)
userCreateElement.append('create element')

bodySelector.append(inputRemoveElement)
bodySelector.append(userRemoveElement)
userRemoveElement.append('remove element')

bodySelector.append(mainElement)
bodySelector.append(scriptElement)
// main
mainElement.append(imageElement)
mainElement.append(anchorElement)
buttonElement.append('delete main')
anchorElement.append('ROCK AND STONE TO THE BONE!')

// ---------- event listeners ----------
buttonElement.addEventListener("click", function () {
    mainElement.remove()
})
userCreateElement.addEventListener("click", function () {
    const userInput = document.querySelector('.user-input-create')
    const userString = userInput.value
    const newElement = document.createElement('div')
    bodySelector.append(newElement)
    newElement.append(userString)
})
userRemoveElement.addEventListener("click", function () { // incomplete, stuck on this
    const userInput = document.querySelector('.user-input-remove')
    const userString = userInput.value
    console.log('remove ' + userString)
    userString.remove()
})