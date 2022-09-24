import BeforeTestPage from "../pages/beforeEach.page";
const beforeTest = new BeforeTestPage();
import FooterPage from "../pages/footer.page";
const footerPage = new FooterPage();
import AboutUsPage from "../pages/about_us.page";
const aboutUsPage = new AboutUsPage();
const resourcesBlock = [
    `Developer Docs `,
    `Blog `,
    `Resource Hub `,
    `Release Notes `,
  ];

describe("Footer elements tests", () => {
  beforeEach(() => {
    cy.visit("https://telnyx.com/");
    beforeTest.closeCookiesModalWindow()
  });

  it("Check the footer Facebook link", () => {
    footerPage.scrollToFooterFacebookLink();
    footerPage.clickFooterFacebookLink();
    cy.url().should("include", "www.facebook.com/Telnyx/");
  });

  it(`Check the about us link from website footer`, () => {
    footerPage.scrollToFooterAboutUsLink();
    footerPage.clickFooterAboutUsLink();
    cy.url().should("include", "telnyx.com/company/about");
    aboutUsPage.checkTitleText()
        .should("have.text", "About Us");
  });

  it(`Check the footer "Resources" block links availability`, () => {
    footerPage.scrollToFooterResourcesBlock()
    footerPage.checkFooterResourcesBlockItemsList().each((item, index, list) => {
        expect(list).to.have.length(4);
        expect(Cypress.$(item).text()).to.eq(resourcesBlock[index]);
      });      
  });

});
