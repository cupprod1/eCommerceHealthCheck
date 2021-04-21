var config = require('./../../config/config.js')

describe('ECommerce - Health Check Test', function() {
  
  before(function(browser, done) {
    shopFrontPage = browser.page['shopFront.page']();
    basketPage = browser.page['basket.page']();
    gigyaLoginPage = browser.page['gigyaLogin.page']();
    billingDetailsPage = browser.page['billingDetails.page']();
    
    browser
      .url(config[testEnv].shopFrontURL, function() {
        console.log("Launching URL: " + config[testEnv].shopFrontURL)
      })
      .maximizeWindow(function() {
        done();
      });
  });

  it('Scenario 1 - Student navigates through ECommerce pages and buys a product', function(browser) {
    
    shopFrontPage.clickBuyNowButton();
    basketPage.waitForProductItemToAppear();
    basketPage.validateProductItemName(config[testEnv].productItemName);  
    basketPage.clickCheckoutButton();
    gigyaLoginPage.waitForLoginPageToAppear();
    gigyaLoginPage.login(config[testEnv].student.email, config[testEnv].student.password);
    billingDetailsPage.waitForBillingPageToAppear();
    billingDetailsPage.validateBillingDetailsName(config[testEnv].student.fullName);
  });

  after(function (browser, done) {
    if (browser.sessionId) {
      browser.end(function () {
          done();
      });
    } else {
      done();
    }
  });

});