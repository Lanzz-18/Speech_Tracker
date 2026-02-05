const nameInput = document.getElementById("name-input")
const dateInput = document.getElementById("date-input")
const submitBtn = document.getElementById("submit-button")
const warningText = document.getElementById("warning")
const nameUlEl = document.getElementById("name-li")
const daysUlEl = document.getElementById("days-li")
let myItems = []

const itemsFromLocalStorage = JSON.parse(localStorage.getItem("myItems"));
if (itemsFromLocalStorage) {
    myItems = itemsFromLocalStorage
    render(myItems)
}

submitBtn.addEventListener("click", () => {
    const name = nameInput.value
    const date = dateInput.value

    if (name && date) {
        warningText.style.display = "none"

        // Saving new entry into local storage and rendering it
        myItems.push({ "name": name, "date": date })
        localStorage.setItem("myItems", JSON.stringify(myItems))
        render(myItems)

        // Emptying the input values
        nameInput.value = ""
        dateInput.value = ""
    } else {
        warningText.style.display = "block"
    }
})

function calculateDuration(date) {
    const today = new Date()
    const oldDate = new Date(date)
    // Milliseconds per day
    const oneDay = 24 * 60 * 60 * 1000
    // Getting the millisecond count since Jan 1, 1970 from each date -> subtract -> divide to get day count
    const duration = Math.round((today.getTime() - oldDate.getTime()) / oneDay) - 1
    return duration
}

function render(myItems) {
    let nameList = ""
    let durationList = ""
    let duration = 0

    // Clearing out the html
    nameUlEl.innerHTML = ""
    daysUlEl.innerHTML = ""
    
    for (let i = 0; i < myItems.length; i++) {
        duration = calculateDuration(myItems[i].date)
        nameList += `<li>${myItems[i].name}</li>`
        durationList += `<li>${duration}_Day(s)</li>`
    }
    nameUlEl.innerHTML += nameList
    daysUlEl.innerHTML += durationList
}