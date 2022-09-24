class HomePage {
  locators = {

    supportCentreLinkLocator() {
      return cy.get(`[id="dialogAudio"]~[href*='support']`);
    },

    switchSaveBlockLocator() {
      return cy.get(`[class="mchNoDecorate"]>span`);
    },

    smsButtonLocator () {
      return cy.get(`[class*="Button__Styled"]~button`)
    },

    tollFreeRadioButtonLocator () {
      return cy.get(`[id="toll-free-numbers"]`)
    },

    outboundCallsSliderLineLocator () {
      return cy.get(`[class="ant-slider-track"]`)
    },

    messagesDotLocator () {
      return cy.get(`[class="ant-slider-handle"]`)
    },

    saveUpPerMonthLocator () {
      return cy.get(`main span~div`)
    }
  };

  clickSupportCentreLink() {
    this.locators.supportCentreLinkLocator()
      .first()
      .click();
  }

  scrollToSwitchSaveBlock() {
    this.locators.switchSaveBlockLocator()
      .scrollIntoView();
  }

  clickSmsButton () {
    this.locators.smsButtonLocator()
      .click()
  }

  clickTollFreeRadioButton () {
    this.locators.tollFreeRadioButtonLocator()
      .click()
  }

  dragSendMessagesSlider () {
    this.locators.messagesDotLocator().first()
      .trigger('mousedown', { button: 0 }, { force: true })
      .wait(2000)
      .trigger('mousemove', 50, 0, { force: true })
      .trigger('mouseup'); 
  }

  dragReceiveMessagesSlider () {
    this.locators.messagesDotLocator().last()
      .trigger('mousedown', { button: 0 }, { force: true })
      .wait(2000)
      .trigger('mousemove', 60, 0, { force: true })
      .trigger('mouseup');

  }

  checkSaveUpPerMonth () {
    return this.locators.saveUpPerMonthLocator().first()
  }
}

export default HomePage;
