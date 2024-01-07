import { test, expect } from '@playwright/test';

//Website 
const TEST_SITE_URL = 'https://onlinelibrary.wiley.com/';

// Xpaths
const ADVANCE_SEARCH_LINK = '//*[@id="main-content"]/div/div/div/div/div[1]/div/div/div[1]/div[2]/a';
const ADVANCE_SEARCH_TAB = '//*[@id="pane-5aab5ec1-e445-4b30-9dd1-5d8bd864384601con"]';
const CITATION_SEARCH_TAB = '//*[@id="pane-5aab5ec1-e445-4b30-9dd1-5d8bd864384611con"]';
const CITATION_JOURNAL_INPUT_BOX = '//*[@id="citationJournal"]';
const CITATION_YEAR_INPUT_BOX = '//*[@id="citationIssueYear"]';
const CITATION_VOLUME_INPUT_BOX = '//*[@id="citationVolume"]';
const CITATION_ISSUE_INPUT_BOX = '//*[@id="citationIssue"]';
const CITATION_PAGE_INPUT_BOX = '//*[@id="citationPage"]';
const CITATION_ARTICLE_ID_INPUT_BOX = '//*[@id="citationNumber"]';


//text
const ADVANCED_SEARCH_TXT = 'Advanced Search';
const CITATION_SEARCH_TXT = 'Citation Search';
const CITATION_JOURNAL_INPUT = 'Journal of Quality Assurance';
const ENTER = 'Enter';


test('citation search', async ({ page }) => {
    await page.goto(TEST_SITE_URL);
    await page.locator(ADVANCE_SEARCH_LINK).click();
    await expect(page.locator(ADVANCE_SEARCH_TAB)).toHaveText(ADVANCED_SEARCH_TXT, { timeout: 6000 });
    await expect(page.locator(CITATION_SEARCH_TAB)).toHaveText(CITATION_SEARCH_TXT, { timeout: 6000 });
    await page.locator(CITATION_SEARCH_TAB).click();
    await expect(page.locator(CITATION_YEAR_INPUT_BOX)).toBeDisabled();
    await expect(page.locator(CITATION_VOLUME_INPUT_BOX)).toBeDisabled();
    await expect(page.locator(CITATION_ISSUE_INPUT_BOX)).toBeDisabled();
    await expect(page.locator(CITATION_PAGE_INPUT_BOX)).toBeDisabled();
    await expect(page.locator(CITATION_ARTICLE_ID_INPUT_BOX)).toBeDisabled();
    await page.locator(CITATION_JOURNAL_INPUT_BOX).pressSequentially(CITATION_JOURNAL_INPUT, { timeout: 10000 });
    await page.waitForTimeout(3000);
    await page.keyboard.press(ENTER)
    await expect(page.locator(CITATION_YEAR_INPUT_BOX)).toBeEnabled();
    await expect(page.locator(CITATION_VOLUME_INPUT_BOX)).toBeEnabled();
    await expect(page.locator(CITATION_ISSUE_INPUT_BOX)).toBeEnabled();
    await expect(page.locator(CITATION_PAGE_INPUT_BOX)).toBeEnabled();
    await expect(page.locator(CITATION_ARTICLE_ID_INPUT_BOX)).toBeEnabled();


});

