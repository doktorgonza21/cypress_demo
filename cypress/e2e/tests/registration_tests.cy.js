import BeforeTestPage from "../pages/beforeEach.page";
const beforeTest = new BeforeTestPage();
import RegistrationPage from "../pages/registration.page";
const registrationPage = new RegistrationPage();
const passMust = [
  `Be at least 12 characters long`,
  `Contain at least one number`,
  `Contain at least one symbol`,
  `Contain at least one upper-case letter`,
];

describe("User registration tests", () => {
  beforeEach(() => {
    cy.visit("https://telnyx.com/sign-up");
    beforeTest.closeCookiesModalWindow()
  });

  it.skip("User registration with a valid data", () => {
    registrationPage.fillWorkEmailField();
    registrationPage.fillFullNameField();
    registrationPage.fillPasswordField();
    registrationPage.tickAgreeCheckBox();
    registrationPage.clickCreateAccountButton();
    registrationPage.checkSuccessMessage()
      .should("have.text", `We've sent you an email to activate your account`);
  });

  it("Check the User registration validation error messages", () => {
    registrationPage.invalidFillWorkEmailField();
    registrationPage.checkWorkEmailValidation()
      .should("have.text", `Please enter a valid email address.`);
    registrationPage.invalidFillFullNameField();
    registrationPage.checkFullNameValidation()
      .should("have.text", `This field is required.`);
    registrationPage.invalidFillPasswordField();
    registrationPage.checkPasswordValidation().each((item, index, list) => {
      expect(list).to.have.length(4);
      expect(Cypress.$(item).text()).to.eq(passMust[index]);
    });
    registrationPage.invalidTickAgreeCheckBox();
    registrationPage.checkAgreeCheckBoxValidation()
      .should("have.text", `Please accept the terms and conditions`);
  });
});
