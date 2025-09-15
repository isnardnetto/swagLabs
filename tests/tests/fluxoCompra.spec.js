import { test } from '@playwright/test';
import { ProductsPage } from "../../pages/productsPage";
import { LoginPage } from '../../pages/loginPage';
import { CarrinhoPage } from '../../pages/carrinhoPage';
import { OverviewPage } from '../../pages/overviewPage';
import {SuccessPage} from '../../pages/successPage';

test('basicFlow', async ({ page }) => {
    const sigIn = new LoginPage(page)
    const product = new ProductsPage(page) 
    const carrinho = new CarrinhoPage(page)
    const overView = new OverviewPage(page)
    const finalPage = new SuccessPage(page)

    await page.goto('https://www.saucedemo.com/');
    await sigIn.login('standard_user', 'secret_sauce'); 
    await product.adicionarProduto('sauce-labs-onesie'); 
    await product.adicionarProduto('sauce-labs-bolt-t-shirt');
    await product.adicionarProduto('sauce-labs-backpack');
    await carrinho.validarQuantidadeDeItens('3');
    await carrinho.goingToCart();
    await overView.fazendoCheckout();
    await overView.preencherFormulario("isnard", "santos", "599000");
    await overView.finishButton();
    await finalPage.validateCompletedPurchase("Thank you for your order!");
})

test('validatesFlow', async ({ page }) => {
        const sigIn = new LoginPage(page)
        const product = new ProductsPage(page) 
        const carrinho = new CarrinhoPage(page)
        const overView = new OverviewPage(page)
        const finalPage = new SuccessPage(page)  

        await page.goto('https://www.saucedemo.com/');
        await sigIn.login('standard_user', 'secret_sauce')
        await product.scrennValidation("Products")
        await product.adicionarProduto('sauce-labs-onesie');
        await carrinho.goingToCart()
        await carrinho.validateTextCartPage("Your Cart")
        await overView.btnCheckout()
        await overView.validateTextInformation("Your Information")
        await overView.preencherFormulario("teste","teste02","599000")
        await overView.validateHeaderTextInformation("Checkout: Overview")
        await overView.deliveryInformation("Free Pony Express Delivery!")
        await overView.paymantInformation("total: $7.99")
        await overView.finishButton()
        await finalPage.validateCompletedPurchase("Thank you for your order!")
        
    })
