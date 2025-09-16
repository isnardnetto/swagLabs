import { expect } from "@playwright/test";

export class CartPage{
    constructor(page){
    this.page = page;
    }

    async itensValidadeOnCart(quantityProducts){
      const cartComponent = '[data-test="shopping-cart-badge"]'
      await expect(this.page.locator(cartComponent)).toHaveText(quantityProducts)
    }

    async goingToCart(){
      const selectCar = '[data-test="shopping-cart-link"]'
      await this.page.click(selectCar)
    }

    async validateTextCartPage(text){
       const validateText = '[data-test="title"]';
      await expect(this.page.locator(validateText)).toHaveText(text);

       

    }

     
}

