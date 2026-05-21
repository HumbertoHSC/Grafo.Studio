import { test, expect } from "@playwright/test";

test.describe("Página de contato", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/contato");
  });

  test("renderiza formulário com todos os campos", async ({ page }) => {
    await expect(page.locator('input[name="nome"]')).toBeVisible();
    await expect(page.locator('input[name="empresa"]')).toBeVisible();
    await expect(page.locator('input[name="whatsapp"]')).toBeVisible();
    await expect(page.locator('select[name="servico"]')).toBeVisible();
    await expect(page.locator('textarea[name="mensagem"]')).toBeVisible();
    await expect(page.getByRole("button", { name: /enviar pelo whatsapp/i })).toBeVisible();
  });

  test("preenche e submete o formulário abrindo WhatsApp", async ({ page }) => {
    // Intercepta window.open antes de carregar a página
    await page.addInitScript(() => {
      (window as Window & { __openedUrl?: string }).__openedUrl = undefined;
      const orig = window.open.bind(window);
      window.open = (url?: string | URL, ...args: Parameters<typeof window.open> extends [unknown, ...infer R] ? R : never[]) => {
        (window as Window & { __openedUrl?: string }).__openedUrl = url?.toString();
        return orig(url, ...args);
      };
    });

    await page.goto("/contato");
    await page.locator('input[name="nome"]').fill("João Teste");
    await page.locator('input[name="empresa"]').fill("Empresa Teste");
    await page.locator('input[name="whatsapp"]').fill("(11) 99999-9999");
    await page.locator('select[name="servico"]').selectOption("Branding");
    await page.getByRole("button", { name: /enviar pelo whatsapp/i }).click();

    const openedUrl = await page.evaluate(
      () => (window as Window & { __openedUrl?: string }).__openedUrl
    );
    expect(openedUrl).toContain("wa.me");
    expect(openedUrl).toContain("Jo%C3%A3o%20Teste");
  });

  test("campos obrigatórios impedem submissão vazia", async ({ page }) => {
    await page.getByRole("button", { name: /enviar pelo whatsapp/i }).click();
    await expect(page).toHaveURL("/contato");
  });

  test("informações de contato estão visíveis", async ({ page }) => {
    await expect(page.getByText(/clique para conversar/i)).toBeVisible();
    await expect(page.getByText(/contato.grafo.studio@gmail.com/i).first()).toBeVisible();
  });
});
