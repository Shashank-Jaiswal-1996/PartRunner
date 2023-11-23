import { loginPage } from "../../PartRunner_Pages_/LoginPage"
const loginobj = new loginPage()
import LoginData from "../../fixtures/LoginData.json"

describe('Login Page Test' , function(){

    // before(()=>{
    //     cy.login(LoginData.Signup.LogID ,LoginData.Signup.LogPass )
    // })

    it('Login Test' , ()=> {
        loginobj.openURL()
        cy.wait(4000);
        loginobj.enterUserID(LoginData.Signup.LogID)
        loginobj.enterPassword(LoginData.Signup.LogPass)
        loginobj.clickLoginButton()
        loginobj.validation()
    })
})

