var getOutput = document.querySelector("#cycle")
var wordList = ["Everyone", "Students", "Teachers"]
var wordIndex = 0
function wordCycle() {
    if(wordIndex == wordList.length) {
        wordIndex = 0
        getOutput.innerHTML = wordList[wordIndex]
    }else {
        getOutput.innerHTML = wordList[wordIndex]
        wordIndex += 1
    }
    setTimeout(wordCycle, 3000)
}

var getHeaderLogo = document.querySelector("#header-logo")
var getLandingPage = document.querySelector(".landing")
var iObserverForNav = new IntersectionObserver(changeNavColors)
function changeNavColors(entries) {
    entries.forEach(entry => {
        if(!entry.isIntersecting) {
            getMenuBtn.style.color = "#000"
            getHeaderLogo.src = "IMG & VIDS/Logo/Time Logo.png"
        }else {
            getMenuBtn.style.color = "#fff"
            getHeaderLogo.src = "IMG & VIDS/Logo/Time Logo White.png"
        }
    });
}
iObserverForNav.observe(getLandingPage)

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
        }else if(!entry.isIntersecting) {
            getLandingText.classList.remove("flip-anim")
            getLandingText.innerHTML = "Think about the time you've wasted."
        }
    })
}
iObserverForLandingText.observe(getBottomLandingSection)

var cardIndex = 0
var timer = null
function autoCardCycle() {
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

var workshopIndex = 1
function changeWorkshop() {
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