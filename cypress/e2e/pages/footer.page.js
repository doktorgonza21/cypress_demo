class FooterPage {
    locators = {
      footerFacebookLinkLocator () {
          return cy.get(`[data-e2e="Footer--navItem-social"] [href*="facebook"]`)
      },
  
      footerAboutUsLinkLocator () {
          return cy.get(`footer [href="/company/about"]`)
      },
  
      footerResourcesBlockLocator () {
          return cy.get(`[data-e2e="Footer--navItem-resources"]`)
      },
  
      footerResourcesBlockItemsListLocator () {
          return cy.get(`[data-e2e="Footer--navItem-resources"] li`)
      },
  
    };
  
    scrollToFooterFacebookLink () {
      this.locators.footerFacebookLinkLocator()
          .scrollIntoView()
    }
  
    clickFooterFacebookLink () {
      this.locators.footerFacebookLinkLocator()
          .invoke('removeAttr', 'target')
          .click()
    }
  
    scrollToFooterAboutUsLink () {
      this.locators.footerAboutUsLinkLocator()
          .scrollIntoView()
    }
  
    clickFooterAboutUsLink () {
      this.locators.footerAboutUsLinkLocator()
          .click()
    }
  
    scrollToFooterResourcesBlock () {
      this.locators.footerResourcesBlockLocator()
          .scrollIntoView()
    }
  
    checkFooterResourcesBlockItemsList () {
      return this.locators.footerResourcesBlockItemsListLocator()
    }
   
}
  
  export default FooterPage;
  