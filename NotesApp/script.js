const notesContainer = document.querySelector(".notes-contaniner");
const createBtn = document.querySelector(".create-btn");
let noteCount = 0; // To track the number of notes

// Load notes from local storage
function showNotes() {
    const savedNotes = localStorage.getItem("notes");
    if (savedNotes) {
        notesContainer.innerHTML = savedNotes;
        // Update note count based on existing notes
        noteCount = notesContainer.querySelectorAll(".input-box").length;
    }
}
showNotes();

// Update local storage
function updateStorage() {
    localStorage.setItem("notes", notesContainer.innerHTML);
}

// Create a new numbered note
createBtn.addEventListener("click", () => {
    noteCount++; // Increment note count
    let inputBox = document.createElement("p");
    let img = document.createElement("img");

    // Set up the new note
    inputBox.className = "input-box";
    inputBox.setAttribute("contenteditable", "true");
    inputBox.textContent = `notes${noteCount}`; // Add numbering

    img.src = "notes-app-img/images/delete.png";
    img.alt = "Delete Note";

    // Append the new note to the container
    notesContainer.appendChild(inputBox).appendChild(img);
    updateStorage();
});

// Handle deletion of notes
notesContainer.addEventListener("click", function (e) {
    if (e.target.tagName === "IMG") {
        e.target.parentElement.remove(); // Remove the note
        updateStorage();
    }
});

// Listen for content updates in notes
notesContainer.addEventListener("input", (e) => {
    if (e.target.classList.contains("input-box")) {
        updateStorage();
    }
});

// Prevent default behavior of Enter key
document.addEventListener("keydown", event => {
    if (event.key === "Enter") {
        document.execCommand("insertLineBreak");
        event.preventDefault();
    }
});
