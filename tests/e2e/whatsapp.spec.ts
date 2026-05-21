import { test, expect } from "@playwright/test";

test.describe("Botão WhatsApp flutuante", () => {
  const pages = ["/", "/sobre", "/servicos", "/portfolio", "/contato"];

  for (const path of pages) {
    test(`visível em ${path}`, async ({ page }) => {
      await page.goto(path);
      const btn = page.getByTestId("whatsapp-button");
      await expect(btn).toBeVisible();
      const href = await btn.getAttribute("href");
      expect(href).toContain("wa.me");
    });
  }
});
