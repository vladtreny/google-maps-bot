// puppeteer-extra is a drop-in replacement for puppeteer,
// it augments the installed puppeteer with plugin functionality
/* eslint-disable */
const puppeteer = require("puppeteer-extra");
const { createCursor } = require("./lib/ghost-cursor");
const { installMouseHelper } = require("./lib/install-mouse-helper");
const { humanType } = require("./lib/keyboard-mistake");

// add stealth plugin and use defaults (all evasion techniques)
const StealthPlugin = require("puppeteer-extra-plugin-stealth");
puppeteer.use(StealthPlugin());

// puppeteer usage as normal
puppeteer.launch({ headless: false }).then(async (browser) => {
  console.log("Running tests..");
  const page = await browser.newPage();
  await installMouseHelper(page);
  const start = {
    x: 40,
    y: 40,
  };
  const cursor = createCursor(page);
  await page.goto("https://recaptcha-demo.appspot.com/recaptcha-v3-request-scores.php");
  await page.waitForTimeout(13000);
  await cursor.click(".gLFyf");
  await page.waitForTimeout(1241);
  await humanType(page, "avrasya roleplay warband")
  await page.waitForTimeout(2241);
  await page.keyboard.press("Enter");
  await page.waitForTimeout(10000);
  await page.evaluate(
    () =>
      new Promise((resolve) => {
        var scrollTop = -1;
        const interval = setInterval(() => {
          window.scrollBy(0, 2);
          if (document.documentElement.scrollTop !== scrollTop) {
            scrollTop = document.documentElement.scrollTop;
            return;
          }
          clearInterval(interval);
          resolve();
        }, 10);
      })
  );
  await page.waitForTimeout(10000);
  //await page.waitForXPath("//span[contains(string(),\"Avrasya\")]")
  var selecctro = (
    await page.$x('(//span[contains(string(),"Avrasya")])[1]/ancestor::a')
  )[0];
  await cursor.click(selecctro);
  //await cursor.click('#search > div > div > div > div > div > a')
  await page.waitForTimeout(5000);
  await cursor.click(
    "ul.p-breadcrumbs:nth-child(1) > li:nth-child(4) > a:nth-child(1) > span:nth-child(1)"
  );
  await page.waitForTimeout(3023);
  await cursor.click(
    "div.node:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(3) > ol:nth-child(2) > li:nth-child(2) > a:nth-child(1)"
  );

  await page.waitForTimeout(4321);
  await cursor.click("#js-XFUniqueId5");
  await page.waitForTimeout(3023);
  await page.evaluate(
    () =>
      new Promise((resolve) => {
        var scrollTop = -1;
        const interval = setInterval(() => {
          window.scrollBy(0, 100);
          if (document.documentElement.scrollTop !== scrollTop) {
            scrollTop = document.documentElement.scrollTop;
            return;
          }
          clearInterval(interval);
          resolve();
        }, 10);
      })
  );
  await page.waitForTimeout(5023);
  await browser.close();
  console.log(`All done, check the screenshot. ✨`);
});
