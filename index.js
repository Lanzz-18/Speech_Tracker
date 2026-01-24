const searchBar = document.getElementById("search-bar")

searchBar.addEventListener("keydown", (event)=> {
    if(event.key == "Enter"){
        const value = searchBar.value
        console.log(value)
    }
})