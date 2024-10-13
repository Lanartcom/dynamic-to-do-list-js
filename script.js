// Step 1: Setup Event Listener for Page Load
document.addEventListener('DOMContentLoaded', function () {

    // Step 2: Select DOM Elements
    const addButton = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    // Step 3: Create the addTask Function
    function addTask() {
        // Retrieve and trim the task input value
        const taskText = taskInput.value.trim();

        // Check if the input is empty
        if (taskText === "") {
            alert("Please enter a task.");
            return;
        }

        // Step 4: Task Creation and Removal
        // Create new <li> element for the task
        const li = document.createElement('li');
        li.textContent = taskText;

        // Create the remove button
        const removeButton = document.createElement('button');
        removeButton.textContent = "Remove";
        removeButton.className = 'remove-btn';

        // Attach an event listener to remove the task when clicked
        removeButton.onclick = function () {
            // Add transition class to fade out the item before removing it
            li.classList.add('removing');
            setTimeout(() => taskList.removeChild(li), 300);  // Delay for smooth transition
        };

        // Append the remove button to the <li> element
        li.appendChild(removeButton);

        // Append the <li> to the task list
        taskList.appendChild(li);

        // Clear the task input field after adding the task
        taskInput.value = '';
    }

    // Step 5: Attach Event Listeners
    // Listen for the 'click' event on the "Add Task" button
    addButton.addEventListener('click', addTask);

    // Allow adding tasks by pressing the "Enter" key in the input field
    taskInput.addEventListener('keypress', function (event) {
        if (event.key === 'Enter') {
            addTask();
        }
    });

    // Step 6: Invoke addTask on page load for demo
    // For testing purposes, you could add a sample task at the beginning if needed:
    // addTask(); <-- Uncomment this line if you'd like a preloaded task on page load.
});
