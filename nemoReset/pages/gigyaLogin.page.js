require("./../lib/logging.js");

module.exports = {
	elements: {
		email: {
			selector: '//*[contains(text(), "Email address")]//following::input[contains(@name, "username")][1]',
            locateStrategy: 'xpath'
		},

        password: {
            selector: '//*[text()="Password"]//following::input[contains(@name, "password")][1]',
            locateStrategy: 'xpath'
        },

        signInButton: {
            selector: '#sign-in-btn'
        }
	},

	commands: [
        {
            waitForLoginPageToAppear: function() {
            	this.api.perform(function() {
                    testlog.info("Waiting for GIGYA Login Page to get load")
                })
                this.api.useXpath();
                this.api.waitForElementVisible(this.elements.email.selector,120000,"GIGYA Login Page is unable to load successfully");
                this.api.useCss();
                this.api.perform(function() {
                    testlog.info("GIGYA Login Page is loaded successfully")
                })
            },

            login: function(email,password) {
                this.api.perform(function() {
                    testlog.info("Entering login details on GIGYA page")
                })
                this.api.useXpath();
                this.api.setValue(this.elements.email.selector, email);
                this.api.setValue(this.elements.password.selector, password);
                this.api.useCss();
                this.api.click(this.elements.signInButton.selector, function(result) {
                    this.assert.equal(result.status, 0, "Sign In Button on GIGYA Login Page is not clickable");
                });
                this.api.perform(function() {
                    testlog.info("Sign In Button on GIGYA page is clicked")
                })
            }
        }
    ]
}