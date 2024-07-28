document.addEventListener('DOMContentLoaded', function() {
    const addTaskButton = document.getElementById('add-task-button');
    const newTaskInput = document.getElementById('new-task');
    const taskList = document.getElementById('task-list');

    addTaskButton.addEventListener('click', function() {
        addTask(newTaskInput.value);
        newTaskInput.value = '';
    });

    function addTask(taskText) {
        if (taskText.trim() === '') return;

        const li = document.createElement('li');
        li.innerHTML = `
            <span class="task-text">${taskText}</span>
            <button class="edit-button">Edit</button>
            <button class="delete-button">Delete</button>
        `;

        const editButton = li.querySelector('.edit-button');
        const deleteButton = li.querySelector('.delete-button');
        const taskSpan = li.querySelector('.task-text');

        editButton.addEventListener('click', function() {
            if (li.classList.contains('edit-mode')) {
                const inputField = li.querySelector('input');
                taskSpan.textContent = inputField.value;
                editButton.textContent = 'Edit';
                li.replaceChild(taskSpan, inputField);
            } else {
                const inputField = document.createElement('input');
                inputField.type = 'text';
                inputField.value = taskSpan.textContent;
                li.replaceChild(inputField, taskSpan);
                editButton.textContent = 'Save';
            }
            li.classList.toggle('edit-mode');
        });

        deleteButton.addEventListener('click', function() {
            taskList.removeChild(li);
        });

        taskList.appendChild(li);
    }
});
