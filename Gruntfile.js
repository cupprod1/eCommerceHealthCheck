var pkg = require('./package.json');
var path = require('path');
var chromedriver = require('chromedriver');

module.exports = function (grunt) {

    grunt.initConfig({
        nightwatch: {
            options: {
                standalone: true,
                jar_version: '2.53.1',
                jar_path: 'node_modules/selenium-server-standalone-jar/jar/selenium-server-standalone-2.53.1.jar',
                config_path: './nemoReset/nightwatch.conf.js', // Update the path based on your application
                custom_commands_path : "",
                src_folders : ['./nemoReset/specs'], // Update the path based on your application
                page_objects_path : './nemoReset/pages/',   // path where page object files will be loaded from. Update the path based on your application
                test_runner : {
                    type : 'mocha'
                },
                test_settings : {
                    chrome: {
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
                            'chromeOptions' : {
                                "args" : ["start-maximized"]
                            }
                        },
                        cli_args : {
                            'webdriver.chrome.driver': chromedriver.path
                        }
                    },
                    
                    smokeTest: {
                        selenium_host : '127.0.0.1',
                        selenium_port : 5554,
                        end_session_on_fail: true,
                        src_folders : ['./nemoReset/specs/healthChecks/healthCheck_Scenario1.spec.js'], // Update the path based on your application
                        screenshots : {
                            enabled : true,
                            on_failure : true,
                            on_error : true,
                            path : './screenshots'
                        },
                        desiredCapabilities : {  // specify browser name along with other capabilities
                            browserName : 'chrome',
                            javascriptEnabled : true,
                            acceptSslCerts : true,
                            'chromeOptions' : {
                                "args" : ['start-maximized', 'headless', 'no-sandbox', 'disable-dev-shm-usage']                                
                            }
                        },
                        cli_args : {
                          'webdriver.chrome.driver': chromedriver.path
                        }
                    }
                }
            }
        }
    });

    //Load grunt Tasks
    grunt.loadNpmTasks('grunt-nightwatch');

    grunt.registerTask('default', ['test']);

    //Grunt task to run nightwatch tests with test parameter
    grunt.registerTask('test', 'Runs e2e tests', function() {
        var testParam = grunt.option('testParam')
        grunt.task.run('nightwatch:' + testParam)
        if(grunt.option('testEnv')) {
            global.testEnv = grunt.option('testEnv')
        } else {
            global.testEnv = "qa"
        }
    });

};
