var getChartOne = document.getElementById("chartOne")

var chartOne = new Chart(getChartOne, {
    type: "doughnut",
    data: {
        labels: ["Yes", "No"],
        datasets: [{
            data: [3, 1],
            backgroundColor: ["#FFC236", "#E8D6AF"]
        }]
    }
})

var getChartTwo = document.getElementById("chartTwo")

var chartTwo = new Chart(getChartTwo, {
    type: "bar",
    data: {
        labels: ["Participant 1", "Participant 2", "Participant 3", "Participant 4"],
        datasets: [{
            label: "Number Of Games",
            data: [0, 2, 1, 4],
            backgroundColor: "#FFC236"
        }]
    }
})

var getChartThree = document.getElementById("chartThree")

var chartThree = new Chart(getChartThree, {
    type: "doughnut",
    data: {
        labels: ["Yes", "Maybe"],
        datasets: [{
            data: [3, 1],
            backgroundColor: ["#FFC236", "#E8D6AF"]
        }]
    }
})

var getChartFour = document.getElementById("chartFour")

var chartFour = new Chart(getChartFour, {
    type: "doughnut",
    data: {
        labels: ["Yes", "No"],
        datasets: [{
            data: [4, 0],
            backgroundColor: ["#FFC236", "#E8D6AF"]
        }]
    }
})

var getChartFive = document.getElementById("chartFive")

var chartFive = new Chart(getChartFive, {
    type: "doughnut",
    data: {
        labels: ["Yes", "No"],
        datasets: [{
            data: [4, 0],
            backgroundColor: ["#FFC236", "#E8D6AF"]
        }]
    }
})