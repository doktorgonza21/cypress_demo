import LoginPage from "../pages/login.page";
const loginPage = new LoginPage();
import PassResetPage from "../pages/password_reset.page";
const passResetPage = new PassResetPage();

describe("User Log in tests", () => {
  beforeEach(() => {
    cy.visit("https://portal.telnyx.com/");
  });

  //Imitation of User log in
  it.skip("Log In with a valid registered user", () => {
    loginPage.fillBusinessEmailField()
    loginPage.fillPasswordField()
    loginPage.clickLogInButton()
    cy.wait(1000)
    loginPage.checkVerificationErrorMessage()
        .contains(`Your account has been blocked.`)
  });

  it("User Log In with invalid data", () => {
    loginPage.invaldFillBusinessEmailField()
    loginPage.invalidFillPasswordField()
    loginPage.clickLogInButton()
    cy.wait(1000)
    loginPage.checkVerificationErrorMessage()
        .contains(`That email and password combination is not valid`)
  });

  it("Password reset form check", () => {
    loginPage.clickForgotPasswordLink()
    passResetPage.fillYouEmailAddressField()
    passResetPage.clickResetPasswordButton()
    passResetPage.checkValidationMessage()
        .contains(`We have accepted your password reset request.`)
  });
});
