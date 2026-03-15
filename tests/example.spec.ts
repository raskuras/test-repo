import { expect, test } from "@playwright/test";

test(
  "should display Try Playwright page title",
  {
    tag: ["@smoke", "@page", "@title"],
  },
  async ({ page }) => {
    await page.goto("/");

    // Expect a title "to contain" a substring.
    await expect(page).toHaveTitle("Try Playwright");
  },
);

test(
  'should load and display Try Playwright page',
  { tag: ['@smoke', '@page', '@load'] },
  async ({ page }) => {
    await page.goto('/');
    // Sprawdź, czy strona jest załadowana i widoczna
    await expect(page).toHaveTitle(/Try Playwright/i);
    await expect(page.locator('body')).toBeVisible();
  }
);
