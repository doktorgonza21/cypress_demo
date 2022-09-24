class VideoApiPage {
    locators = {
        titleTextLocator () {
            return cy.get(`main h1`)
        },

    };

    checkTitleText () {
        return this.locators.titleTextLocator()
    }
  }
  
  export default VideoApiPage;
  