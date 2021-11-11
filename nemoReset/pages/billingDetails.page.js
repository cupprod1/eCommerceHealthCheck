require("./../lib/logging.js");

module.exports = {
	elements: {
		pageHeader: {
			selector: '.page-header__title'
		},

        cardHolderName: {
            selector: 'div.address-details > p:nth-child(1)'
        }
	},

	commands: [
        {
            waitForBillingPageToAppear: function() {
            	this.api.perform(function() {
                    testlog.info("Waiting for Billing Details Page to get load")
                })
                this.api.waitForElementVisible(this.elements.pageHeader.selector,120000,"Billing Details Page is unable to load successfully");
                this.api.perform(function() {
                    testlog.info("Billing Details Page is loaded successfully")
                })
            },

            validateBillingDetailsName: function(name) {
                this.api.perform(function() {
                    testlog.info("Validating Student Full Name on Billing Details Page")
                })
                this.api.assert.containsText(this.elements.cardHolderName.selector,name,"User Name on Billing Details Page is not as expected. Konakart Integration could be down")
                this.api.perform(function() {
                    testlog.info("Student Full Name is as expected on Billing Details Page")
                })
            }
        }
    ]
}