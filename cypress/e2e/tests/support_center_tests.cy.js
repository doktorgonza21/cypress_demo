import BeforeTestPage from "../pages/beforeEach.page";
const beforeTest = new BeforeTestPage();
import HomePage from "../pages/home.page";
const homePage = new HomePage();
import SupportPage from "../pages/support.page";
const supportPage = new SupportPage();

describe("Support Center tests", () => {
    beforeEach(() => {
        cy.visit("https://telnyx.com/");
        beforeTest.closeCookiesModalWindow()
      });

  it(`Check the Configure an Asterisk IP trunk guide`, () => {
    homePage.clickSupportCentreLink()
    supportPage.clickConfigurationGuidesLink()
    supportPage.scrollToAsteriskBlock()
    supportPage.clickIpTrunkLink()
    cy.url().should('include', 'configure-an-asterisk-ip-trunk')
    supportPage.checkTitleText().should('have.text', 'Asterisk: Configure an Asterisk IP trunk')    
  });

});
