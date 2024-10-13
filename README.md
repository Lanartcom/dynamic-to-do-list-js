Here’s an updated version of your **README** file to include the second task, which adds Local Storage persistence to the To-Do List Application:

---

# To-Do List Application

## Project Description
In this project, I developed a **To-Do List Application** using **HTML**, **CSS**, and **JavaScript**. The main goal was to create a simple, user-friendly to-do list that allows users to add tasks, display them, and remove them when completed. The project was enhanced with the ability to persist tasks across browser sessions using **Local Storage**, ensuring that tasks remain available even after a page reload or when the browser is closed and reopened.

## Features
- **Add New Tasks**: Users can enter new tasks into the input field and click the "Add Task" button to add them to the task list.
- **Remove Tasks**: Each task has a "Remove" button that allows the user to delete the task from the list when it's done.
- **Keyboard Shortcuts**: Tasks can also be added by pressing the `Enter` key after typing in the input field.
- **Persistent Tasks with Local Storage**: Tasks are saved to Local Storage so they persist across browser sessions. If the page is refreshed or reopened later, tasks will be restored automatically.
- **Real-Time DOM Manipulation**: All tasks are dynamically added and removed from the DOM without page reloads.

## Technologies Used
- **HTML**: Provides the structure of the application, including the input field, button, and task list elements.
- **CSS**: Styles the interface to make it user-friendly and visually appealing. It includes responsive design elements to ensure the application looks good on different screen sizes.
- **JavaScript**: Handles all the interactive parts of the application, including adding new tasks, removing tasks, saving tasks to Local Storage, and loading tasks from Local Storage. Event handling and DOM manipulation are central to the app's interactivity.
- **Local Storage**: Used to store the user's tasks so they persist even when the browser is closed or refreshed.

## How I Built It
1. **HTML Structure**: I started by building a simple HTML structure that includes an input field for entering tasks, a button for adding them, and an unordered list (`<ul>`) for displaying the tasks.
2. **CSS Styling**: I applied CSS to style the application, making it clean and responsive. The task list items, buttons, and overall layout were styled to ensure a good user experience.
3. **JavaScript Logic**:
   - I wrote JavaScript to handle user interactions, such as adding new tasks to the list, removing them, and saving them to Local Storage.
   - Event listeners detect button clicks and key presses (`Enter` key) to trigger the task creation process.
   - DOM manipulation was used to dynamically update the list of tasks as users add or remove them.
   - Tasks are saved to **Local Storage** using `localStorage.setItem()` and retrieved from it using `localStorage.getItem()` when the page is loaded.
4. **Local Storage Integration**:
   - When the page loads, tasks stored in Local Storage are retrieved and displayed on the list.
   - When a new task is added or removed, the tasks list in Local Storage is updated accordingly, ensuring persistence across browser sessions.

## How to Run the Project
1. Download or clone the repository to your local machine.
2. Ensure you have a basic web server running to avoid any MIME type issues. You can use VSCode's **Live Server** extension or Python's built-in HTTP server.
3. Open the `index.html` file in your browser using the live server.

## Conclusion
This project helped me strengthen my skills in **DOM manipulation**, **event handling**, and **Local Storage** with JavaScript. It also provided valuable experience in building a simple, user-friendly interface with **HTML** and **CSS**. The addition of task persistence using Local Storage adds significant usability to the application.

Feel free to fork the project or suggest improvements. Thanks for checking it out!

---