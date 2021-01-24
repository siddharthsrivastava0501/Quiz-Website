var correctAns = "";

async function fetchContent() {
    await fetch('https://opentdb.com/api.php?amount=1&category=9&type=multiple')
    .then((res) => res.json())
    .then((json) => updateHTML(json))
}

function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;
  
    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
  
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
  
      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
  
    return array;
}

function updateHTML(json) {
    disableButtons(false);
    resetAllButtons();

    document.getElementById("questionName").innerHTML = json.results[0].question;
    var options = ["option1","option2","option3","option4"]
    options = shuffle(options)
    
    // Add correct answer to the first element of the randomly shuffled array
    document.getElementById(options[0]).innerHTML = json.results[0].correct_answer
    correctAns = options[0]
    console.log("Correct answer: " + options[0])

    // Add the rest of the options
    document.getElementById(options[1]).innerHTML = json.results[0].incorrect_answers[0]
    document.getElementById(options[2]).innerHTML = json.results[0].incorrect_answers[1]
    document.getElementById(options[3]).innerHTML = json.results[0].incorrect_answers[2]

    // Make the elements not hidden
    document.getElementById("option1").removeAttribute("hidden")
    document.getElementById("option2").removeAttribute("hidden")
    document.getElementById("option3").removeAttribute("hidden")
    document.getElementById("option4").removeAttribute("hidden")
}

function disableButtons(todo) {
    if (todo == true) {
        document.getElementById("option1").setAttribute("disabled", "")
        document.getElementById("option2").setAttribute("disabled", "")
        document.getElementById("option3").setAttribute("disabled", "")
        document.getElementById("option4").setAttribute("disabled", "")
    } else {
        document.getElementById("option1").removeAttribute("disabled")
        document.getElementById("option2").removeAttribute("disabled")
        document.getElementById("option3").removeAttribute("disabled")
        document.getElementById("option4").removeAttribute("disabled")
    }
    
}

function resetAllButtons() {
    document.getElementById("option1").innerHTML = null
    $("#option1").removeClass().addClass("btn btn-outline-primary w-100")
    document.getElementById("option2").innerHTML = null
    $("#option2").removeClass().addClass("btn btn-outline-primary w-100")
    document.getElementById("option3").innerHTML = null
    $("#option3").removeClass().addClass("btn btn-outline-primary w-100")
    document.getElementById("option4").innerHTML = null
    $("#option4").removeClass().addClass("btn btn-outline-primary w-100")
}

$("#option1").on("click", () => {
    disableButtons(true)
    if ("option1" == correctAns) {
        $("#option1").addClass('btn-outline-success').removeClass('btn-outline-primary')
    } else {
        $("#option1").addClass('btn-outline-danger').removeClass('btn-outline-primary')
        $("#".concat(correctAns)).addClass('btn-outline-success').removeClass('btn-outline-primary')
    }
})

// All the event listeners
$("#option1").on("click", () => {
    disableButtons(true)
    if ("option1" == correctAns) {
        $("#option1").addClass('btn-outline-success').removeClass('btn-outline-primary')
    } else {
        $("#option1").addClass('btn-outline-danger').removeClass('btn-outline-primary')
        $("#".concat(correctAns)).addClass('btn-outline-success').removeClass('btn-outline-primary')
    }
})

$("#option2").on("click", () => {
    disableButtons(true)
    if ("option2" == correctAns) {
        $("#option2").addClass('btn-outline-success').removeClass('btn-outline-primary')
    } else {
        $("#option2").addClass('btn-outline-danger').removeClass('btn-outline-primary')
        $("#".concat(correctAns)).addClass('btn-outline-success').removeClass('btn-outline-primary')
    }
})

$("#option3").on("click", () => {
    disableButtons(true)
    if ("option3" == correctAns) {
        $("#option3").addClass('btn-outline-success').removeClass('btn-outline-primary')
    } else {
        $("#option3").addClass('btn-outline-danger').removeClass('btn-outline-primary')
        $("#".concat(correctAns)).addClass('btn-outline-success').removeClass('btn-outline-primary')
    }
})

$("#option4").on("click", () => {
    disableButtons(true)
    if ("option4" == correctAns) {
        $("#option4").addClass('btn-outline-success').removeClass('btn-outline-primary')
    } else {
        $("#option4").addClass('btn-outline-danger').removeClass('btn-outline-primary')
        $("#".concat(correctAns)).addClass('btn-outline-success').removeClass('btn-outline-primary')
    }
})