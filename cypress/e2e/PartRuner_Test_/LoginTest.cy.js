import { loginPage } from "../../PartRunner_Pages_/LoginPage"
const loginobj = new loginPage()
import PartRunnerData from "../../fixtures/PartRunnerData.json"

describe('Login Page Test' , function(){

    // before(()=>{
    //     cy.login(LoginData.Signup.LogID ,LoginData.Signup.LogPass )
    // })

    it('Login Test' , ()=> {
        loginobj.openURL()
        cy.wait(4000);
        loginobj.enterUserID(PartRunnerData.Signup.LogID)
        loginobj.enterPassword(PartRunnerData.Signup.LogPass)
        loginobj.clickLoginButton()
        loginobj.validation()
        
    })
})

