// let tasks = new Map()
// let taskButton = document.getElementById('task-button')
// let taskInput = document.getElementById('task-input')
// let sortContainer = document.getElementById('sorting')
// let list = document.getElementById('to-do-list')

// let done = document.getElementById('done')
// let notDone = document.getElementById('not-done')

// function render(){
//     console.log('render')
//     list.innerHTML = '' //без этого никак, иначе добавления наслаиваются
//     showTasks()
// }

// function showTasks(){  
//     console.log('showTasks', tasks)
//     //for (let [a,b] of Object.entries(tasks)){
//         console.log('fro')
//     for (let key in tasks) {
//         if (tasks.hasOwnProperty)
//         console.log(key); // Ключ
//     }
        
     
// }

// function createElement(task){
//     let newTask = document.createElement('li')
//     let taskText = task
//     let textNode = document.createTextNode(taskText)
//     newTask.appendChild(textNode)

//     let checkbox = document.createElement('input');
//     checkbox.type = 'checkbox';
//     checkbox.classList.add('check')
//     newTask.appendChild(checkbox)

//     let binPicture = document.createElement('img') //delete
//     binPicture.src = 'bin.png'
//     binPicture.style.width = '15px'
//     binPicture.style.height = '15px'
//     binPicture.style.cssFloat = 'right' 
         

//     newTask.prepend(checkbox)
//     newTask.appendChild(textNode)
//     newTask.classList.add("elem");
//     newTask.appendChild(binPicture)
//     console.log(newTask)

//     list.append(newTask)
// }

// function addTask(task) {
//     let taskText = task.trim();
//     console.log(taskText)
//     tasks.set(taskText, notDone)
// }


// taskButton.addEventListener('click', () => {
//     if (taskInput.value !== ''){
//         addTask(taskInput.value)
//         render()
//         taskInput.value = ''
//     }
// })
// taskInput.addEventListener('keydown', (event) => {
//     if (taskInput.value !== '' && event.key == 'Enter'){
//         console.log('taskInput')
//         addTask(taskInput.value)
//         render()
//         taskInput.value = ''
        
//     }
// })

// // document.addEventListener('click', (e) => {
// //     if (sortContainer.contains(e.target)) {checkSort()}
// // })

// // document.addEventListener('click', (e) => {
// //     if (list.contains(e.target) && e.target.classList.contains('check')) {changeStatus(e.target.id)}
// //     if (list.contains(e.target) && e.target.id.includes('pic')) {deleteTask(e.target.id[0])}
// // })



const taskInput = document.getElementById('task-input');
const taskList = document.getElementById('tasklist');
const searchInput = document.getElementById('search-input');

let allTasks = [];
let currentSort = 'oldest';
let searchQuery = '';

taskInput.addEventListener('keypress', (event) => {
    if (event.key === 'Enter') {
        const text = taskInput.value.trim();
        if (text !== "") {
            allTasks.push({
                id: Date.now(), //метод, который возвращает дату. через него быстрее настраивать, чем через индексы
                text: text,
                completed: false,
                priority: false
            });
            showTasks();
            taskInput.value = '';
        }
    }
});

function showTasks() { 
    taskList.innerHTML = ''; //просто так передвигать элементы нельзя, поэтому очищаем экран и создаем заново

    let filteredTasks = allTasks;
    if (searchQuery !== '') {
        filteredTasks = allTasks.filter(task =>
            task.text.toLowerCase().includes(searchQuery.toLowerCase())
        );
    }

    let tasksToShow = [...filteredTasks]; //[...text] - превращает в массив отдельных символов, НО для сущ. массива просто создает его копию
    tasksToShow.sort((a, b) => {
        if (a.priority === true && b.priority === false) {
            return -1;
        }
        if (a.priority === false && b.priority === true) {
            return 1;
        }
        if (currentSort === 'newest') {
            if (b.id > a.id) {
                return 1;
            }
            if (a.id > b.id) {
                return -1;
            }
            return 0;
        } else {
            if (a.id < b.id) {
                return -1;
            }
            if (b.id < a.id) {
                return 1;
            }
            return 0;
        }
    });

    tasksToShow.forEach((task, index) => {
        const li = document.createElement('li'); //элемент списка
        
        if (task.priority) {
            li.classList.add('priority');
        }
        
        const taskSpan = document.createElement('span');
        taskSpan.textContent = task.text;
        if (task.completed) {
            li.classList.add('completed');
        }

        //контейнер для кнопок - не можем запихнуть в html, потому что создаются динамически с элементами списка
        const buttonsDiv = document.createElement('div');
        buttonsDiv.className = 'task-buttons';

        //edit
        const editBtn = document.createElement('button');
        editBtn.textContent = '✎';
        editBtn.className = 'edit-task-btn';
        editBtn.addEventListener('click', () => {
            if (task.completed) {
                return;
            }
            const newText = prompt('edit your task', task.text);
            if (newText && newText.trim() !== '') {
                task.text = newText.trim();
                showTasks();
            }
        });

        //high-priority
        const priorityBtn = document.createElement('button');
        if (task.priority === true) {
            priorityBtn.textContent = '★';
        } else {
            priorityBtn.textContent = '☆';
        }
        priorityBtn.className = 'priority-task-btn';
        priorityBtn.addEventListener('click', () => {
            if (task.completed) {
                return;
            }
            task.priority = !task.priority;
            showTasks();
        });

        //сompleted
        const completeBtn = document.createElement('button');
        if (task.completed === true) {
            completeBtn.textContent = '✔️';
        } else {
            completeBtn.textContent = '✓';
        }
        completeBtn.className = 'complete-task-btn';
        completeBtn.addEventListener('click', () => {
            if (task.completed) {
                task.completed = false;
            } else {
                task.completed = true;
                task.priority = false;
            }
            showTasks();
        });

        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = '✕';
        deleteBtn.className = 'delete-task-btn';
        deleteBtn.addEventListener('click', () => {
            const index = allTasks.findIndex(t => t.id === task.id);
            if (index !== -1) {
                allTasks.splice(index, 1);
                showTasks();
            }
        });

        buttonsDiv.appendChild(editBtn);
        buttonsDiv.appendChild(priorityBtn);
        buttonsDiv.appendChild(completeBtn);
        buttonsDiv.appendChild(deleteBtn);

        li.appendChild(taskSpan);
        li.appendChild(buttonsDiv);
        taskList.appendChild(li);
    });

    updateButtonsStyle();
}

searchInput.addEventListener('keypress', (event) => {
    if (event.key === 'Enter') {
        searchQuery = searchInput.value.trim();
        showTasks();
    }
});

searchInput.addEventListener('input', () => {
    if (searchInput.value.trim() === '') {
        searchQuery = '';
        showTasks();
    }
});


//sort
const newestBtn = document.getElementById('newest-first');
const oldestBtn = document.getElementById('oldest-first');

function updateButtonsStyle() {
    if (currentSort === 'newest') {
        newestBtn.classList.add('active');
        oldestBtn.classList.remove('active');
    } else {
        oldestBtn.classList.add('active');
        newestBtn.classList.remove('active');
    }
}

newestBtn.addEventListener('click', () => {
    currentSort = 'newest';
    showTasks();
});

oldestBtn.addEventListener('click', () => {
    currentSort = 'oldest';
    showTasks();
});

//delete all
const editBtn = document.querySelector('.edit');

editBtn.addEventListener('click', () => {
    if (allTasks.length === 0) {
        return;
    }
    const confirmed = confirm('do you want to delete all tasks?');
    if (confirmed) {
        allTasks = [];
        showTasks();
    }
});