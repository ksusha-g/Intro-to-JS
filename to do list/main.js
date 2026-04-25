//мзвините что так мало
// у меня кучу ошибок и я не знаю как их исправлять
let tasks = new Map()
let taskButton = document.getElementById('task-button')
let taskInput = document.getElementById('task-input')
let sortContainer = document.getElementById('sorting')
let list = document.getElementById('to-do-list')

let done = document.getElementById('done')
let notDone = document.getElementById('not-done')

function render(){
    console.log('render')
    list.innerHTML = '' //без этого никак, иначе добавления наслаиваются
    showTasks()
}

function showTasks(){  
    console.log('showTasks', tasks)
    //for (let [a,b] of Object.entries(tasks)){
        console.log('fro')
    for (let key in tasks) {
        if (tasks.hasOwnProperty)
        console.log(key); // Ключ
    }
        
     
}

function createElement(task){
    let newTask = document.createElement('li')
    let taskText = task
    let textNode = document.createTextNode(taskText)
    newTask.appendChild(textNode)

    let checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.classList.add('check')
    newTask.appendChild(checkbox)

    let binPicture = document.createElement('img') //delete
    binPicture.src = 'bin.png'
    binPicture.style.width = '15px'
    binPicture.style.height = '15px'
    binPicture.style.cssFloat = 'right' 
         

    newTask.prepend(checkbox)
    newTask.appendChild(textNode)
    newTask.classList.add("elem");
    newTask.appendChild(binPicture)
    console.log(newTask)

    list.append(newTask)
}

function addTask(task) {
    let taskText = task.trim();
    console.log(taskText)
    tasks.set(taskText, notDone)
}


taskButton.addEventListener('click', () => {
    if (taskInput.value !== ''){
        addTask(taskInput.value)
        render()
        taskInput.value = ''
    }
})
taskInput.addEventListener('keydown', (event) => {
    if (taskInput.value !== '' && event.key == 'Enter'){
        console.log('taskInput')
        addTask(taskInput.value)
        render()
        taskInput.value = ''
        
    }
})

// document.addEventListener('click', (e) => {
//     if (sortContainer.contains(e.target)) {checkSort()}
// })

// document.addEventListener('click', (e) => {
//     if (list.contains(e.target) && e.target.classList.contains('check')) {changeStatus(e.target.id)}
//     if (list.contains(e.target) && e.target.id.includes('pic')) {deleteTask(e.target.id[0])}
// })