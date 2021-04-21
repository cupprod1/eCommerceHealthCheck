var actions = require("./../lib/browserAction.js");
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
                    testlog.info("Waiting for GIGYA Login Page to appear")
                })
                this.api.useXpath();
                actions.waitForElementVisible(this,this.elements.email.selector,120000);
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
                actions.setValue(this,this.elements.email.selector, email);
                actions.setValue(this,this.elements.password.selector, password);
                this.api.useCss();
                actions.click(this,this.elements.signInButton.selector);
            }
        }
    ]
}