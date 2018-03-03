const fs = require('fs');
const expect = require('expect');
const notes = require('../notes/notes.js');

// Run before each spec test (it())
beforeEach(() => {
	fs.writeFileSync('./notes-data.json', '');
});

describe('addNote()', () => {

	it('Should add note', () => {
		let note = {
			title: 'first note',
			body: 'someday go somewhere'
		}

		let result = notes.addNote(note.title, note.body)
		expect(result).toEqual(note)
	});

	it('Should not add duplicate notes', () => {
		let note1 = {
			title: 'first note',
			body: 'someday go somewhere'
		};
		let note2 = note1;

		let result1 = notes.addNote(note1.title, note1.body);
		let result2 = notes.addNote(note2.title, note2.body);
		expect(result1).toEqual(note1);
		expect(result2).toBe(undefined);

	});
})

describe('getAll()', () => {
	it('Should return an empty array', () => {
		expect(notes.getAll()).toEqual([]);
	})

	it('Should return all data from the store', () => {
		let note1 = {title:'a', body:'xyz'};
		let note2 = {title:'b', body:'xyz'};
		let note3 = {title:'c', body:'xyz'};
		notes.addNote(note1.title, note1.body);
		notes.addNote(note2.title, note2.body);
		notes.addNote(note3.title, note3.body);
		expect(notes.getAll()).toEqual([note1, note2, note3]);
	})
});

describe('getNote(title)', () => {
	it('Should return a note', () => {
		let note = {title:'a', body:'xyz'};
		notes.addNote(note.title, note.body);
		let result = notes.getNote(note.title);
		expect(result).toEqual(note);
	});

	it('Should return undefined', () => {
		expect(notes.getNote()).toBe(undefined);
		expect(notes.getNote('a')).toBe(undefined);
	});
});

describe('removeNote(title)', () => {
	it('Should remove a note', () => {
		let note = {title:'a', body:'xyz'};
		notes.addNote(note.title, note.body);
		let result = notes.removeNote(note.title);
		expect(result).toBe(true);
		expect(notes.getAll()).toEqual([]);
	});
});