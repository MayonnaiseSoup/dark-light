let isDarkMode = true


function switchMode() {


    image = document.getElementById("image")

    if (isDarkMode) {
        isDarkMode = false
        document.getElementById("Title").innerText = "Light Mode"
        document.getElementById("image").src = "./images/sunrise.png"
        document.getElementById("body").className = "light"
    } else {
        isDarkMode = true
        document.getElementById("Title").innerText = "Dark Mode"
        document.getElementById("image").src = "./images/moon.png"
        document.getElementById("body").className = "dark"
    }
}



