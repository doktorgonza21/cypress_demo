import BeforeTestPage from "../pages/beforeEach.page";
const beforeTest = new BeforeTestPage();
import MainMenuPage from "../pages/main_menu.page";
const mainMenuPage = new MainMenuPage();
import VideoApiPage from "../pages/video_api.page";
const videoApiPage = new VideoApiPage();
import PartnersPage from "../pages/partners.page";
const partnersPage = new PartnersPage();

describe("Main navigation menu tests", () => {
  beforeEach(() => {
    cy.visit("https://telnyx.com/");
    beforeTest.closeCookiesModalWindow()
  });

  it(`Check the "Video API" link from Products drop-down menu`, () => {
    mainMenuPage.clickVideoApiLink();
    cy.url().should("include", "telnyx.com/products/video-api");
    videoApiPage.checkTitleText()
        .should("have.text", "Video API");
  });

  it(`Check the "Partners" link from Company drop-down menu`, () => {
    mainMenuPage.clickPartnersLink();
    cy.url().should("include", "telnyx.com/company/partnerships");
    partnersPage.checkTitleText()
        .should("have.text", "PARTNERS");
  });

});
