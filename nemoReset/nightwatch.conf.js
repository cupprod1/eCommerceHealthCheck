var path = require('path');
var chromedriver = require('chromedriver');
module.exports = {

    selenium : {
        start_process : true,
        log_path :'' ,
        host : '127.0.0.1',
        port : 5554,
        cli_args : {
          'webdriver.chrome.driver': chromedriver.path
        }
    },

    test_settings : {
        default : {
            selenium_host : '127.0.0.1',
            selenium_port : 5554,
            end_session_on_fail: true,
            screenshots : {
                enabled : true,
                on_failure : true,
                on_error : true,
                path : './screenshots'
            },
            desiredCapabilities : {       // specify browser name along with other capabilities
                browserName : 'chrome',
                javascriptEnabled : true,
                acceptSslCerts : true,
                  chromeOptions: {
                    args: [ 'start-maximized']  }
            },
            test_runner : {
                type : 'mocha'
            }
        }
    }
};
