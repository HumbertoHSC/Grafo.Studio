import { test, expect } from "@playwright/test";

test.describe("Navegação entre páginas", () => {
  test("home carrega com título correto", async ({ page }) => {
    await page.goto("/");
    await expect(page).toHaveTitle(/Grafo Studio/i);
    await expect(page.getByTestId("navbar")).toBeVisible();
  });

  test("navega para /sobre", async ({ page }) => {
    await page.goto("/");
    await page.getByRole("link", { name: "Sobre" }).first().click();
    await expect(page).toHaveURL("/sobre");
    await expect(page.getByRole("heading", { level: 1 })).toBeVisible();
  });

  test("navega para /servicos", async ({ page }) => {
    await page.goto("/");
    await page.getByRole("link", { name: "Serviços" }).first().click();
    await expect(page).toHaveURL("/servicos");
    await expect(page.getByRole("heading", { level: 1 })).toBeVisible();
  });

  test("navega para /portfolio", async ({ page }) => {
    await page.goto("/");
    await page.getByRole("link", { name: "Portfólio" }).first().click();
    await expect(page).toHaveURL("/portfolio");
    await expect(page.getByRole("heading", { level: 1 })).toBeVisible();
  });

  test("navega para /contato", async ({ page }) => {
    await page.goto("/");
    await page.getByRole("link", { name: "Contato" }).first().click();
    await expect(page).toHaveURL("/contato");
    await expect(page.getByRole("heading", { level: 1 })).toBeVisible();
  });

  test("logo redireciona para home", async ({ page }) => {
    await page.goto("/sobre");
    await page.getByRole("link", { name: /grafo/i }).first().click();
    await expect(page).toHaveURL("/");
  });
});
