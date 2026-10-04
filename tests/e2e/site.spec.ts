import { expect, test } from "@playwright/test";

test("primary routes render and navigation has no dead links", async ({ page }) => {
  const routes = ["/", "/rooms", "/rooms/stone-room", "/food", "/around", "/house", "/journal", "/journal/first-snow", "/find-us", "/stay", "/privacy"];
  for (const route of routes) {
    const response = await page.goto(route);
    expect(response?.ok(), route).toBeTruthy();
    await expect(page.locator("h1").first()).toBeVisible();
  }
});

test("visitor routes expose only working internal destinations", async ({ page, request }) => {
  const destinations = new Set<string>();
  for (const route of ["/", "/rooms", "/food", "/house", "/around", "/journal", "/find-us", "/stay"]) {
    await page.goto(route);
    const hrefs = await page.locator('a[href^="/"]').evaluateAll((links) => links.map((link) => link.getAttribute("href")!));
    hrefs.forEach((href) => destinations.add(href.split("#")[0]));
  }
  for (const destination of destinations) {
    const response = await request.get(destination);
    expect(response.ok(), destination).toBeTruthy();
  }
});

test("home photography loads after the full scroll journey", async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto("/");
  await page.evaluate(async () => {
    for (let y = 0; y < document.documentElement.scrollHeight; y += 600) {
      window.scrollTo(0, y);
      await new Promise((resolve) => setTimeout(resolve, 60));
    }
  });
  await expect.poll(() => page.locator("img").evaluateAll((images) => images.filter((image) => {
    const img = image as HTMLImageElement;
    return !img.complete || img.naturalWidth === 0;
  }).map((image) => image.getAttribute("src"))), { timeout: 10_000 }).toEqual([]);
});

test("mobile menu is keyboard-operable and routes to rooms", async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto("/");
  const menu = page.getByRole("button", { name: "Menu" });
  await menu.focus();
  await page.keyboard.press("Enter");
  await expect(page.getByRole("navigation", { name: "Primary navigation" })).toBeVisible();
  await page.keyboard.press("Escape");
  await expect(menu).toHaveAttribute("aria-expanded", "false");
  await expect(menu).toBeFocused();
  await menu.click();
  await page.locator(".site-header").getByRole("link", { name: "Plan a stay" }).click();
  await expect(page).toHaveURL(/\/stay$/);
  await expect(page.getByRole("navigation", { name: "Primary navigation" })).toBeHidden();
  await page.goto("/");
  await menu.click();
  await page.getByRole("link", { name: "Rooms", exact: true }).click();
  await expect(page).toHaveURL(/\/rooms$/);
  await expect(page.getByRole("heading", { name: "Rooms 01–11" })).toBeVisible();
});

test("room pages have distinct imagery and room-specific detail", async ({ page }) => {
  const images = new Set<string>();
  const details = new Set<string>();
  for (const slug of ["east-window", "stone-room", "north-room", "long-room", "roof-room", "garden-room", "corner-room", "quiet-room", "upper-room", "family-room", "last-room"]) {
    await page.goto(`/rooms/${slug}`);
    images.add(await page.locator(".room-hero img").getAttribute("src") ?? "");
    details.add(await page.locator(".room-detail .prose").innerText());
  }
  expect(images.size).toBe(11);
  expect(details.size).toBe(11);
});

test("site sets no cookies or browser storage", async ({ page, context }) => {
  await page.goto("/");
  expect(await context.cookies()).toEqual([]);
  expect(await page.evaluate(() => ({ local: localStorage.length, session: sessionStorage.length }))).toEqual({ local: 0, session: 0 });
});

test("declared site icon loads without an asset error", async ({ page, request }) => {
  await page.goto("/");
  const href = await page.locator('link[rel="icon"]').getAttribute("href");
  expect(href).toBeTruthy();
  expect((await request.get(href!)).ok()).toBeTruthy();
});

test("inquiry exposes validation error and honest success", async ({ page }) => {
  await page.goto("/stay");
  await page.locator("input[name=arrival]").fill("2020-01-01");
  await page.locator("input[name=departure]").fill("2020-01-03");
  await page.locator("input[name=name]").fill("Test Guest");
  await page.locator("input[name=email]").fill("guest@example.com");
  await page.getByRole("checkbox").check();
  await page.getByRole("button", { name: "Check inquiry" }).click();
  await expect(page.getByRole("status")).toContainText("Arrival must be today or later");
  await page.locator("input[name=arrival]").fill("2099-12-12");
  await page.locator("input[name=departure]").fill("2099-12-10");
  await page.getByRole("button", { name: "Check inquiry" }).click();
  await expect(page.getByRole("status")).toContainText("Departure must be after arrival");
  await page.locator("input[name=departure]").fill("2099-12-14");
  await page.getByRole("button", { name: "Check inquiry" }).click();
  await expect(page.getByRole("status")).toContainText("does not transmit", { timeout: 3_000 });
  await page.locator("input[name=departure]").fill("2099-12-10");
  await expect(page.getByRole("status")).toBeEmpty();
});

test("unknown route has useful recovery links", async ({ page }) => {
  const response = await page.goto("/not-a-real-path");
  expect(response?.status()).toBe(404);
  await expect(page.getByRole("heading", { name: "The path ends." })).toBeVisible();
  await expect(page.getByRole("link", { name: "Return to the house" })).toBeVisible();
});

test("representative mobile pages do not overflow horizontally", async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 });
  for (const route of ["/", "/rooms", "/rooms/stone-room", "/food", "/stay"]) {
    await page.goto(route);
    const overflow = await page.evaluate(() => document.documentElement.scrollWidth - document.documentElement.clientWidth);
    expect(overflow, route).toBeLessThanOrEqual(1);
  }
});

test("representative mobile links have 44px targets", async ({ page }) => {
  await page.setViewportSize({ width: 375, height: 812 });
  await page.goto("/");
  for (const selector of [".wordmark", ".stay-link", ".menu-button", ".sp-opening-bottom a", ".sp-table-copy a", ".sp-home-terrain a"]) {
    const boxes = await page.locator(selector).evaluateAll((items) => items.map((item) => item.getBoundingClientRect().height));
    expect(boxes.every((height) => height >= 44), `${selector}: ${boxes.join(", ")}`).toBeTruthy();
  }
});

test("representative routes have no console or page errors", async ({ page }) => {
  const errors: string[] = [];
  page.on("pageerror", (error) => errors.push(error.message));
  page.on("console", (message) => {
    if (message.type() === "error") errors.push(message.text());
  });
  for (const route of ["/", "/rooms", "/food", "/stay"]) await page.goto(route);
  expect(errors).toEqual([]);
});
