import RandomPage from "../pages/random_generator.page";
const randomPage = new RandomPage();

class LoginPage {
  locators = {
    businessEmailFieldLocator() {
      return cy.get(`[aria-label="loginForm"] input[name='email']`);
    },

    passwordFieldLocator() {
      return cy.get(`[aria-label="loginForm"] input[name='password']`);
    },

    verificationMessageLocator() {
      return cy.get(`[data-testid="login.signin.title"]`);
    },

    logInButtonLocator() {
      return cy.get(`[aria-label="loginForm"]>button[type='submit']`);
    },

    verificationErrorMessageLocator() {
      return cy.get(`[data-testid="login.signin.message"]`);
    },

    forgotPasswordLinkLocator() {
      return cy.get(`[aria-label="loginForm"] a[href="/#/login/password-reset"]`);
    },
  };

  //For valid check
  fillBusinessEmailField() {
    this.locators.businessEmailFieldLocator()
        .type("luxesoft.testing@gmail.com");
  }

  fillPasswordField() {
    this.locators.passwordFieldLocator()
        .type(`!Yhnbgtrfv321`);
  }

  clickLogInButton() {
    this.locators.logInButtonLocator().click();
  }

  checkVerificationMessage() {
    return this.locators.verificationMessageLocator();
  }

  // For invalid check
  invaldFillBusinessEmailField() {
    this.locators.businessEmailFieldLocator()
        .type(randomPage.validEmailGenerator());
  }

  invalidFillPasswordField() {
    this.locators.passwordFieldLocator()
        .type(randomPage.validPasswordGeneratorForTelnyx());
  }

  checkVerificationErrorMessage() {
    return this.locators.verificationErrorMessageLocator();
  }

  // For forgot password

  clickForgotPasswordLink() {
    this.locators.forgotPasswordLinkLocator()
        .click();
  }
}

export default LoginPage;
