document.getElementById("todayDate").innerText = `${new Date().toDateString()}`;
// Complete task function
function completeTask(taskTitle, e) {
    alert("Board updated successfully!");
    const remainingTask = getTextToNumber("remaining-task") - 1;
    document.getElementById("remaining-task").innerText = remainingTask;

    if (remainingTask === 0)
        alert("Congrates!!! You have complete all the current task.");

    const completedTask = getTextToNumber("completed-task") + 1;
    document.getElementById("completed-task").innerText = completedTask;

    callHistoryAdded(taskTitle);
    e.setAttribute("disabled", "");
    e.classList.add("bg-gray-400");
    e.classList.remove("bg-purple-600");
}

// theme background change
function changeThemeColor() {
    let randomColor =
        "#" +
        Math.floor(Math.random() * 16777215)
            .toString(16)
            .padStart(6, "0");
    document.getElementById("body").style.backgroundColor = randomColor;
}

// Clear history function
function clearHistory() {
    document.getElementById("history-container").innerHTML = "";
}

// discover blog
function discoverBlog() {
    window.location.href = "blog.html";
}
