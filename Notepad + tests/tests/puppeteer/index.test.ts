//import * as puppeteer from 'puppeteer';
const puppeteer = require('puppeteer');
describe('NewNote', () => {
it('newNote', () => (async () => {
    const browser = await puppeteer.launch({headless: false, slowMo: 10});
    const page = await browser.newPage();
    await page.goto('http://localhost:8080');
    await page.screenshot({path: 'screen.png'});
    await page.waitForSelector('#noteTitle');
    await page.type('#noteTitle', 'TEST');
    await page.waitForSelector('#noteContent');
    await page.type('#noteContent', 'TEST OPIS');
    await page.click('#addNoteBtn');

    await page.screenshot({path: 'screen-after.png'});
    const note = await page.$('#notesArea');
    const title = await (
        await note.$('h1')
    ).evaluate((node:any) => node.innerHTML);
    const content = await (
        await note.$('h4')
    ).evaluate((node:any) => node.innerHTML);
    expect(title).toBe('TEST');
    expect(content).toBe('TEST OPIS');
    await browser.close();
})());
})