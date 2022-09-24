class MainMenuPage {
    locators = {
  
    videoApiLinkLocator () {
          return cy.get(`[alt="icon products video-rooms"]`)
    },
  
    partnersLinkLocator () {
          return cy.get(`[alt="icon company partners"]`)
    },

    burgerMenuLocator () {
      return cy.get(`[aria-label="Open menu"]`)
    },

    productDropDownMenuLocator () {
      return cy.get(`header ul>li`)
    },

    companyDropDownMenuLocator () {
      return cy.get(`header li:nth-child(8)`)
    },

    logoLocator () {
      return cy.get(`[id="Logo-Dark_svg__Layer_1"]`)
    }
  
    };
  
    clickVideoApiLink () {
      this.locators.videoApiLinkLocator()
          .click({ force: true })
    }
  
    clickPartnersLink () {
      this.locators.partnersLinkLocator()
          .click({ force: true })
    }

    clickBurgerMenu () {
      this.locators.burgerMenuLocator()
            .click()
    }
   
}
  
  export default MainMenuPage;
  