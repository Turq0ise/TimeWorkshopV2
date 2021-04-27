var getMenuBtn = document.querySelector("#menu")
var getSidebar = document.querySelector(".side-nav")
var menuStatus = false
function toggleSideNav() {
    if(!menuStatus) {
        getSidebar.style.display = "block"
        getMenuBtn.classList.replace("im-menu", "im-x-mark")
        menuStatus = true
    }else if(menuStatus) {
        getSidebar.style.display = "none"
        getMenuBtn.classList.replace("im-x-mark", "im-menu")
        menuStatus = false
    }
}

var getArrowBtn = document.querySelector("#arrow-down")
var getDropDownItems = document.querySelector("#drop-down-items")
var dropDownStatus = false
function toggleDropDown() {
    if(!dropDownStatus) {
        getDropDownItems.style.display = "flex"
        getArrowBtn.style.transform = "scaleY(-1)"
        dropDownStatus = true
    }else if(dropDownStatus) {
        getDropDownItems.style.display = "none"
        getArrowBtn.style.transform = "scaleY(1)"
        dropDownStatus = false
    }
}

var midday
function mainClock() {
    var date = new Date()
    var hours = updateHours(date.getHours())
    var minutes = updateTime(date.getMinutes())

    document.querySelector("#clock").innerHTML = `${hours}:${minutes} ${midday}`
    setTimeout(mainClock, 1000)
}
function updateTime(n) {
    if(n < 10) {
        return "0" + n
    }else {
        return n
    }
}
function updateHours(n) {
    if(n < 10 && n != 0) {
        midday = "AM"
        return "0" + n
    }else if(n == 10 || n == 11) {
        midday = "AM"
        return n
    }else if(n == 12) {
        midday = "PM"
        return n
    }else if(n > 12 && n < 22) {
        midday = "PM"
        return "0" + n % 12
    }else if(n == 22 || n == 23) {
        midday = "PM"
        return n % 12
    }else if(n == 0) {
        midday = "AM"
        return n = 12
    }
    return midday
}
mainClock()

window.addEventListener("load", function() {
    var getLoader = document.querySelector(".loader")
    var getBody = document.querySelector("body")
    getLoader.classList.add("hide")
    getBody.style.overflowY = "visible"
})