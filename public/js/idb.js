// create variable to hold db connection

let db;

// establish a connection to IndexedDB databased called 'budget' and set it to version 1

const request = indexedDB.open('budget', 1);

// this event will emit if the database version changes (nonexistent to version 1, v1 to v2, etc.)

request.onupgradeneeded = function(event) {

    // save a reference to the database

    const db = event.target.result;

    // create an object store called `new_budget`, set it to have an auto incrementing primary key

    db.createObjectStore(`new_budget`, { autoIncrement: true });
};

// upon success

request.onsuccess = function(event) {
    db = event.target.result;

    if (navigator.onLine) {
        // uploadBudget();
    }
};

request.onerror = function(event) {
    console.log(event.target.errorCode);
};

// this function will be executed if we attempt to submit a new pizza and there's no internet connection
function saveRecord(record) {
    // open a new transaction with the database with read and write permissions

    const transaction = db.transaction(['new_budget'], 'readwrite');

    // access the object store for `new_budget`

    const budgetObjectStore = transaction.objectStore('new_budget');

    // add record to your store with add method

    budgetObjectStore.add(record);
}