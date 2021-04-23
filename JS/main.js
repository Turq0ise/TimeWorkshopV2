/* Sidebar Navigation Start */
var getMenuBtn = document.querySelector("#menu")
var getSidebar = document.querySelector(".side-nav")
var menuStatus = false

function toggleSideNav() {
    if(!menuStatus) {
        getSidebar.style.display = "block"
        getMenuBtn.classList.replace("im-menu", "im-x-mark")
        menuStatus = true
    }
    else if(menuStatus) {
        getSidebar.style.display = "none"
        getMenuBtn.classList.replace("im-x-mark", "im-menu")
        menuStatus = false
    }
}
/* Sidebar Navigation End */

/* Sidebar Drop Down Menu Start */
var getArrowBtn = document.querySelector("#arrow-down")
var getDropDownItems = document.querySelector("#drop-down-items")
var dropDownStatus = false

function toggleDropDown() {
    if(!dropDownStatus) {
        getDropDownItems.style.display = "flex"
        getArrowBtn.style.transform = "scaleY(-1)"
        dropDownStatus = true
    }
    else if(dropDownStatus) {
        getDropDownItems.style.display = "none"
        getArrowBtn.style.transform = "scaleY(1)"
        dropDownStatus = false
    }
}
/* Sidebar Drop Down Menu End */

/* Clock Start */
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
    }
    else {
        return n
    }
}

function updateHours(n) {
    if(n < 10 && n != 0) {
        midday = "AM"
        return "0" + n
    }
    else if(n == 10 || n == 11) {
        midday = "AM"
        return n
    }
    else if(n == 12) {
        midday = "PM"
        return n
    }
    else if(n > 12 && n < 22) {
        midday = "PM"
        return "0" + n % 12
    }
    else if(n == 22 || n == 23) {
        midday = "PM"
        return n % 12
    }
    else if(n == 0) {
        midday = "AM"
        return n = 12
    }

    return midday
}
mainClock()
/* Clock End */

/* Word Cycle Start */
var getOutput = document.querySelector("#cycle")
var wordList = ["Everyone", "Students", "Teachers"]
var wordIndex = 0

function wordCycle() {
    if(wordIndex == wordList.length) {
        wordIndex = 0
        getOutput.innerHTML = wordList[wordIndex]
    }
    else {
        getOutput.innerHTML = wordList[wordIndex]
        wordIndex += 1
    }

    setTimeout(wordCycle, 3000)
}
/* Word Cycle End */

/* Loader Start */
window.addEventListener("load", function() {
    var getLoader = document.querySelector(".loader")
    var getBody = document.querySelector("body")
    
    getLoader.classList.add("hide")
    getBody.style.overflowY = "visible"
})
/* Loader End */

/* Change Nav Colors Start */
var getHeaderLogo = document.querySelector("#header-logo")
var getLandingPage = document.querySelector(".landing")
var iObserverForNav = new IntersectionObserver(changeNavColors)

function changeNavColors(entries) {
    entries.forEach(entry => {
        if(!entry.isIntersecting) {
            getMenuBtn.style.color = "#000"
            getHeaderLogo.src = "IMG & VIDS/Logo/Time Logo.png"
        }
        else {
            getMenuBtn.style.color = "#fff"
            getHeaderLogo.src = "IMG & VIDS/Logo/Time Logo White.png"
        }
    });
}
iObserverForNav.observe(getLandingPage)
/* Change Nav Colors End */

/* Changing Text with Intersection Observer Start */
var getLandingText = document.querySelector("#landing-text")
var getBottomLandingSection = document.querySelector("#bottom")
var options = {
    root: null,
    rootMargin: "0px",
    threshold: .43
}
var iObserverForLandingText = new IntersectionObserver(changeLandingText, options)

function changeLandingText(entries) {
    entries.forEach(entry => {
        if(entry.isIntersecting) {
            getLandingText.classList.toggle("flip-anim")
            getLandingText.innerHTML = "And imagine what you could have done."
        }
        else if(!entry.isIntersecting) {
            getLandingText.classList.remove("flip-anim")
            getLandingText.innerHTML = "Think about the time you've wasted."
        }
    })
}
iObserverForLandingText.observe(getBottomLandingSection)
/* Changing Text with Intersection Observer End */

/* Feedback Card Cycle Start */
var cardIndex = 0
var timer = null

function autoCardCycle() {
    var i
    var getCards = document.getElementsByClassName("cards")
    var getDots = document.getElementsByClassName("dot-btn")

    for(i = 0; i < getDots.length; i++) {
        getCards[i].style.display = "none"
    }
    cardIndex++

    if(cardIndex > getCards.length) {
        cardIndex = 1
    }

    for(i = 0; i < getDots.length; i++) {
        getDots[i].classList.remove("active")
    }

    getCards[cardIndex - 1].style.display = "block"
    getDots[cardIndex - 1].classList.add("active")
    timer = setTimeout(autoCardCycle, 5000)
}

function manualSlides(n) {
    cardIndex = n;
    clearTimeout(timer)
    autoCardCycle()
}
autoCardCycle()
/* Feedback Card Cycle End */

/* Change Workshop Button Start */
var workshopIndex = 0

function changeWorkshop() {
    var i
    var getWorkshops = document.getElementsByClassName("workshops")

    for(i = 0; i < getWorkshops.length; i++) {
        getWorkshops[i].style.display = "none"
    }
    workshopIndex++

    if(workshopIndex > getWorkshops.length) {
        workshopIndex = 1
    }

    getWorkshops[workshopIndex - 1].style.display = "block"
}
/* Change Workshop Button End */