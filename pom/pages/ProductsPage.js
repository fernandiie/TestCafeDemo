import {Selector, t} from 'testcafe'


class ProductsPage {
    constructor () {
        this.headerProducts = Selector  ('div[class="header_secondary_container"]')     
                
        this.addBackPackButton = Selector ('button[id="add-to-cart-sauce-labs-backpack"]').withText('ADD TO CART')
        this.removeBackPackButton = Selector ('button[id="remove-sauce-labs-backpack"]')

        this.addJacketButton = Selector ('button[id="add-to-cart-sauce-labs-fleece-jacket"]').withText('ADD TO CART')
        this.removeJacketButton = Selector ('button[id="remove-sauce-labs-fleece-jacket"]')

        this.addBackOnesieButton = Selector ('button[id="add-to-cart-sauce-labs-onesie"]').withText('ADD TO CART')
        this.removeOnesieButton = Selector ('button[id="remove-sauce-labs-onesie"]')
    }

    async addItem(){
        await t.click(this.addBackPackButton)     
    }

    async addItems(){
        await t.click(this.addBackPackButton)     
        await t.click(this.addBackOnesieButton)
        await t.click(this.addJacketButton)
    }
}



export default new ProductsPage