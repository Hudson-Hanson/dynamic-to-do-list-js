document.addEventListener("DOMContentLoaded", () => {
    const addButton = document.getElementById("add-task-btn");
    const taskInput = document.getElementById("task-input");
    const taskList = document.getElementById("task-list");

    // Load tasks from Local Storage on page load
    function loadTasks() {
        const storedTasks = JSON.parse(localStorage.getItem("tasks") || "[]");
        storedTasks.forEach(taskText => addTask(taskText, false)); // Prevent duplicate saving
    }

    // Function to save tasks to Local Storage
    function saveTasks() {
        const tasks = [];
        document.querySelectorAll("#task-list li").forEach(li => {
            tasks.push(li.firstChild.textContent); // Store only the text part of the task
        });
        localStorage.setItem("tasks", JSON.stringify(tasks));
    }

    // Function to add a task
    function addTask(taskText, save = true) {
        if (!taskText.trim()) {
            alert("Please enter a task.");
            return;
        }

        // Create task item
        const li = document.createElement("li");
        li.textContent = taskText;
        li.classList.add("task-item"); // Adding a class

        // Create remove button
        const removeButton = document.createElement("button");
        removeButton.textContent = "Remove";
        removeButton.classList.add("remove-btn");

        // Remove task when button is clicked
        removeButton.onclick = () => {
            taskList.removeChild(li);
            saveTasks(); // Update Local Storage after removal
        };

        li.appendChild(removeButton);
        taskList.appendChild(li);

        if (save) {
            saveTasks(); // Save tasks to Local Storage only when manually adding
        }

        taskInput.value = ""; // Clear input field
    }

    // Event listener for button click
    addButton.addEventListener("click", () => addTask(taskInput.value));

    // Event listener for Enter key
    taskInput.addEventListener("keypress", (event) => {
        if (event.key === "Enter") {
            addTask(taskInput.value);
        }
    });

    loadTasks(); // Load saved tasks on page load
});
