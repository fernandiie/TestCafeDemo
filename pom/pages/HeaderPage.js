import {Selector, t} from 'testcafe'


class HeaderPage {
    constructor () {
        this.burgerMenu = Selector('div[class="bm-burger-button"]')
        this.cartIcon = Selector('a[class="shopping_cart_link"]')
        this.logoutLink = Selector('a').withText('LOGOUT')

        this.header = Selector  ('div[class="header_secondary_container"]')
        this.sortProducts = Selector  ('select[class="product_sort_container"]')
    
    }

    async logout(){
        await t.click(this.burgerMenu) 
        await t.click(this.logoutLink) 
    }
}



export default new HeaderPage