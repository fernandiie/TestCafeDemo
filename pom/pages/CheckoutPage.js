import {Selector, t} from 'testcafe'
import loginPage from './LoginPage'
import productPage from './ProductsPage'
import headerPage from './HeaderPage'
import { CREDENTIALS } from '../data/Constants' 


class CheckoutPage {
    constructor () {
        this.totalLabel = Selector ('div[class="summary_total_label"]')
        this.checkoutFinishButton = Selector('button[id="finish"]').withText('FINISH')
        this.items = Selector('div[class="cart_item"]')
        this.itemContainer = Selector('div[id="checkout_summary_container"]')
        this.msgOrderLabel = Selector  ('h2[class="complete-header"]')
        this.checkoutButton = Selector ('button[id="checkout"]')
    }

    async newPurchase(){
        await loginPage.submitLoginForm(CREDENTIALS.VALID_USER.USERNAME,CREDENTIALS.VALID_USER.PASSWORD)
        await productPage.addItems()
        await t.click(headerPage.cartIcon)
        await t.click(this.checkoutButton) 
    }
}

export default new CheckoutPage