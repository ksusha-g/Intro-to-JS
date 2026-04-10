let targetId;

let cucumber = 3;
let hay = 20;
let strawberry = 2;
let counter = 0;

document.addEventListener('click', function(event) {
    if (event.target.tagName == "BUTTON") {
        targetId = event.target.id
    }

    if (targetId != null) { //sctatching
        if (targetId == "tailButton" || targetId == "pawButton") {
            div = document.getElementById('scratchMessage').innerHTML = "He bite you!!";
        } else  if (targetId == "earButton" || targetId == "bellyButton") {
            div = document.getElementById('scratchMessage').innerHTML = 'He likes it!';
        }
    }

    if (targetId != null) { //feeding
        if (counter >= 10){
            document.getElementById('feedRabbit').src = "photos/rabbitOvereat.png"
            document.getElementById('feedMessage').innerHTML = ('My rabbit overeat and fall asleep. Good job!')
        } else {
            if (targetId == "hay" && hay > 0) {
            hay -= 1;
            counter +=1
            document.getElementById("hay").innerHTML = (`give (${hay} left)`)
            }
            if (targetId == "cucumber" && cucumber > 0) {
                cucumber -= 1;
                counter +=1
                document.getElementById("cucumber").innerHTML = (`give (${cucumber} left)`)
            }
            if (targetId == "strawberry" && strawberry > 0) {
                strawberry -= 1;
                counter +=1
                document.getElementById("strawberry").innerHTML = (`give (${strawberry} left)`)
            }
        }
        
    }
})

