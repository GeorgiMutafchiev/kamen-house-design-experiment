import { expect, test } from "@playwright/test";

test("bootstrap page renders", async ({ page }) => {
  await page.goto("/");
  await expect(page.getByRole("heading", { name: "KAMEN HOUSE" })).toBeVisible();
});

