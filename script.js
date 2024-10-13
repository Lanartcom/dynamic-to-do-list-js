// When the DOM is fully loaded, initialize by loading tasks from Local Storage
document.addEventListener('DOMContentLoaded', () => {
    loadTasks();  // Load tasks from localStorage when the page is loaded

    // Set up the event listener for adding tasks when the button is clicked
    document.getElementById('add-task-btn').addEventListener('click', () => {
        addTask();  // Call the addTask function when the button is clicked
    });
});

// Function to load tasks from Local Storage and populate the list
function loadTasks() {
    const storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]'); // Retrieve tasks from Local Storage or default to an empty array
    storedTasks.forEach(taskText => addTask(taskText, false));  // Add each stored task to the list without saving again to Local Storage
}

// Function to add a new task to the list and optionally save it to Local Storage
function addTask(taskText = null, save = true) {
    const input = document.getElementById('task-input');  // Input field element
    const taskList = document.getElementById('task-list');  // Task list (ul) element

    // Use the passed-in taskText (when loading tasks), or grab the text from the input field
    const newTaskText = taskText || input.value.trim();  // If no taskText provided, use the input value

    // Prevent adding an empty task
    if (newTaskText === "") {
        alert('Task cannot be empty!');
        return;
    }

    // Create a new list item (li) element to hold the task
    const li = document.createElement('li');
    li.textContent = newTaskText;  // Set the task text

    // Create a "Remove" button for this task
    const removeBtn = document.createElement('button');
    removeBtn.textContent = 'Remove';
    removeBtn.onclick = () => removeTask(li, newTaskText);  // Attach the remove functionality
    li.appendChild(removeBtn);  // Append the remove button to the list item

    // Append the new task (li) to the task list (ul) in the DOM
    taskList.appendChild(li);

    // Save the task to Local Storage if the 'save' flag is true (only save when not loading)
    if (save) {
        const storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');  // Get tasks from Local Storage or empty array
        storedTasks.push(newTaskText);  // Add the new task to the list of stored tasks
        localStorage.setItem('tasks', JSON.stringify(storedTasks));  // Save the updated task list to Local Storage
    }

    // Clear the input field if a new task was added (not when loading existing tasks)
    if (!taskText) input.value = '';  // Reset the input value to an empty string
}

// Function to remove a task from the list and update Local Storage
function removeTask(taskElement, taskText) {
    // Remove the task from the DOM
    taskElement.remove();

    // Update the Local Storage by removing the task from the storedTasks array
    const storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');  // Get the current tasks from Local Storage
    const updatedTasks = storedTasks.filter(task => task !== taskText);  // Filter out the task that needs to be removed
    localStorage.setItem('tasks', JSON.stringify(updatedTasks));  // Save the updated task list back to Local Storage
}
