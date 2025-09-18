import { expect } from "@playwright/test";
export class OverviewPage{
    constructor(page){
        this.page = page;
    }

    async btnCheckout(){
        const seletorCheckout = '[data-test="checkout"]'
        await this.page.click(seletorCheckout)
    }

    async fillForm(firstName,lastName,zipPostalCode){
        const seletorFirstName = '[data-test="firstName"]'
        await this.page.fill(seletorFirstName,firstName)
        const seletorLastName = '[data-test="lastName"]'
        await this.page.fill(seletorLastName,lastName)
        const seletorZipPostalCode = '[data-test="postalCode"]'
        await this.page.fill(seletorZipPostalCode,zipPostalCode)
        const seletorContinue = '[data-test="continue"]';
        await this.page.click(seletorContinue);  
    }

    async finishButton(){
     const selectorFinishButton = '[data-test="finish"]'
     await this.page.click(selectorFinishButton)   
         }

    async validateTextInformation(text){
        const informationValidate = '[data-test="title"]'
        await expect(this.page.locator(informationValidate)).toContainText(text)

        }
    async validateHeaderTextInformation(text){
        const headerText = '[data-test="title"]'
        await expect(this.page.locator(headerText)).toHaveText(text)
        }

    async paymentInformation(text) {
        const paymentValidation = '[data-test="subtotal-label"]'
        await expect(this.page.locator(paymentValidation)).toContainText(text)
     }

    async deliveryInformation(text) {
        const deliveryValidation = '[data-test="shipping-info-value"]'
        await expect(this.page.locator(deliveryValidation)).toHaveText(text)
        }
    
    async totalValue(text){
        const valueValidation = '[data-test="tax-label"]'
        await expect(this.page.locator(valueValidation)).toContainText(text)
         }

    async btnContinue(){
        const selectBtnContinue = '[data-test="continue"]'
        await this.page.click(selectBtnContinue)
        }
    } 
