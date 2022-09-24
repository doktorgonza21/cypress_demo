import BeforeTestPage from "../pages/beforeEach.page";
const beforeTest = new BeforeTestPage();
import HomePage from "../pages/home.page";
const homePage = new HomePage();


describe("Home page elements tests", () => {

  beforeEach(() => {
    cy.visit("https://telnyx.com/");
    beforeTest.closeCookiesModalWindow()
  });

  it(`Check the amount of savings from "Switch + Save with Telnyx" block`, () => {
    homePage.scrollToSwitchSaveBlock()
    homePage.checkSaveUpPerMonth({ timeout: 10000 }).should('be.visible')
    homePage.clickSmsButton()
    homePage.clickTollFreeRadioButton()
    homePage.dragSendMessagesSlider()
    homePage.dragReceiveMessagesSlider()
    homePage.checkSaveUpPerMonth().contains('$1815')
  });
});
