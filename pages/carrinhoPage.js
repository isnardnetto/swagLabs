import { expect } from "@playwright/test";

export class CarrinhoPage{
    constructor(page){
    this.page = page;
    }

    async validarQuantidadeDeItens(quantidadeProducts){
      const componenteCarrinho = '[data-test="shopping-cart-badge"]'
      await expect(this.page.locator(componenteCarrinho)).toHaveText(quantidadeProducts)
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

