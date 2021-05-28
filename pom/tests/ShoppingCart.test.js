
import loginPage from '../pages/LoginPage'
import headerPage from '../pages/HeaderPage'
import productPage from '../pages/ProductsPage'
import { URLS, CREDENTIALS, HEADERS } from '../data/Constants' 

fixture ('Testing shopping cart')
    .page(`${URLS.LOGIN_PAGE}`)
    .beforeEach ( async t => {
        await loginPage.submitLoginForm(CREDENTIALS.VALID_USER.USERNAME,CREDENTIALS.VALID_USER.PASSWORD) 
})

test('4 Validate user navigates to the shopping cart page', async t => {
    await t.click(headerPage.cartIcon)
    await t.expect(headerPage.header.innerText).contains(HEADERS.CART)
})

test('5 Validate user can add an item to the shopping cart', async t => {
    await productPage.addItem()
    await t.expect(productPage.removeBackPackButton.innerText).eql('REMOVE')
    await t.expect(headerPage.cartIcon.innerText).contains('1')
})

test('6 Validate user can add multiple items to the shopping cart', async t => {
    await productPage.addItems()
    await t.expect(productPage.removeBackPackButton.innerText).eql('REMOVE')
    await t.expect(headerPage.cartIcon.innerText).contains('3')
})