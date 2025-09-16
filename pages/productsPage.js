import { expect } from '@playwright/test';
export class ProductsPage {
  constructor(page) {
    this.page = page;
  }

  async addProduct(produtoId) {
    const seletor = `[data-test="add-to-cart-${produtoId}"]`;
    await this.page.click(seletor);
  }

  async removeProduct(produtoId) {
    const seletor = `[data-test="add-to-cart-${produtoId}"]`;
    await this.page.click(seletor);
  }

  async scrennValidation(text1){
    const selector = `[data-test="title"]`;
    await expect(this.page.locator(selector)).toHaveText(text1);

    }

}




