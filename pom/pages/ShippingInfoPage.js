import {Selector, t} from 'testcafe'


class ShippingInfoPage {
    constructor () {
        this.shippingHeader = Selector  ('div[class="header_secondary_container"]')
        this.nameTxt =  Selector ('#first-name')
        this.lnameTxt =  Selector ('#last-name')
        this.zipTxt =  Selector ('#postal-code')
        this.continueButton = Selector ('#continue')
        this.missingInfoMsg = Selector('div[class="error-message-container error"]')

    }

    async submitShippingInfoForm(name,lastName, zipCode){
        if (name != null){
            await t.typeText(this.nameTxt, name, {paste:true})
        }
        if (lastName != null){
            await t.typeText(this.lnameTxt, lastName, {paste:true})
        }
        if (zipCode != null){
            await t.typeText(this.zipTxt, zipCode, {paste:true})
        }
        await t.click(this.continueButton) 
    }
}

export default new ShippingInfoPage