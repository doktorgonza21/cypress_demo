class PartnersPage {
    locators = {
      pageTitleTextLocator() {
        return cy.get(`section>header>div`);
      },
    };
  
    checkTitleText() {
      return this.locators.pageTitleTextLocator();
    }
  }
  
  export default PartnersPage;
  