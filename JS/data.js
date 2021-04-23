participants = [
    {
        name: "Code L",
        fname: "Code L",
        isHidden: false,
        responses: [
            "That there would be something to learn more about time management. It did not meet my expectations because all the information that was there were information I know about.",
            "3",
            "None",
            "You should put more time into the workshop.",
            "That the other host are not sure on what they will report or when they will speak.",
            "Its a bit ironic but you need better time management and better hosts who could not put dead airs.",
            "Not really because i already know what they said.",
            "Not really.",
            "2"
        ]
    },
    {
        name: "Ahmed Ahmed Salem Ahmed Illescas",
        fname: "Ahmed",
        isHidden: false,
        responses: [
            "I genuinely expected that I'll learn something about Time Management that I already didn't know. Turns out I was wrong. You did not meet my expectations.",
            "2",
            "None",
            "Replace the other hosts, retain Joel. One of the hosts is speaking Tagalog while explaining. There is so much dead air as well, with the other hosts. Fix the communication as well. The hosts are fighting in their own group chat when the other host wasn't aware that it was time to change the slide. They made the Ice breaker so long as well. There is no clear flow, thus resulting in the workshop which could be done in 10 minutes, to be done in 40 minutes. It's evident that Time Management isn't present in, well, ironically, a Time Management workshop.",
            "The host speaking Tagalog, the dead air, and the poor time management.",
            "By the reasons stated above.",
            "No",
            "No",
            "0"
        ]
    },
    {
        name: "Joshua Daniel Asuncion",
        fname: "Joshua",
        isHidden: false,
        responses: [
            "That I will learn how to manage my time. Yes, you did.",
            "8",
            "The very long Ice breaker that gave me enough time to finish my Filipino SA.",
            "The mic audio is a bit hard to understand but is passable enough that it isnt much of a problem.",
            "The video quality is a very blurry although that's probably only on my end.",
            "More examples of concepts.",
            "Yes",
            "Yes",
            "5"
        ]
    },
    {
        name: "Zeus Mosquera",
        fname: "Zeus",
        isHidden: false,
        responses: [
            "At first I expected a simple yet informative workshop, and yet it did meet my expectations, thank you.",
            "8",
            "Most likely from what I've seen, the tips and advice of the host, could actually help our lifestyle by prioritizing our objectives of the day.",
            "I could suggest that adding more advice or solutions to which how can we manage our time",
            "As for me, there would be none",
            "I could suggest that adding more advice or solutions to which how can we manage our time",
            "Yes, we learned how to manage our time with ease",
            "Yes, he clarified some points of the presentation, which we can understand clearly",
            "3"
        ]
    },
    {
        name: "Rapunzel Ann",
        fname: "Rapunzel",
        isHidden: false,
        responses: [
            "To learn more about time management and why is it important to us",
            "8",
            "I like the most when the host is explaining about your workshop.",
            "My suggestion to your workshop is to add more activity to the audience so they won't be bored.",
            "The game",
            "The cooperation of the groupmates",
            "Yes, i learned something.",
            "Yes he did:)",
            "4"
        ]
    },
    {
        name: "Rumpella Francoise A. Abao",
        fname: "Rumpella",
        isHidden: false,
        responses: [
            "my expectations from your workshop is that you'll be able to explain the details in managing our time and you did meet that expectation",
            "8",
            "the idea of explaining time management and answering questions from your audience",
            "none",
            "the way you present the slides",
            "make sure that your team is ready when presenting ",
            "yes",
            "yes",
            "5"
        ]
    },
    {
        name: "Lorenzo Suerte",
        fname: "",
        isHidden: true,
        responses: [
            "its gonaa be fun",
            "9",
            "marco saso's explanation",
            "its good",
            "i forgot to listen holf of the workshop because i dc :(",
            "its already good",
            "yes",
            "yes",
            "5"
        ]
    },
]

questions = [
    "What was your expectations before you joined our workshop? and did we meet this expectation?",
    "How satisfied were you with the workshop?",
    "What did you like most about our workshop?",
    "Any suggestion or feedback about our workshop?",
    "What did you like least about the workshop?",
    "How do you think this workshop could have been improved?",
    "Did you learn anything from this workshop?",
    "Did the hosts help you understand time management more?",
    "How likely are you to tell a friend about this workshop?"
]

