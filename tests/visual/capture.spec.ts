import { test } from "@playwright/test";

const cases = [
  { path: "/", name: "home-1440.png", width: 1440, height: 1000 },
  { path: "/", name: "home-390.png", width: 390, height: 844 },
  { path: "/rooms", name: "rooms-1440.png", width: 1440, height: 1000 },
  { path: "/rooms/stone-room", name: "room-detail-390.png", width: 390, height: 844 },
  { path: "/food", name: "food-1440.png", width: 1440, height: 1000 },
  { path: "/around", name: "around-1440.png", width: 1440, height: 1000 },
  { path: "/house", name: "house-1440.png", width: 1440, height: 1000 },
  { path: "/journal", name: "journal-1440.png", width: 1440, height: 1000 },
  { path: "/find-us", name: "find-us-1440.png", width: 1440, height: 1000 },
  { path: "/stay", name: "stay-1440.png", width: 1440, height: 1000 },
] as const;

for (const item of cases) {
  test(`capture ${item.name}`, async ({ page }) => {
    await page.setViewportSize({ width: item.width, height: item.height });
    await page.goto(item.path);
    await page.evaluate(async () => {
      for (let y = 0; y < document.body.scrollHeight; y += 600) {
        window.scrollTo(0, y);
        await new Promise((resolve) => setTimeout(resolve, 50));
      }
      window.scrollTo(0, 0);
    });
    const images = page.locator("img");
    if (await images.count()) await images.last().waitFor({ state: "visible" });
    await page.screenshot({ path: `tests/visual/current/${item.name}`, fullPage: true });
  });
}
