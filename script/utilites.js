function getTextToNumber(id) {
    const value = document.getElementById(id).innerText;
    return parseInt(value);
}

// Call history
function callHistoryAdded(title) {
    const historyContainer = document.getElementById("history-container");
    const historyItem = document.createElement("p");
    historyItem.innerText = `You have completed the task ${title} at ${new Date().toLocaleTimeString()}`;
    historyItem.classList = "bg-[#F4F7FF] rounded my-3 p-3"
    historyContainer.appendChild(historyItem);
}
