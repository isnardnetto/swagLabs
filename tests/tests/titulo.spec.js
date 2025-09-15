import { test, expect } from '@playwright/test';

test('verifica título da página', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');
  await expect(page).toHaveTitle(/Swag Labs/);
});

test('Redireciona o usuário para a tela de inventário', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');
  await page.locator('[data-test="username"]').dblclick();
  await page.locator('[data-test="username"]').fill('standard_user');
  await page.locator('[data-test="password"]').dblclick();
  await page.locator('[data-test="password"]').fill('secret_sauce');
  await page.locator('[data-test="login-button"]').click();
});

 test('Verificando se os itens adicionados foram para o carrinho', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');
  await page.locator('[data-test="username"]').dblclick();
  await page.locator('[data-test="username"]').fill('standard_user');
  await page.locator('[data-test="password"]').dblclick();
  await page.locator('[data-test="password"]').fill('secret_sauce');
  await page.locator('[data-test="login-button"]').click();
  await page.locator('[data-test="add-to-cart-sauce-labs-backpack"]').click();
  await page.locator('[data-test="add-to-cart-sauce-labs-bolt-t-shirt"]').click();
  await page.locator('[data-test="add-to-cart-sauce-labs-onesie"]').click();
  await page.locator('[data-test="shopping-cart-link"]').click();
  await expect(page.locator('[data-test="shopping-cart-badge"]')).toHaveText("3");
}); 

 test('Verificando', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');
  await page.locator('[data-test="username"]').dblclick();
  await page.locator('[data-test="username"]').fill('standard_user');
  await page.locator('[data-test="password"]').dblclick();
  await page.locator('[data-test="password"]').fill('secret_sauce');
  await page.locator('[data-test="login-button"]').click();
  await page.locator('[data-test="add-to-cart-sauce-labs-backpack"]').click();
  await page.locator('[data-test="add-to-cart-sauce-labs-bolt-t-shirt"]').click();
  await page.locator('[data-test="shopping-cart-link"]').click();
  await expect(page.locator('[data-test="item-4-title-link"]')).toBeVisible();
  await expect(page.locator('[data-test="item-1-title-link"]')).toBeVisible();
  await page.locator('[data-test="checkout"]').click(); // esse
  await page.locator('[data-test="firstName"]').dblclick();
  await page.locator('[data-test="firstName"]').fill('teste');// esse
  await page.locator('[data-test="lastName"]').dblclick();
  await page.locator('[data-test="lastName"]').fill('da silva');// esse
  await page.locator('[data-test="postalCode"]').click();
  await page.locator('[data-test="postalCode"]').fill('00000');// esse
   await page.locator('[data-test="continue"]').click(); // esse
  await expect(page.locator('[data-test="title"]')).toBeVisible();
  await page.locator('[data-test="finish"]').click(); // esse
  await expect(page.locator('[data-test="complete-header"]')).toBeVisible();
  await expect(page.locator('[data-test="back-to-products"]')).toBeVisible();
  await expect(page.locator('[data-test="title"]')).toBeVisible();
}); 

test('test123', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');
  await page.locator('[data-test="username"]').click();
  await page.locator('[data-test="username"]').fill('standard_user');
  await page.locator('[data-test="password"]').click();
  await page.locator('[data-test="password"]').fill('secret_sauce');
  await page.locator('[data-test="login-button"]').click();
  await page.locator('[data-test="add-to-cart-sauce-labs-backpack"]').click();
  await page.locator('[data-test="shopping-cart-link"]').click();
  await page.locator('[data-test="checkout"]').click();
  await page.locator('[data-test="firstName"]').click();
  await page.locator('[data-test="firstName"]').fill('gg');
  await page.locator('[data-test="lastName"]').click();
  await page.locator('[data-test="lastName"]').fill('g');
  await page.locator('[data-test="postalCode"]').click();
  await page.locator('[data-test="lastName"]').fill('gg');
  await page.locator('[data-test="postalCode"]').fill('g');
  await page.locator('[data-test="postalCode"]').click();
  await page.locator('[data-test="continue"]').click();
});

  