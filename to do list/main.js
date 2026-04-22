let taskInput = document.getElementById('task-input')
//buttons
let taksButton = document.getElementById('task-button')
let deleteLast = document.getElementById('delete-last')
let list = document.getElementById('to-do-list')
let idCounter = 0


taksButton.addEventListener('click', () => { // add task
    if (taskInput !== "") {
        idCounter += 1;
        let taskText = taskInput.value.trim();
        let elem = document.createElement('li');

        let checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        elem.appendChild(checkbox)

        let textNode = document.createTextNode(taskText)
        elem.prepend(checkbox)
        elem.appendChild(textNode)
        elem.classList.add("elem");
        elem.id = idCounter;
        list.append(elem);
    }
})

deleteLast.addEventListener('click', () => {
    lastDiv = document.querySelector('.container li:last-child')
    console.log(lastDiv)
})

