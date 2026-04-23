// let taskInput = document.getElementById('task-input')
// //buttons
// let taksButton = document.getElementById('task-button')
// let deleteLast = document.getElementById('delete-last')
// let list = document.getElementById('to-do-list')
// let idCounter = 0


// taksButton.addEventListener('click', () => { // add task
//     if (taskInput !== "") {
//         idCounter += 1;
//         let taskText = taskInput.value.trim();
//         let elem = document.createElement('li');

//         let checkbox = document.createElement('input');
//         checkbox.type = 'checkbox';
//         elem.appendChild(checkbox)

//         let picture = document.createElement('img')
//         picture.src = 'bin.png'
//         picture.style.width = '15px'
//         picture.style.height = '15px'
//         picture.style.cssFloat = 'right'
        

//         let textNode = document.createTextNode(taskText)
//         elem.prepend(checkbox)
//         elem.appendChild(textNode)
//         elem.classList.add("elem");
//         elem.id = idCounter;
//         list.append(elem);

//         elem.appendChild(picture)
//     }
// })


let taskInput = document.getElementById('task-input')
//buttons
let taksButton = document.getElementById('task-button')
let list = document.getElementById('to-do-list')
let idCounter = 0
let tasks = []

function render(){
    console.log('render')
    let tasksToRender = getTasksToDisplay()
    
    tasksToRender.forEach(task => {
        let taskElement = createTask(task)
        list.append(taskElement)
    });

}

function createTask(){
    console.log('createTask')
    idCounter += 1;
    let taskText = taskInput.value.trim();
    let elem = document.createElement('li');

    //if (completed) {li.classList.add('completed')} //галочка
    //if (loved) {li.classList.add('loved')} //избранное

    //создаем задачу *********************************
    elem.innerHTML = `
    <li class='elem' id='${idCounter}'>
        <input type='checkbox'>
        <img src='bin.png' style='width: 15px; height: 15px; float: right'>
    `
    //**********************************************
    render()
    return elem
    
}

function addTask(){
    console.log('addTask')
    let text = taskInput.value.trim()
    let newTask = createTask(taskText)
    tasks.push(newTask)
    render()

    taskInput.value = '' //очищаем поле ввода, просто чтобы было красивее
}

function getTasksToDisplay(){
    console.log('getTasksToDisplay')
    let displayedTasks = [...tasks]
    return displayedTasks

}

taksButton.addEventListener('click', () => { // add task
     if (taskInput !== "") {createTask()}
    console.log('aa')})