{
    var nameResults = document.getElementById("name-summary-results")
    var questionOneDiv = document.getElementById("question-one").innerHTML += `<h3>${questions[0]}</h3><div class="results" id="question-one-summary-results"></div>`
    var questionOneResults = document.getElementById("question-one-summary-results")
    var questionTwoDiv = document.getElementById("question-two").innerHTML += `<h3>${questions[1]}</h3><div class="results" id="question-two-summary-results"></div>`
    var questionTwoResults = document.getElementById("question-two-summary-results")
    var questionThreeDiv = document.getElementById("question-three").innerHTML += `<h3>${questions[2]}</h3><div class="results" id="question-three-summary-results"></div>`
    var questionThreeResults = document.getElementById("question-three-summary-results")
    var questionFourDiv = document.getElementById("question-four").innerHTML += `<h3>${questions[3]}</h3><div class="results" id="question-four-summary-results"></div>`
    var questionFourResults = document.getElementById("question-four-summary-results")
    var questionFiveDiv = document.getElementById("question-five").innerHTML += `<h3>${questions[4]}</h3><div class="results" id="question-five-summary-results"></div>`
    var questionFiveResults = document.getElementById("question-five-summary-results")
    var questionSixDiv = document.getElementById("question-six").innerHTML += `<h3>${questions[5]}</h3><div class="results" id="question-six-summary-results"></div>`
    var questionSixResults = document.getElementById("question-six-summary-results")
    var questionSevenDiv = document.getElementById("question-seven").innerHTML += `<h3>${questions[6]}</h3><div class="results" id="question-seven-summary-results"></div>`
    var questionSevenResults = document.getElementById("question-seven-summary-results")
    var questionEightDiv = document.getElementById("question-eight").innerHTML += `<h3>${questions[7]}</h3><div class="results" id="question-eight-summary-results"></div>`
    var questionEightResults = document.getElementById("question-eight-summary-results")
    var questionNineDiv = document.getElementById("question-nine").innerHTML += `<h3>${questions[8]}</h3><div class="results" id="question-nine-summary-results"></div>`
    var questionNineResults = document.getElementById("question-nine-summary-results")

    for(i = 0; i < participants.length; i++) {
        if(participants[i].isHidden) {
            nameResults.innerHTML += `<p>Participant ${i + 1}</p>`
        }else {
            nameResults.innerHTML += `<p>${participants[i].name}</p>`
        }
        questionOneResults.innerHTML += `<p>${participants[i].responses[0]}</p>`
        questionTwoResults.innerHTML += `<p>${participants[i].responses[1]}</p>`
        questionThreeResults.innerHTML += `<p>${participants[i].responses[2]}</p>`
        questionFourResults.innerHTML += `<p>${participants[i].responses[3]}</p>`
        questionFiveResults.innerHTML += `<p>${participants[i].responses[4]}</p>`
        questionSixResults.innerHTML += `<p>${participants[i].responses[5]}</p>`
        questionSevenResults.innerHTML += `<p>${participants[i].responses[6]}</p>`
        questionEightResults.innerHTML += `<p>${participants[i].responses[7]}</p>`
        questionNineResults.innerHTML += `<p>${participants[i].responses[8]}</p>`
    }
}

{
    var selectElement = document.getElementById("select-participants")
    for(i = 0; i < participants.length; i++) {
        if(participants[i].isHidden) {
            selectElement.innerHTML += `<option value="participant-${i + 1}" class="select-values">Participant ${i + 1}</option>`
        }else {
            selectElement.innerHTML += `<option value="participant-${i + 1}" class="select-values">${participants[i].fname}</option>`
        }
    }
}

var summaryTab = document.getElementById("summary-tab")
var indivTab = document.getElementById("indiv-tab")
var optionTabStatus
function summaryTabFunction() {
    if(optionTabStatus) {
        return
    }else {
        summaryTab.style.display = "flex"
        indivTab.style.display = "none"
        document.getElementById("individual").style.borderBottom = "none"
        document.getElementById("summary").style.borderBottom = "5px solid #FFC236"
        optionTabStatus = true
    }
}

function indivTabFunction() {
    if(optionTabStatus) {
        summaryTab.style.display = "none"
        indivTab.style.display = "flex"
        document.getElementById("summary").style.borderBottom = "none"
        document.getElementById("individual").style.borderBottom = "5px solid #FFC236"
        optionTabStatus = false
    }else {
        return
    }
}

summaryTabFunction()

for(i = 0; i < participants.length; i++) {
    var test = document.getElementById(`participant-${i + 1}`)
    if(participants[i].isHidden) {
        test.innerHTML += `<div class="main-content"><h1>Name:</h1><h3>Participant ${i + 1}</h3></div>`
    }else {
        test.innerHTML += `<div class="main-content"><h1>Name:</h1><h3>${participants[i].name}</h3></div>`
    }
    

    for(x = 0; x < questions.length; x++) {
        test.innerHTML += `<div class="main-content"><h3>${questions[x]}</h3><p>${participants[i].responses[x]}</p></div>`
    }
}

var selectParticipant = document.getElementById("select-participants")

selectParticipant.addEventListener("input", function() {
    for(i = 0; i < participants.length; i++) {
        document.getElementById(`participant-${i + 1}`).style.display = "none"
    }
    document.getElementById(`${selectParticipant.value}`).style.display = "flex"
})