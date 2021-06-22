//import * as puppeteer from 'puppeteer';
const puppeteer = require('puppeteer');

(async () => {
    const browser = await puppeteer.launch({headless: false, slowMo: 130});
    const page = await browser.newPage();
    await page.goto('localhost:8080');
    await page.screenshot({path: 'screen.png'});
    await page.waitForSelector('#noteTitle');
    await page.type('#noteTitle', 'TEST');
    await page.waitForSelector('#noteContent');
    await page.type('#noteContent', 'TEST OPIS');
    await page.click('#addNoteBtn');

    await page.screenshot({path: 'screen-after.png'});
    await browser.close();
});