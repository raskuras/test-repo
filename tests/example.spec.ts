import { expect, test } from "@playwright/test";

test("should display Try Playwright page title", async ({
  page,
}) => {
  await page.goto("/");

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle("Try Playwright");
});
