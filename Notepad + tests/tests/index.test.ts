/**
 * @jest-environment jsdom
 */

import {Notes} from '../src/notes';

describe('notes', () => {
    let note = {
        title: "TEST",
        content: "Test Description",
        color: "#0000ff",
        pinned: false,
        createDate: (new Date()).toLocaleString(),
        id: Date.now(),
    }
it('addNewNote', () => {
    let notes = new Notes();

    const ret = notes.addNote(note);
    expect(ret.style.backgroundColor).toBe('rgb(0, 0, 255)');
})})

describe('notes', () => {
    let note = {
        title: "TEST",
        content: "Test Description",
        color: "#0000ff",
        pinned: false,
        createDate: "22-02-2021r",
        id: 22022021,
    }
it('addNewNote', () => {
    let notes = new Notes();

    const ret = notes.addNote(note);
    const title:HTMLElement = document.createElement('h1');
    title.innerHTML = 'TEST';
    expect(ret.getElementsByTagName('h1')[0]).toStrictEqual(title);
})})

describe('notes', () => {
    let note = {
        title: "TEST",
        content: "Test Description",
        color: "#0000ff",
        pinned: false,
        createDate: "22-02-2021r",
        id: 22022021,
    }
it('addNewNote', () => {
    let notes = new Notes();

    const ret = notes.addNote(note);
    const content:HTMLElement = document.createElement('h4');
    content.innerHTML = 'Test Description';
    expect(ret.getElementsByTagName('h4')[0]).toStrictEqual(content);
})})

describe('notes', () => {
    let note = {
        title: "TEST",
        content: "Test Description",
        color: "#0000ff",
        pinned: false,
        createDate: "22-02-2021r",
        id: 22022021,
    }
it('addNewNote', () => {
    let notes = new Notes();

    const ret = notes.addNote(note);
    
    expect(ret.getElementsByTagName('button')[0].id).toBe('22022021');
})})

describe('notes', () => {
    let note = {
        title: "TEST",
        content: "Test Description",
        color: "#0000ff",
        pinned: false,
        createDate: "22-02-2021r",
        id: 22022021,
    }
it('addNewNote', () => {
    let notes = new Notes();

    const ret = notes.addNote(note);
    const title:HTMLElement = document.createElement('h1');
    title.innerHTML = 'ABC';
    expect(ret.getElementsByTagName('h1')[0]).not.toStrictEqual(title);
})})