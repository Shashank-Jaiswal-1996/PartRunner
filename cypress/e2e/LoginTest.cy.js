import { loginPage } from "./PartRunner_Pages_/LoginPage"
const loginobj = new loginPage()
import LoginData from "../fixtures/LoginData.json"

describe('Login Page Test' , function(){

    it('Login Test' , ()=> {
        loginobj.openURL()
        loginobj.enterUserID(LoginData.LogID)
        loginobj.enterPassword(LoginData.LogPass)
        loginobj.clickLoginButton()
        loginobj.validation()
    })
})

