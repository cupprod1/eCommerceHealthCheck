require("./../lib/logging.js");

module.exports = {
	elements: {
		buyNowButton: {
			selector: 'button#tnt-content-product-buy-now-btn-1'
		}
	},

	commands: [
        {
            clickBuyNowButton: function() {
            	this.api.perform(function() {
                    testlog.info("Waiting for ShopFront page to get load")
                })
                this.api.waitForElementVisible(this.elements.buyNowButton.selector,120000,"ShopFront Page is unable to load successfully");
                this.api.perform(function() {
                    testlog.info("ShopFront Page is loaded successfully")
                })
                this.api.perform(function() {
                    testlog.info("Clicking on Buy Now Button on ShopFront page")
                })
                this.api.moveToElement(this.elements.buyNowButton.selector,0,0);
                this.api.pause(5000)
                this.api.moveToElement(this.elements.buyNowButton.selector,0,0);
                this.api.click(this.elements.buyNowButton.selector, function(result) {
                    this.assert.equal(result.status, 0, "Buy Now Button is not clickable");
                });
                this.api.perform(function() {
                    testlog.info("Buy Now Button on ShopFront page is clicked")
                })
            }
        }
    ]
}