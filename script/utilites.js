function getTextToNumber(id) {
    const value = document.getElementById(id).innerText;
    return parseInt(value);
}

// Call history
function callHistoryAdded(title) {
    const historyContainer = document.getElementById("history-container");
    const historyItem = document.createElement("p");
    historyItem.innerText = `You have completed the task ${title} at ${new Date().toLocaleTimeString()}`;
    historyContainer.appendChild(historyItem);
}

// Random color genarator
function generateColor() {
    
}