import { test, expect } from "@playwright/test";

test.describe("Menu mobile", () => {
  test.use({ viewport: { width: 390, height: 844 } });

  test("abre e fecha o menu hamburger", async ({ page }) => {
    await page.goto("/");
    const btn = page.getByTestId("mobile-menu-button");
    await expect(btn).toBeVisible();

    // Abre
    await btn.click();
    await expect(page.getByTestId("mobile-drawer")).toBeVisible();

    // Fecha
    await btn.click();
    await expect(page.getByTestId("mobile-drawer")).not.toBeVisible();
  });

  test("navega via menu mobile e fecha o drawer", async ({ page }) => {
    await page.goto("/");
    await page.getByTestId("mobile-menu-button").click();
    await expect(page.getByTestId("mobile-drawer")).toBeVisible();

    await page.getByTestId("mobile-drawer").getByRole("link", { name: "Sobre" }).click();
    await expect(page).toHaveURL("/sobre");
    await expect(page.getByTestId("mobile-drawer")).not.toBeVisible();
  });
});
