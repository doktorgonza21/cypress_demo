import RandomPage from "../pages/random_generator.page";
const randomPage = new RandomPage();

class PassResetPage {
  locators = {
    youEmailAddressFieldLocator() {
      return cy.get(`[aria-label="passwordResetForm"] input[name="email"]`);
    },

    resetPasswordButtonLocator() {
      return cy.get(`[aria-label="passwordResetForm"] button[type="submit"]`);
    },

    validationMessageLocator() {
      return cy.get(`[data-testid="login.pwreset.message"]`);
    },
  };

  fillYouEmailAddressField() {
    this.locators.youEmailAddressFieldLocator()
      .type(randomPage.validEmailGenerator());
  }

  clickResetPasswordButton() {
    this.locators.resetPasswordButtonLocator()
        .click();
  }

  checkValidationMessage() {
    return this.locators.validationMessageLocator();
  }
}

export default PassResetPage;
