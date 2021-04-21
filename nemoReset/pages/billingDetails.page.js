var actions = require("./../lib/browserAction.js");
require("./../lib/logging.js");

module.exports = {
	elements: {
		pageHeader: {
			selector: '.page-header__title'
		},

        cardHolderName: {
            selector: 'div.address-details > div:nth-child(1)'
        }
	},

	commands: [
        {
            waitForBillingPageToAppear: function() {
            	this.api.perform(function() {
                    testlog.info("Waiting for Billing Details Page to appear")
                })
                actions.waitForElementVisible(this,this.elements.pageHeader.selector,120000);
                this.api.perform(function() {
                    testlog.info("Billing Details Page is loaded successfully")
                })
            },

            validateBillingDetailsName: function(name) {
                this.api.perform(function() {
                    testlog.info("Validating Student Full Name on Billing Details Page")
                })
                this.api.assert.containsText(this.elements.cardHolderName.selector,name)
            }
        }
    ]
}