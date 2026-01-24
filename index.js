const nameInput = document.getElementById("name-input")
const dateInput = document.getElementById("date-input")
const submitBtn = document.getElementById("submit-button")
const warningText = document.getElementById("warning")
const nameUlEl = document.getElementById("name-li")
const daysUlEl = document.getElementById("days-li")

submitBtn.addEventListener("click", ()=> {
    const name = nameInput.value
    const date = dateInput.value

    if(name && date){
        const duration = calculateDuration(date)
        warningText.style.display = "none"

        nameUlEl.innerHTML += `<li>${name}</li>`
        daysUlEl.innerHTML += `<li>${duration}_Days</li>`
        console.log("Entry logged: ", name, duration)

        nameInput.value = ""
        dateInput.value = ""
    } else {
        warningText.style.display = "block"
    }
})

function calculateDuration(date){
    const today = new Date()
    const oldDate = new Date(date)
    // Milliseconds per day
    const oneDay = 24 * 60 * 60 * 1000
    // Getting the millisecond count since Jan 1, 1970 from each date -> subtract -> divide to get day count
    const duration = Math.round((today.getTime() - oldDate.getTime())/oneDay)
    return duration
}
