class BeforeTestPage {

    closeCookiesModalWindow() {
        cy.get("body").then(($body) => {
          if ($body.find(`[aria-label="close and deny"]`).length > 0) {
            cy.get(`[aria-label="close and deny"]`).then(($button) => {
                if ($button.is(":visible")) {
                  $button.click();
                }
            });
          } else {
            cy.log("Button is invisible");
          }
        });
      };

}
  
export default BeforeTestPage;
  