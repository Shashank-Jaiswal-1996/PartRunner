import { loginPage } from "../../PartRunner_Pages_/LoginPage"
const loginobj = new loginPage()
import PartRunnerData from "../../fixtures/PartRunnerData.json"

describe('Login Page Test' , function(){

    it('Login Test' , ()=> {
        loginobj.openURL()
        cy.wait(4000);
        loginobj.enterUserID(PartRunnerData.Signup.LogID)
        loginobj.enterPassword(PartRunnerData.Signup.LogPass)
        loginobj.clickLoginButton()
        loginobj.PositiveCredvalidation()  
    })

        it('Login with wrong Creds' , ()=> {
        loginobj.openURL()
        cy.wait(4000);
        loginobj.enterUserID("Shashank@partrunner.com")
        loginobj.enterPassword("SHashank@1996")
        loginobj.clickLoginButton()
        loginobj.NegativeCredVaidation() 
    })

    it('Login without any creds' , ()=> {
        loginobj.openURL()
        cy.wait(4000);
        loginobj.clickLoginButton()
        loginobj.EmptyValidation()
    })
})

