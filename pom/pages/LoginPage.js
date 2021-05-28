import {Selector, t} from 'testcafe'

class LoginPage {
    constructor () {
        this.userTxt = Selector  ('#user-name')
        this.passwordTxt = Selector  ('#password')
        this.loginButton = Selector  ('input[value="Login"]')
        this.loginBox = Selector('div[class="login-box"]')
        this.IncorrectUsrMsg = Selector ('div[class="error-message-container error"]')
    }

    async submitLoginForm(user,pwd){
        if (user != null){
            await t.typeText(this.userTxt, user, {paste:true})
        }
        if (user != null){
            await t.typeText(this.passwordTxt, pwd, {paste:true})
        }
        await t.click(this.loginButton) 
    }
}

export default new LoginPage()