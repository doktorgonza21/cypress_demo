import RandomPage from "../pages/random_generator.page";
const randomPage = new RandomPage();

class RegistrationPage {
  locators = {
    emailFieldLocator() {
      return cy.get(`[id="email"]`);
    },

    fullNameFieldLocator() {
      return cy.get(`[id="full_name"]`);
    },

    passwordFieldLocator() {
      return cy.get(`[id="password"]`);
    },

    agreeCheckBoxLocator() {
      return cy.get(`[aria-labelledby="terms-label"]`);
    },

    createAccountButtonLocator() {
      return cy.get(`[type="submit"]`);
    },

    successMessageLocator() {
      return cy.get(`[id="__next"] h1`, { timeout: 30000 })
        .should("be.visible");
    },

    emailErrorMessageLocator() {
      return cy.get(`[id="email_error"]`);
    },

    fullNameErrorMessageLocator() {
      return cy.get(`[id="full_name_error"]`);
    },

    passwordMustListLocator() {
      return cy.get(`[id="password_requirements"]>div[aria-hidden]`);
    },

    agreeCheckBoxErrorMessageLocator() {
      return cy.get(`[id="terms_and_conditions_error"]`);
    },
  };

  //For valid check

  fillWorkEmailField() {
    this.locators.emailFieldLocator()
        .type(randomPage.validEmailGenerator());
  }

  fillFullNameField() {
    this.locators
      .fullNameFieldLocator()
      .type(randomPage.validFullNameGenerator());
  }

  fillPasswordField() {
    this.locators.passwordFieldLocator()
      .type(randomPage.validPasswordGeneratorForTelnyx());
  }

  tickAgreeCheckBox() {
    this.locators.agreeCheckBoxLocator().click();
  }

  clickCreateAccountButton() {
    this.locators.createAccountButtonLocator().click();
  }

  checkSuccessMessage() {
    return this.locators.successMessageLocator();
  }

  // For invalid check

  invalidFillWorkEmailField() {
    this.locators.emailFieldLocator().type(randomPage.invalidEmailGenerator());
    this.locators.fullNameFieldLocator().focus();
  }

  checkWorkEmailValidation() {
    return this.locators.emailErrorMessageLocator();
  }

  invalidFillFullNameField() {
    this.locators.fullNameFieldLocator().type(" ");
    this.locators.passwordFieldLocator().focus();
  }

  checkFullNameValidation() {
    return this.locators.fullNameErrorMessageLocator();
  }

  invalidFillPasswordField() {
    this.locators.passwordFieldLocator().type(" ");
    this.locators.agreeCheckBoxLocator().click();
  }

  checkPasswordValidation() {
    return this.locators.passwordMustListLocator();
  }

  invalidTickAgreeCheckBox() {
    this.locators.agreeCheckBoxLocator().click();
  }

  checkAgreeCheckBoxValidation() {
    return this.locators.agreeCheckBoxErrorMessageLocator();
  }
}

export default RegistrationPage;
