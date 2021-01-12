/* eslint-disable import/extensions */
/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */

import puppeteer from 'puppeteer-extra';
import StealthPlugin from 'puppeteer-extra-plugin-stealth';
import { createCursor } from './lib/ghost-cursor/lib/spoof.js';
import { installMouseHelper } from './lib/install-mouse-helper.js';
import { humanType } from './lib/ghost-keyboard.js';
import { humanScroll } from './lib/scroll-like-human.mjs';

puppeteer.use(StealthPlugin());

puppeteer.launch({ headless: false }).then(async (browser) => {
  console.log('Running tests..');
  const page = await browser.newPage();
  await installMouseHelper(page);
  const humanScroller = await humanScroll(page);
  console.log(humanScroller);
  const start = {
    x: 40,
    y: 40,
  };
  const cursor = createCursor(page);
  await page.goto('https://google.com');
  await page.waitForTimeout(5000);
  await cursor.click('.gLFyf');
  await page.waitForTimeout(1241);
  await humanType(page, 'avrasya roleplay warband');
  await page.waitForTimeout(2241);
  await page.keyboard.press('Enter');
  await page.waitForTimeout(4000);
  await humanScroller.scroll(2);
  await page.waitForTimeout(4000);
});
