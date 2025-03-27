document.addEventListener('DOMContentLoaded', () => {
    const taskInput = document.getElementById('taskName');
    const addTaskButton = document.querySelector('.task-input button');
    const pendingTasks = document.getElementById('pendingTasks');
    const inProgressTasks = document.getElementById('inProgressTasks');
    const doneTasks = document.getElementById('doneTasks');

    let tasks = JSON.parse(localStorage.getItem('tasks')) || [];

    function saveTasks() {
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }

    function renderTasks() {
        pendingTasks.innerHTML = '';
        inProgressTasks.innerHTML = '';
        doneTasks.innerHTML = '';

        tasks.forEach(task => {
            const taskElement = document.createElement('div');
            taskElement.className = 'task';
            taskElement.innerHTML = `
                <p>${task.name}</p>
                ${
                    task.status !== 'done'
                        ? `<button>Chuyển trạng thái</button>`
                        : ''
                }
            `;

            if (task.status !== 'done') {
                const button = taskElement.querySelector('button');
                button.addEventListener('click', () => {
                    if (task.status === 'pending') {
                        task.status = 'inProgress';
                    } else if (task.status === 'inProgress') {
                        task.status = 'done';
                    }
                    saveTasks();
                    renderTasks();
                });
            }

            if (task.status === 'pending') {
                pendingTasks.appendChild(taskElement);
            } else if (task.status === 'inProgress') {
                inProgressTasks.appendChild(taskElement);
            } else if (task.status === 'done') {
                doneTasks.appendChild(taskElement);
            }
        });
    }

    addTaskButton.addEventListener('click', () => {
        const taskName = taskInput.value.trim();
        if (taskName === '') {
            alert('Vui lòng nhập tên công việc');
            return;
        }

        tasks.push({ name: taskName, status: 'pending' });
        saveTasks();
        renderTasks();
        taskInput.value = '';
    });

    renderTasks();
});