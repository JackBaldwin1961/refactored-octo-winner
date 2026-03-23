let array = [1, 2, 3, 4, 5];

function displayArray() {
    const display = document.getElementById("arrayList");
    display.innerHTML = "";

    array.forEach(function(item) {
        const li = document.createElement("li");
        li.textContent = item;
        display.appendChild(li);
    });
}

function addElement() {
    const input = document.getElementById("elementInput");
    const value = parseInt(input.value);

    if (!isNaN(value)) {
        array.push(value);
        input.value = "";
        displayArray();
    } else {
        alert("Please enter a valid number.");
    }
}

function addFirstElement() {
    const input = document.getElementById("elementInput");
    const value = parseInt(input.value);

    if (!isNaN(value)) {
        array.unshift(value);
        input.value = "";
        displayArray();
    } else {
        alert("Please enter a valid number.");
    }
}

function removeLastElement() {
    if (array.length > 0) {
        array.pop();
        displayArray();
    } else {
        alert("Array is already empty.");
    }
}

function removeFirstElement() {
    if (array.length > 0) {
        array.shift();
        displayArray();
    } else {
        alert("Array is already empty.");
    }
}

function removeSecondElement() {
    if (array.length > 1) {
        array.splice(1, 1);
        displayArray();
    } else {
        alert("Not enough elements to remove the second one.");
    }
}

displayArray();

document.getElementById("push").addEventListener("click", addElement);
document.getElementById("unshift").addEventListener("click", addFirstElement);
document.getElementById("pop").addEventListener("click", removeLastElement);
document.getElementById("shift").addEventListener("click", removeFirstElement);
document.getElementById("splice").addEventListener("click", removeSecondElement);

