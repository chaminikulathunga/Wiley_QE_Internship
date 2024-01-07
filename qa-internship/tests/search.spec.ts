import { test, expect } from '@playwright/test';

//Website 
const TEST_SITE_URL = 'https://onlinelibrary.wiley.com/';

// Xpaths
const SERACH_FIELD = '//*[@id="searchField1"]';
const RESULT_COUNT_TXT = '//*[@id="main-content"]/div/div/div[1]/div/div/div[2]/div/div/div[1]/div/div[1]/span[1]';
const RESULT_SUFFIX_TXT = '//*[@id="main-content"]/div/div/div[1]/div/div/div[2]/div/div/div[1]/div/div[1]/span[3]';
const BOOK_NAME_TXT = '//*[@id="search-result"]/li/div/h3/a';
const RESULT_TYPE_TXT = '//*[@id="search-result"]/li/div/div[1]/span';

//text
const ISBN = '9781119312451';
const ENTER = 'Enter';
const RESULT_COUNT = '1';
const BOOK_NAME = 'Software Quality Assurance, First Edition';
const RESULT_TYPE = 'Book';



test('search', async ({ page }) => {
    await page.goto(TEST_SITE_URL);
    await page.locator(SERACH_FIELD).pressSequentially(ISBN);
    await page.keyboard.press(ENTER)
    await expect(page.locator(RESULT_COUNT_TXT)).toHaveText(RESULT_COUNT, { timeout: 6000 });
    await expect(page.locator(RESULT_SUFFIX_TXT)).toHaveText("\"" + ISBN + "\" anywhere");
    await expect(page.locator(BOOK_NAME_TXT)).toHaveText(BOOK_NAME);
    await expect(page.locator(RESULT_TYPE_TXT)).toHaveText(RESULT_TYPE);

});

