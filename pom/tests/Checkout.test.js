
import loginPage from '../pages/LoginPage'
import headerPage from '../pages/HeaderPage'
import productPage from '../pages/ProductsPage'
import { URLS, CREDENTIALS, MESSAGES, SHIPPING_INFO, HEADERS } from '../data/Constants' 
import ShippingInfoPage from '../pages/ShippingInfoPage'
import checkoutPage from '../pages/CheckoutPage'

fixture ('Testing Shipping procedure')
    .page(`${URLS.LOGIN_PAGE}`)
    .beforeEach ( async t => {
        await checkoutPage.newPurchase()   
})

test('7 Validate error msg displayed when not all the shipping info is provided', async t => {
    await ShippingInfoPage.submitShippingInfoForm(null,SHIPPING_INFO.LAST_NAME,SHIPPING_INFO.ZIP_CODE)

    await t.expect(ShippingInfoPage.missingInfoMsg.innerText).contains(MESSAGES.ERROR_MESSAGES.INVALID_NAME_ERROR)
})

test('8 Validate the user navigates to the overview page once the shipping data is provided', async t => {
    await ShippingInfoPage.submitShippingInfoForm(SHIPPING_INFO.NAME,SHIPPING_INFO.LAST_NAME,SHIPPING_INFO.ZIP_CODE)

    await t.expect(headerPage.header.innerText).eql(HEADERS.CHECKOUT.OVERVIEW ) 
    await t.expect(checkoutPage.items.count).gt(0)
    await t.expect(checkoutPage.totalLabel.innerText).notEql('Total: $0.00')    
})

test('9 Validate items in the overview page match the added items', async t => {
    await ShippingInfoPage.submitShippingInfoForm(SHIPPING_INFO.NAME,SHIPPING_INFO.LAST_NAME,SHIPPING_INFO.ZIP_CODE)

    await t.expect(checkoutPage.itemContainer.innerText).contains('Sauce Labs Backpack')
    await t.expect(checkoutPage.itemContainer.innerText).contains('Sauce Labs Onesie')
    await t.expect(checkoutPage.itemContainer.innerText).contains('Sauce Labs Fleece Jacket')
})

test('10 Validate a customer can complete a purchase', async t => {
    await ShippingInfoPage.submitShippingInfoForm(SHIPPING_INFO.NAME,SHIPPING_INFO.LAST_NAME,SHIPPING_INFO.ZIP_CODE)

    await t.click(checkoutPage.checkoutFinishButton)
    await t.expect(headerPage.header.innerText).eql(HEADERS.CHECKOUT.COMPLETE)
    await t.expect(checkoutPage.msgOrderLabel.innerText).contains('THANK YOU FOR YOUR ORDER')

})
