
import loginPage from '../pages/LoginPage'
import headerPage from '../pages/HeaderPage'
import productPage from '../pages/ProductsPage'
import { URLS, CREDENTIALS, MESSAGES, HEADERS } from '../data/Constants' 
import { Selector } from 'testcafe'

fixture ('Testing login feature')
    .page(`${URLS.LOGIN_PAGE}`)

test('1 Login with a valid user', async t => {
    await loginPage.submitLoginForm(CREDENTIALS.VALID_USER.USERNAME,CREDENTIALS.VALID_USER.PASSWORD)   
    await t.expect(headerPage.header.innerText).contains(HEADERS.PRODUCTS)
})

test ('2 Login with an invalid user', async t => {
    await loginPage.submitLoginForm(CREDENTIALS.INVALID_USER.USERNAME, CREDENTIALS.INVALID_USER.PASSWORD)
    await t.expect(loginPage.IncorrectUsrMsg.innerText).contains(MESSAGES.ERROR_MESSAGES.INVALID_USER)   
})

test ('3 Verify that a user can logout from the Products page ', async t => { 
    await loginPage.submitLoginForm(CREDENTIALS.VALID_USER.USERNAME,CREDENTIALS.VALID_USER.PASSWORD) 
    await headerPage.logout()
    await t.expect(loginPage.loginBox.exists).ok
})
