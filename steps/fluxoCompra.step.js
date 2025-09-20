import { Given, When, Then } from "@cucumber/cucumber";
import { chromium } from "playwright";
import { ProductsPage } from "../pages/productsPage.js";
import { LoginPage } from "../pages/loginPage.js";
import { CartPage } from "../pages/cartPage.js";
import { OverviewPage } from "../pages/overviewPage.js";
import { SuccessPage } from "../pages/successPage.js";

let browser, context, page;
let sigIn, product, cart, overView, finalPage;

Given("que estou na página de login", async () => {
  browser = await chromium.launch({ headless: false });
  context = await browser.newContext();
  page = await context.newPage();
  sigIn = new LoginPage(page);
  product = new ProductsPage(page);
  cart = new CartPage(page);
  overView = new OverviewPage(page);
  finalPage = new SuccessPage(page);
  await page.goto("https://www.saucedemo.com/");
});

When(
  "faço login com usuário {string} e senha {string}",
  async (usuario, senha) => {
    await sigIn.login(usuario, senha);
  }
);

When(
  "adiciono os produtos {string}, {string} e {string} ao carrinho",
  async (produto1, produto2, produto3) => {
    await product.addProduct(produto1);
    await product.addProduct(produto2);
    await product.addProduct(produto3);
  }
);

When("o carrinho deve conter {string} itens", async (quantidade) => {
  await cart.itensValidadeOnCart(quantidade);
});

When("acesso o carrinho", async () => {
  await cart.goingToCart();
});

When("inicio o checkout", async () => {
  await overView.btnCheckout();
});

When(
  "preencho o formulário com nome {string}, sobrenome {string} e CEP {string}",
  async (nome1, nome2, nome3) => {
    await overView.fillForm(nome1, nome2, nome3);
  }
);

When("finalizo a compra", async () => {
  await overView.finishButton();
});

Then("devo ver a mensagem {string}", async (texto) => {
  await finalPage.validateCompletedPurchase(texto);
  await page.close();
  await browser.close();
});

When("adiciono o produto {string} ao carrinho", async (product1) => {
  await product.addProduct(product1);
});

When("devo ver o texto {string}", async (text1) => {
  await cart.validateTextCartPage(text1);
});

Then("devo ter o texto {string}", async (text2) => {
  await overView.validateTextInformation(text2);
});

When("devo ter o cabeçalho{string}", async (text6) => {
  await overView.validateHeaderTextInformation(text6);
});

When("devo ver a informação de entrega {string}", async (text7) => {
  await overView.deliveryInformation(text7);
});

When("devo ver a informação de pagamento {string}", async (text8) => {
  await overView.paymentInformation(text8);
});

When("devo ver a tela {string}", async (texto9) => {
  await product.screenValidation(texto9);
});

Then("devo ver o cabeçalho {string}", async (text) => {
  await overView.validateHeaderTextInformation(text);
});
