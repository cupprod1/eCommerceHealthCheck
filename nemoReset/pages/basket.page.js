require("./../lib/logging.js");

module.exports = {
	elements: {
		productItem: {
			selector: 'div.product'
		},

        productItemName: {
            selector: 'div.product p:nth-child(1)'
        },

        orderSummaryTotal: {
            selector: 'div.basket-summary__info-wrapper > div.basket-description.sub-total p:nth-child(2)'
        },

        goToCheckoutButton: {
            selector: 'div.basket-summary__info-wrapper > button.checkout-btn'
        },

        confirmationDialog: {
            selector: '//div[contains(@id, "checkoutModal") and (contains(@class, "show"))]',
            locateStrategy: 'xpath'
        },

        continueButton: {
            selector: '.continue-btn'
        }
	},

	commands: [
        {
            waitForProductItemToAppear: function() {
            	this.api.perform(function() {
                    testlog.info("Waiting for Basket Page to get load")
                })
                this.api.waitForElementVisible(this.elements.productItem.selector,120000,"Basket Page is unable to load successfully");
                this.api.perform(function() {
                    testlog.info("Basket Page is loaded successfully")
                })
            },

            validateProductItemName: function(name) {
                this.api.perform(function() {
                    testlog.info("Validating the product name on Basket Page")
                })
                this.api.assert.containsText(this.elements.productItemName.selector,name,"Product Name on Basket Page is not as expected. Konakart Integration could be down")
                this.api.perform(function() {
                    testlog.info("Product Name is as expected on Basket Page")
                })
            },

            clickCheckoutButton: function() {
                this.api.perform(function() {
                    testlog.info("Checking if Go To Checkout button is visible on Basket Page")
                })
                this.api.waitForElementVisible(this.elements.goToCheckoutButton.selector,60000,"Go To Checkout button is not visible");
                this.api.perform(function() {
                    testlog.info("Clicking on Go To Checkout button on Basket Page")
                })
                this.api.click(this.elements.goToCheckoutButton.selector, function(result) {
                    this.assert.equal(result.status, 0, "Go To Checkout Button is not clickable");
                })
                this.api.perform(function() {
                    testlog.info("Go To Checkout button on Basket Page is clicked")
                })
            },

            waitForConfirmationDialog: function() {
                this.api.perform(function() {
                    testlog.info("Waiting for Confirmation Dialog to get load")
                })
                this.api.useXpath();
                this.api.waitForElementVisible(this.elements.confirmationDialog.selector,120000,"Confirmation Dialog is unable to load successfully");
                this.api.useCss();
                this.api.perform(function() {
                    testlog.info("Confirmation Dialog is loaded successfully")
                })
            },

            clickContinueButton: function() {
                this.api.perform(function() {
                    testlog.info("Checking if Continue button is visible inside Confirmation Dialog")
                })
                this.api.waitForElementVisible(this.elements.continueButton.selector,60000,"Continue button is not visible");
                this.api.perform(function() {
                    testlog.info("Clicking on Continue button inside Confirmation Dialog")
                })
                this.api.click(this.elements.continueButton.selector, function(result) {
                    this.assert.equal(result.status, 0, "Continue Button is not clickable");
                })
                this.api.perform(function() {
                    testlog.info("Continue button inside Confirmation Dialog is clicked")
                })
            }
        }
    ]
}