document.addEventListener('DOMContentLoaded', function () {
    loadFromLocalStorage();
});

function addToWishlist() {
    var holidayName = document.getElementById("holidayName").value;
    var clothing = document.getElementById("clothing").value;
    var hasOutfit = document.getElementById("hasOutfit").checked;

    var table = document.getElementById("wishlistTable").getElementsByTagName('tbody')[0];
    var row = table.insertRow(table.rows.length);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    var cell4 = row.insertCell(3);

    cell1.innerHTML = holidayName;
    cell2.innerHTML = clothing;
    cell3.innerHTML = hasOutfit ? 'Yeeeees😼😏😏😏😏😏😏😏' : 'No :((((((((((🥺';

    var deleteButton = document.createElement('button');
    deleteButton.className = 'deleteButton';
    deleteButton.innerHTML = 'Delete';
    deleteButton.onclick = function () {
        deleteRow(row);
    };

    cell4.appendChild(deleteButton);
    saveToLocalStorage();
}

function deleteRow(row) {
    var index = row.rowIndex;
    document.getElementById("wishlistTable").deleteRow(index);
    saveToLocalStorage();
}

function saveToLocalStorage() {
    var wishlistData = [];
    var tableRows = document.getElementById("wishlistTable").rows;
    for (var i = 1; i < tableRows.length; i++) {
        var rowData = {
            holiday: tableRows[i].cells[0].innerHTML,
            clothing: tableRows[i].cells[1].innerHTML,
            hasOutfit: tableRows[i].cells[2].innerHTML === 'Yeeeees😼😏😏😏😏😏😏😏'
        };
        wishlistData.push(rowData);
    }

    localStorage.setItem('wishlist', JSON.stringify(wishlistData));
}

function loadFromLocalStorage() {
    var wishlistData = JSON.parse(localStorage.getItem('wishlist')) || [];

    var table = document.getElementById("wishlistTable").getElementsByTagName('tbody')[0];
    for (var i = 0; i < wishlistData.length; i++) {
        const row = table.insertRow(table.rows.length);
        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        var cell3 = row.insertCell(2);
        var cell4 = row.insertCell(3);

        cell1.innerHTML = wishlistData[i].holiday;
        cell2.innerHTML = wishlistData[i].clothing;
        cell3.innerHTML = wishlistData[i].hasOutfit ? 'Yeeeees😼😏😏😏😏😏😏😏' : 'No :((((((((((🥺';

        var deleteButton = document.createElement('button');
        deleteButton.className = 'deleteButton';
        deleteButton.innerHTML = 'Delete';
        deleteButton.onclick = function () {
            deleteRow(row);
        };

        cell4.appendChild(deleteButton);
    }
}