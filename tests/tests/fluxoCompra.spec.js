import { test } from '@playwright/test';
import { ProductsPage } from "../../pages/productsPage";
import { LoginPage } from '../../pages/loginPage';
import { CartPage } from '../../pages/cartPage';
import { OverviewPage } from '../../pages/overviewPage';
import {SuccessPage} from '../../pages/successPage';

test('basicFlow', async ({ page }) => {
    const sigIn = new LoginPage(page)
    const product = new ProductsPage(page) 
    const cart = new CartPage(page)
    const overView = new OverviewPage(page)
    const finalPage = new SuccessPage(page)

    await page.goto('https://www.saucedemo.com/');
    await sigIn.login('standard_user', 'secret_sauce'); 
    await product.addProduct('sauce-labs-onesie'); 
    await product.addProduct('sauce-labs-bolt-t-shirt');
    await product.addProduct('sauce-labs-backpack');
    await cart.itensValidadeOnCart('3');
    await cart.goingToCart();
    await overView.btnCheckout();
    await overView.fillForm("isnard", "santos", "599000");
    await overView.finishButton();
    await finalPage.validateCompletedPurchase("Thank you for your order!");
})

test('validatesFlow', async ({ page }) => {
        const sigIn = new LoginPage(page)
        const product = new ProductsPage(page) 
        const cart = new CartPage(page)
        const overView = new OverviewPage(page)
        const finalPage = new SuccessPage(page)  

        await page.goto('https://www.saucedemo.com/');
        await sigIn.login('standard_user', 'secret_sauce')
        await product.scrennValidation("Products")
        await product.addProduct('sauce-labs-onesie');
        await cart.goingToCart()
        await cart.validateTextCartPage("Your Cart")
        await overView.btnCheckout()
        await overView.validateTextInformation("Your Information")
        await overView.fillForm("teste","teste02","599000")
        await overView.validateHeaderTextInformation("Checkout: Overview")
        await overView.deliveryInformation("Free Pony Express Delivery!")
        await overView.paymantInformation("total: $7.99")
        await overView.finishButton()
        await finalPage.validateCompletedPurchase("Thank you for your order!")
        
    })
