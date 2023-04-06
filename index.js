let intervalId = null;
const dataTable = document.getElementById('dataTable');
const intervalInput = document.getElementById('interval');

function generateData() {
    const row = document.createElement('tr');
    const name = document.createElement('td');
    const value = document.createElement('td');
    const randomName = Math.random().toString(36).substring(2, 8);
    const randomValue = Math.floor(Math.random() * 100);
    name.textContent = randomName;
    value.textContent = randomValue;
    row.appendChild(name);
    row.appendChild(value);
    dataTable.querySelector('tbody').appendChild(row);
}

function startGeneration() {
    const interval = intervalInput.valueAsNumber;
    if (!intervalId) {
        intervalId = setInterval(generateData, interval * 1000);
    }
}

function stopGeneration() {
    if (intervalId) {
        clearInterval(intervalId);
        intervalId = null;
    }
}