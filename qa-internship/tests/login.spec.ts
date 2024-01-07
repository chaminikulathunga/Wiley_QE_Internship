import { test, expect } from '@playwright/test';

//Website 
const TEST_SITE_URL = 'https://onlinelibrary.wiley.com/';

// Xpaths
const LOGIN_LINK = '//*[@id="pb-page-content"]/div/div[1]/header/div/div[2]/div/div/div/div[2]/div/div[2]/div/div/a/span[2]';
const LOGIN_USERNAME = '//*[@id="username"]'
const LOGIN_PASSWORD = '//*[@id="password"]'
const LOGIN_SUBMIT_BTN = '//*[@id="pb-page-content"]/div/div[4]/div/div[2]/div[2]/form/div[5]/span/input'
const LOGGED_USER_NAME_TXT = '//*[@id="indivLogin"]/span[2]';

// Credentials
const USERNAME = 'Kulathungachamini@gmail.com';
const PASSWORD = 'Mahamaya01@';
const LOGGED_USER_NAME = 'Chamini';


test('login', async ({ page }) => {
  await page.goto(TEST_SITE_URL);
  await page.locator(LOGIN_LINK).click();
  await page.locator(LOGIN_USERNAME).pressSequentially(USERNAME);
  await page.locator(LOGIN_PASSWORD).pressSequentially(PASSWORD);
  await page.locator(LOGIN_SUBMIT_BTN).click();
  await expect(page.locator(LOGGED_USER_NAME_TXT)).toHaveText(LOGGED_USER_NAME, { timeout: 6000 });

});

