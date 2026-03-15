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
  "should load and display Try Playwright page",
  { tag: ["@smoke", "@page", "@load"] },
  async ({ page }) => {
    await page.goto("/");
    // Sprawdź, czy strona jest załadowana i widoczna
    await expect(page).toHaveTitle(/Try Playwright/i);
    await expect(page.locator("body")).toBeVisible();
  },
);

test(
  "should display editor and run button",
  { tag: ["@smoke", "@editor", "@button"] },
  async ({ page }) => {
    await page.goto("/");
    // Sprawdź, czy edytor jest widoczny
    await expect(page.locator("text=Editor")).toBeVisible();
    // Sprawdź, czy przycisk Run jest widoczny
    await expect(page.getByRole("button", { name: /Run/i })).toBeVisible();
  },
);

test(
  "should display Examples section",
  { tag: ["@smoke", "@examples", "@section"] },
  async ({ page }) => {
    await page.goto("/");
    // Sprawdź, czy sekcja Examples jest widoczna
    await expect(page.getByText("Examples", { exact: false })).toBeVisible();
  },
);

test(
  "should display code snippet",
  { tag: ["@smoke", "@code", "@snippet"] },
  async ({ page }) => {
    await page.goto("/");
    // Sprawdź, czy przykładowy kod jest widoczny w edytorze (dowolny <code> lub <pre> z kodem)
    // Sprawdź, czy fragment kodu jest widoczny na stronie (np. w edytorze)
    await expect(
      page.getByText("const playwright = require('playwright');", {
        exact: false,
      }),
    ).toBeVisible();
  },
);

test(
  "should display documentation and repo links",
  { tag: ["@smoke", "@links", "@footer"] },
  async ({ page }) => {
    await page.goto("/");
    // Sprawdź, czy link do dokumentacji jest widoczny
    await expect(
      page.getByRole("link", { name: /Documentation/i }),
    ).toBeVisible();
    // Sprawdź, czy link do repozytorium jest widoczny
    await expect(
      page.getByRole("link", { name: /View Source/i }),
    ).toBeVisible();
  },
);
