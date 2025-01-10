'use strict';
//refernce - https://github.com/anthonysukotjo/google-form-bot
const puppeteer = require('puppeteer');
const userManager = require('./userManager.js');

const config = {
  // formLink: 'https://docs.google.com/forms/d/e/1FAIpQLSem5p1dFyi_LBewrSftI1r2cpDf20bsqoZ9gx9nE7nyiir22g/viewform?usp=dialog',  //@baltej223
  formLink: 'https://docs.google.com/forms/d/e/1FAIpQLScN-IndYJtjTEsoAzPzgxqUYwWs4Nbll_wZ0vEoe6xEa1JjBA/viewform?usp=header',
  
  email: 'sarthaktyagi2810@gmail.com',
  monitorInterval: 5000,
  debug: true
};

async function fillForm() {
  let browser;
  
  try {
    browser = await puppeteer.launch({
      headless: true,
      args: ['--no-sandbox'],
    });

    const page = await browser.newPage();
    console.log("Opening form...");

    await page.goto(config.formLink, { waitUntil: 'networkidle2' });
    const title = await page.$eval("title", el => el.textContent);
    console.log("Form opened");
    console.log("Form Title:", title);
    await page.waitForSelector('input.whsOnd.zHQkBf');
    const inputField = await page.$('input.whsOnd.zHQkBf');
    
    if (!inputField) {
      throw new Error('Could not find input field');
    }

    await page.evaluate(el => el.value = '', inputField);
    await inputField.type(config.email);
    console.log("Email entered:", config.email);
    const submitSelectors = [
      'div[role="button"][jsname="M2UYVd"]',
      '.freebirdFormviewerViewNavigationSubmitButton',
      'div[jscontroller="soHxf"][role="button"]',
      '.appsMaterialWizButtonEl',
      '.uArJ5e.UQuaGc.Y5sE8d.VkkpIf.QvWxOd'
    ];
    let submitButton = null;
    for (const selector of submitSelectors) {
      try {
        await page.waitForSelector(selector, { timeout: 2000 });
        submitButton = await page.$(selector);
        if (submitButton) {
          console.log(`Found submit button with selector: ${selector}`);
          break;
        }
      } catch (e) {
        if (config.debug) {
          console.log(`Submit button selector ${selector} not found`);
        }
      }
    }

    if (!submitButton) {
      console.log("Attempting to find and click Next button...");
      await page.evaluate(() => {
        const buttons = Array.from(document.querySelectorAll('div[role="button"]'));
        const nextButton = buttons.find(button => {
          const text = button.textContent.toLowerCase();
          return text.includes('next') || text.includes('submit') || text.includes('send');
        });
        if (nextButton) nextButton.click();
      });
    } else {
      await submitButton.click();
    }
    try {
      await page.waitForNavigation({ timeout: 5000 });
      const submissionPage = await page.url();
      if (submissionPage.includes("formResponse")) {
        console.log("Form Submitted Successfully!");
      }
    } catch (e) {
      console.log("Navigation after submit didn't complete, but form might still be submitted");
    }

    await page.close();
    await browser.close();

  } catch (error) {
    console.error("Error:", error.message);
    if (browser) {
      await browser.close();
    }
  }
}

async function monitorAndFill() {
  console.log("Starting form monitor...");
  console.log(`Will attempt to fill form with email: ${config.email}`);
  await fillForm();
  setInterval(async () => {
    try {
      await fillForm();
    } catch (error) {
      console.error("Monitor iteration failed:", error.message);
    }
  }, config.monitorInterval);
}

process.on('SIGINT', () => {
  console.log('\nStopping form monitor...');
  process.exit(0);
});
monitorAndFill().catch(console.error);