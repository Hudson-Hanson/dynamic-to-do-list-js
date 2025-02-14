document.addEventListener("DOMContentLoaded", () => {
    // Select the Add Task button
    const addButton = document.getElementById("add-task-btn");
    const taskInput = document.getElementById("task-input");
    const taskList = document.getElementById("task-list");

    function addTask() {
        const taskText = taskInput.value.trim();
        if (taskText === "") {
            alert("Please enter a task.");
            return;
        }

        // Create task item
        const li = document.createElement("li");
        li.textContent = taskText;

        // Create remove button
        const removeButton = document.createElement("button");
        removeButton.textContent = "Remove";
        removeButton.className = "remove-btn";

        // Remove task when button is clicked
        removeButton.onclick = () => taskList.removeChild(li);

        li.appendChild(removeButton);
        taskList.appendChild(li);

        // Clear input field
        taskInput.value = "";
    }

    // Event listener for button click
    addButton.addEventListener("click", addTask);

    // Event listener for Enter key
    taskInput.addEventListener("keypress", (event) => {
        if (event.key === "Enter") {
            addTask();
        }
    });
});
