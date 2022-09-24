
class SupportPage {
    locators = {
      configurationGuidesLinkLocator() {
        return cy.get(`[class="content educate_content"]>section>div:nth-child(2)`);
      },

      asteriskBlockLocator () {
        return cy.get(`[id="asterisk"]`)
      },

      ipTrunkLinkLocator () {
        return cy.get(`[id="asterisk"]~a h2`)
      },

      titleTextLocator () {
        return cy.get(`[class="t__h1"]`)
      }
    };
  
    clickConfigurationGuidesLink () {
        this.locators.configurationGuidesLinkLocator()
            .click()
    }

    scrollToAsteriskBlock () {
        this.locators.asteriskBlockLocator()
            .scrollIntoView()
    }

    clickIpTrunkLink () {
        this.locators.ipTrunkLinkLocator().last()
            .click()
    }

    checkTitleText () {
        return this.locators.titleTextLocator()
    }
  }
  
  export default SupportPage;
  