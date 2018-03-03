const fs = require('fs');

let STORE_PATH = './notes-data.json';

let fetchNotes = () => {

	try{
		const notes = fs.readFileSync(STORE_PATH, 'utf-8');
		return JSON.parse(notes);
	}catch(e){
		return [];
	}
	
};

let saveNotes = (notes) => {
	fs.writeFileSync(STORE_PATH, JSON.stringify(notes));
};

let addNote = (title, body) => {
	let notes = fetchNotes()

	if(!getNote(title)){
		let note = {title, body};
		notes.push(note);
		saveNotes(notes);
		return note;
	}
	

};

let getAll = () => {
	let notes = fetchNotes();
	return notes;

};

let getNote = (title) => {
	let notes = fetchNotes()
	return notes.find(note => {return note.title === title})
	
	// for(let note of notes){
	// 	//console.log(note)
	// 	if(note.title === title){
	// 		return note
	// 	}
	// }

};

let removeNote = (title) => {
	let notes = fetchNotes()
	let filtered_Notes = notes.filter(note => {return note.title !== title})
	if(filtered_Notes.length !== notes.length){
		saveNotes(filtered_Notes)
		return true
	}else{
		return false
	} 

};

let updated_notes = (title) =>{
	let notes = fetchNotes()

	notes.map((note) => {
		if(note.title === title){
			saveNotes(title, body)
			return true
		}else{
			return note;
		}
	})
	 saveNotes(updated_notes);
};

let logNote = (note) => {
  console.log('--');
  console.log(`Title: ${note.title}`);
  console.log(`Body: ${note.body}`);
};

module.exports = {
  addNote,
  getAll,
  getNote,
  removeNote,
  updated_notes,
  logNote
};
//console.log(addNote("Hamed", "AZERT"))