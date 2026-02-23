const input = document.getElementById("taskInput");
const sr = document.getElementById("srNumber");
const list = document.getElementById("taskList");

// Load from localStorage
let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

// Save to localStorage
function save() {
    localStorage.setItem("tasks", JSON.stringify(tasks));
}

// Render tasks
function render() {
    list.innerHTML = "";

    tasks.forEach((task, index) => {
        const li = document.createElement("li");
        li.className = "flex justify-between items-center bg-gray-600 p-2 rounded-lg text-white mb-2";

        li.innerHTML = `
            <span class="${task.done ? 'line-through' : ''}">
                ${task.text} - ${task.sr}
            </span>
            <div class="flex gap-2">
                <button onclick="toggleDone(${index})"
                    class="bg-green-600 px-2 py-1 rounded">
                    ✓
                </button>
                <button onclick="deleteTask(${index})"
                    class="bg-red-700 px-2 py-1 rounded">
                    Delete
                </button>
            </div>
        `;

        list.appendChild(li);
    });
}

// Add task
function addTask() {
    if (!input.value.trim() || !sr.value.trim()) return;

    tasks.push({
        text: input.value.trim(),
        sr: sr.value.trim(),
        done: false
    });

    input.value = "";
    sr.value = "";
    save();
    render();
}

// Delete task
function deleteTask(i) {
    Swal.fire({
        title: "Do you want to delete this task?",
        showCancelButton: true,
        confirmButtonText: "Yes",
        confirmButtonColor: "#d33"
    }).then((result) => {
        if (result.isConfirmed) {
            tasks.splice(i, 1);
            save();
            render();
            Swal.fire("Deleted!", "Task successfully deleted.", "success");
        }
    });
}

// Initial render
render();
