var actions = require("./../lib/browserAction.js");
require("./../lib/logging.js");

module.exports = {
	elements: {
		buyNowButton: {
			selector: '#tnt-content-product-buy-now-btn'
		}
	},

	commands: [
        {
            clickBuyNowButton: function() {
            	this.api.perform(function() {
                    testlog.info("Checking ShopFront page is loaded or not")
                })
                actions.waitForElementVisible(this,this.elements.buyNowButton.selector,60000);
                this.api.perform(function() {
                    testlog.info("ShopFront Page is loaded successfully")
                })
                this.api.perform(function() {
                    testlog.info("Clicking on Buy Now Button on Shopfront")
                })
                actions.click(this,this.elements.buyNowButton.selector);
            }
        }
    ]
}