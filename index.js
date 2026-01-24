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
        warningText.style.display = "none"
        nameUlEl.innerHTML += `<li>${name}</li>`
        daysUlEl.innerHTML += `<li>${date}</li>`
        console.log("Entry logged: ", name, date)
        nameInput.value = ""
        dateInput.value = ""
    } else {
        warningText.style.display = "block"
    }
})
