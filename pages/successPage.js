import { expect } from '@playwright/test';
export class SuccessPage{
    constructor(page){
        this.page = page;
    }


    async validateCompletedPurchase(FinalValidation){
     const selectCompletedPurchase = '[data-test="complete-header"]'
     await expect(this.page.locator(selectCompletedPurchase)).toHaveText(FinalValidation)
        }

    }
