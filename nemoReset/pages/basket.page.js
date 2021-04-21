var actions = require("./../lib/browserAction.js");
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
        }
	},

	commands: [
        {
            waitForProductItemToAppear: function() {
            	this.api.perform(function() {
                    testlog.info("Waiting for Basket Page to get load")
                })
                actions.waitForElementVisible(this,this.elements.productItem.selector,120000);
                this.api.perform(function() {
                    testlog.info("Basket Page is loaded successfully")
                })
            },

            validateProductItemName: function(name) {
                this.api.perform(function() {
                    testlog.info("Validating the product name on Basket Page")
                })
                this.api.assert.containsText(this.elements.productItemName.selector,name)
            },

            clickCheckoutButton: function() {
                this.api.perform(function() {
                    testlog.info("Checking if Go To Checkout button is visible on Basket Page")
                })
                actions.waitForElementVisible(this,this.elements.goToCheckoutButton.selector,60000);
                this.api.perform(function() {
                    testlog.info("Clicking on Go To Checkout button on Basket Page")
                })
                actions.click(this,this.elements.goToCheckoutButton.selector)
            }
        }
    ]
}