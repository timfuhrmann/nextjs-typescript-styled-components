import { test } from "@playwright/test";

test("should render home page", async ({ page }) => {
    await page.goto("/");
    await page.getByText(/Home/);
});
