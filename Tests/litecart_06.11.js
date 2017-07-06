module.exports = {
    before: function (browser) {
        browser
            .url('http://localhost/litecart/en/')
            .waitForElementVisible('body', browser.globals.waitElementPause)
        this.lc = browser.page.litecart();
        var email = ''
    },

    after: function (browser, done) {
        browser.end();
        done();
    },


    'Create new user': function (browser) {
        function makeid() {
            var text = "";
            var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
            for (var i = 0; i < 5; i++)
                text += possible.charAt(Math.floor(Math.random() * possible.length));
            return text;
        }
        email = makeid() + '@google.com'
        browser
            .click('#box-account-login > div > form > table > tbody > tr:nth-child(5) > td > a')
            .click('#create-account > div > form > table > tbody > tr:nth-child(2) > td:nth-child(1) > input[type="text"]')
            .setValue('#create-account > div > form > table > tbody > tr:nth-child(2) > td:nth-child(1) > input[type="text"]', "Username")
            .setValue('#create-account > div > form > table > tbody > tr:nth-child(2) > td:nth-child(2) > input[type="text"]', "Userlast")
            .setValue('#create-account > div > form > table > tbody > tr:nth-child(3) > td:nth-child(1) > input[type="text"]', "1817 3rd Ave N")
            .setValue('#create-account > div > form > table > tbody > tr:nth-child(4) > td:nth-child(2) > input[type="text"]', "Birmingham")
            .setValue('#create-account > div > form > table > tbody > tr:nth-child(4) > td:nth-child(1) > input[type="text"]', "35203")
            .click('#create-account > div > form > table > tbody > tr:nth-child(5) > td:nth-child(1) > span.select2.select2')
            .setValue('body > span > span > span.select2-search.select2-search--dropdown > input', "United States")
            .pause(500)
            .keys(browser.Keys.ENTER)
            .pause(500)
            .click('#create-account > div > form > table > tbody > tr:nth-child(6) > td:nth-child(1) > input[type="email"]')
            .setValue('#create-account > div > form > table > tbody > tr:nth-child(6) > td:nth-child(1) > input[type="email"]', email)
            .setValue('#create-account > div > form > table > tbody > tr:nth-child(6) > td:nth-child(2) > input[type="tel"]', "+1 205-252-2262")
            .click('#create-account > div > form > table > tbody > tr:nth-child(8) > td:nth-child(1) > input[type="password"]')
            .setValue('#create-account > div > form > table > tbody > tr:nth-child(8) > td:nth-child(1) > input[type="password"]', "password")
            .setValue('#create-account > div > form > table > tbody > tr:nth-child(8) > td:nth-child(2) > input[type="password"]', "password")
            .click('#create-account > div > form > table > tbody > tr:nth-child(9) > td > button')
            .waitForElementVisible('#box-account > div > ul > li:nth-child(4) > a', browser.globals.waitElementPause)
            .click('#box-account > div > ul > li:nth-child(4) > a')
    },

    'Login as new user': function (browser) {
        browser
            .waitForElementVisible('#box-account-login > div > form > table > tbody > tr:nth-child(1) > td > input[type="text"]', browser.globals.waitElementPause)
            .click('#box-account-login > div > form > table > tbody > tr:nth-child(1) > td > input[type="text"]')
            .setValue('#box-account-login > div > form > table > tbody > tr:nth-child(1) > td > input[type="text"]', email)
            .click('#box-account-login > div > form > table > tbody > tr:nth-child(2) > td > input[type="password"]')
            .setValue('#box-account-login > div > form > table > tbody > tr:nth-child(2) > td > input[type="password"]', 'password')
            .click('#box-account-login > div > form > table > tbody > tr:nth-child(4) > td > span > button:nth-child(1)')
            .click('#box-account > div > ul > li:nth-child(4) > a')
    },


};

