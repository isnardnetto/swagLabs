
import { Given, When, Then } from '@cucumber/cucumber';
import { chromium } from 'playwright';
import { ProductsPage } from "../pages/productsPage.js";
import { LoginPage } from '../pages/loginPage.js';
import { CartPage } from '../pages/cartPage.js';
import { OverviewPage } from '../pages/overviewPage.js';
import {SuccessPage} from '../pages/successPage.js';

let browser , context, page;
let sigIn, product, cart, overView, finalPage;

Given('que estou na página de login', async () => {
    browser = await chromium.launch({ headless: false });
    context = await browser.newContext();
    page = await context.newPage();
    sigIn = new LoginPage(page)
    product = new ProductsPage(page) 
    cart = new CartPage(page)
    overView = new OverviewPage(page)
    finalPage = new SuccessPage(page)
    await page.goto('https://www.saucedemo.com/');
})

When('faço login com usuário {string} e senha {string}',async (usuario, senha) =>{
    await sigIn.login(usuario, senha);
})

When ('adiciono os produtos {string}, {string} e {string} ao carrinho',async (produto1, produto2, produto3) => {
    await product.addProduct(produto1); 
    await product.addProduct(produto2);
    await product.addProduct(produto3);
})

When ('o carrinho deve conter {string} itens',async (quantidade) => {
    await cart.itensValidadeOnCart(quantidade);
})

When ('acesso o carrinho' ,async () => {
    await cart.goingToCart();
})

When ('inicio o checkout', async () =>{
    await overView.btnCheckout();
}) 

When ('preencho o formulário com nome {string}, sobrenome {string} e CEP {string}',async (nome1, nome2 , nome3) => {
    await overView.fillForm(nome1, nome2, nome3);
})

When ('finalizo a compra' , async() => {
    await overView.finishButton();
})

Then ('devo ver a mensagem {string}' , async (texto) => {
    await finalPage.validateCompletedPurchase(texto);
    await browser.close();
})
   


/* test('validatesFlow', async ({ page }) => {
        const sigIn = new LoginPage(page)
        const product = new ProductsPage(page) 
        const cart = new CartPage(page)
        const overView = new OverviewPage(page)
        const finalPage = new SuccessPage(page)  

        await page.goto('https://www.saucedemo.com/');
        await sigIn.login('standard_user', 'secret_sauce')
        await product.screenValidation("Products")
        await product.addProduct('sauce-labs-onesie');
        await cart.goingToCart()
        await cart.validateTextCartPage("Your Cart")
        await overView.btnCheckout()
        await overView.validateTextInformation("Your Information")
        await overView.fillForm("teste","teste02","599000")
        await overView.validateHeaderTextInformation("Checkout: Overview")
        await overView.deliveryInformation("Free Pony Express Delivery!")
        await overView.paymentInformation("total: $7.99")
        await overView.finishButton()
        await finalPage.validateCompletedPurchase("Thank you for your order!")
         */
    //})
