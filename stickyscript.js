const notesContainer = document.getElementById("container");
const addNoteButton = notesContainer.querySelector(".add-note");

getNotes().forEach(note => {
	const noteElement = createNoteElement(note.id, note.content);
	notesContainer.insertBefore(noteElement, addNoteButton);
});

addNoteButton.addEventListener("click", () => addNote());


function getNotes(){
	return JSON.parse(localStorage.getItem("sticky-notes") || "[]");
}

function saveNotes(notes){
	localStorage.setItem("sticky-notes", JSON.stringify(notes));
}

function createNoteElement(id, content){
	const element = document.createElement("textarea");
	element.classList.add("note");
	element.value = content;
	element.placeholder = "Empty Sticky Note";

	element.addEventListener("change", () => {
		updateNote(id, element.value);
	});

	element.addEventListener("dblclick", () => {
		const doDelete = confirm("Are you sure you wish to delete this sticky note?");
	
		if (doDelete) {
			deleteNote(id, element);
		}
	});

	return element;
}

function addNote() {
	const notes = getNotes();
	const noteObject = {
		id: Math.floor(Math.random() * 100000),
		content: ""
	};

	const noteElement = createNoteElement(noteObject.id, noteObject.content);
	notesContainer.insertBefore(noteElement, addNoteButton);

	existingNotes.push(noteObject);
	saveNotes(notes);

}

function updateNote(id, newContent){
	console.log("Updating Note...");
	console.log(id, newContent);
}

function deleteNote(id, element){
	console.log("Deleting Note...");
	console.log(id, newContent);
}