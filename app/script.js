function createTaskManager() {
            let tasks = [];

            return {
                addTask(text) {
                    const newTask = {
                        id: Date.now(),
                        text: text,
                        done: false
                    };
                    tasks.push(newTask);
                },

                removeTask(id) {
                    tasks = tasks.filter(task => task.id !== id);
                },

                toggleTask(id) {
                    const task = tasks.find(task => task.id === id);
                    if (task) {
                        task.done = !task.done;
                    }
                },

                getAll() {
                    return [...tasks];
                },

                getStats() {
                    const total = tasks.length;
                    const completed = tasks.filter(task => task.done).length;
                    const active = total - completed;
                    return { total, active, completed };
                }
            };
        }

        const app = {
            manager: createTaskManager(),

            init() {
                const addBtn = document.querySelector('#addBtn');
                const taskInput = document.querySelector('#taskInput');

                addBtn.addEventListener('click', () => {
                    this.addTaskHandler();
                });

                taskInput.addEventListener('keypress', (event) => {
                    if (event.key === 'Enter') {
                        this.addTaskHandler();
                    }
                });

                this.render();
            },

            addTaskHandler() {
                const input = document.querySelector('#taskInput');
                const text = input.value.trim();
                
                if (!text) return;

                this.manager.addTask(text);
                input.value = '';
                this.render();
            },

            render() {
                const tasksList = document.querySelector('#tasksList');
                const stats = document.querySelector('#stats');
                
                tasksList.innerHTML = '';

                const tasks = this.manager.getAll();
                
                tasks.forEach(task => {
                    const div = document.createElement('div');
                    // Добавляем класс 'done' если задача выполнена
                    div.className = `task ${task.done ? 'done' : ''}`;
                    
                    div.innerHTML = `
                        <input type="checkbox" ${task.done ? 'checked' : ''}>
                        <span class="task-text">${task.text}</span>
                        <button class="delete-btn">x</button>
                    `;

                    const checkbox = div.querySelector('input[type="checkbox"]');
                    checkbox.addEventListener('change', () => {
                        this.manager.toggleTask(task.id);
                        this.render();
                    });

                    // кнопка удаления
                    const deleteBtn = div.querySelector('.delete-btn');
                    deleteBtn.addEventListener('click', () => {
                        this.manager.removeTask(task.id);
                        this.render();
                    });

                    tasksList.appendChild(div);
                });

                const { total, active, completed } = this.manager.getStats();
                stats.textContent = `Всего: ${total} | Активных: ${active} | Выполненных: ${completed}`;
            }
        };

        app.init();