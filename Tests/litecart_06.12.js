module.exports = {
    before: function (browser) {
        browser
            .url('http://localhost/litecart/admin/')
            .waitForElementVisible('body', browser.globals.waitElementPause)
        this.lc = browser.page.litecart();
    },

    after: function (browser, done) {
        browser.end();
        done();
    },

    'Login as admin': function (browser) {
        this.lc
            .waitForElementVisible('@loginInput', browser.globals.waitElementPause)
            .click('@loginInput')
            .setValue('@loginInput', 'admin')
            .setValue('@passInput', 'admin')
            .click('@loginButton')
    },


    'Add new product': function (browser) {
        this.lc
            .waitForElementVisible('@Catalog', browser.globals.waitElementPause)
            .click('@Catalog')
            .expect.element('@headerText').text.to.equal('Catalog')
        this.lc
            .click('#content > div:nth-child(2) > a:nth-child(2)')
            .expect.element('@headerText').text.to.equal('Add New Product')
        this.lc
            .click('#tab-general > table > tbody > tr:nth-child(1) > td > label:nth-child(3) > input[type="radio"]')
            .click('#tab-general > table > tbody > tr:nth-child(2) > td > span > input[type="text"]')
            .setValue('#tab-general > table > tbody > tr:nth-child(2) > td > span > input[type="text"]', "Darkwing Duck")
            .setValue('#tab-general > table > tbody > tr:nth-child(3) > td > input[type="text"]', "DWD")
            .click('#tab-general > table > tbody > tr:nth-child(4) > td > div > table > tbody > tr:nth-child(2) > td:nth-child(1) > input[type="checkbox"]')
            .click('#tab-general > table > tbody > tr:nth-child(7) > td > div > table > tbody > tr:nth-child(4) > td:nth-child(1) > input[type="checkbox"]')
            .setValue('#tab-general > table > tbody > tr:nth-child(8) > td > table > tbody > tr > td:nth-child(1) > input[type="number"]', "1")
            // browser.pause(3000)
            .setValue('#tab-general > table > tbody > tr:nth-child(9) > td > table > tbody > tr:nth-child(1) > td > input[type="file"]', require('path').resolve("./bin//dwd.jpg"))
            // .pause(3000)
            // this.lc          
            .click('#content > form > div > ul > li:nth-child(2) > a')
            .waitForElementVisible('#tab-information > table > tbody > tr:nth-child(1) > td > strong', browser.globals.waitElementPause)
            .expect.element('#tab-information > table > tbody > tr:nth-child(1) > td > strong').text.to.equal('Manufacturer')
        this.lc
            .click('#tab-information > table > tbody > tr:nth-child(1) > td > select')
        browser
            .pause(300)
            .keys(browser.Keys.DOWN_ARROW)
            .pause(300)
            .keys(browser.Keys.ENTER)
            .pause(300)
        this.lc
            .setValue('#tab-information > table > tbody > tr:nth-child(3) > td > input[type="text"]', "duck")
            .setValue('#tab-information > table > tbody > tr:nth-child(4) > td > span > input[type="text"]', "Darkwing Duck")
            .setValue('#tab-information > table > tbody > tr:nth-child(5) > td > span > div > div.trumbowyg-editor', "Famous Darkwing Duck is here!")
            .setValue('#tab-information > table > tbody > tr:nth-child(6) > td > span > input[type="text"]', "Darkwing")
            .setValue('#tab-information > table > tbody > tr:nth-child(7) > td > span > input[type="text"]', "Duck")
            .click('#content > form > div > ul > li:nth-child(4) > a')
            .waitForElementVisible('#tab-prices > h2:nth-child(1)', browser.globals.waitElementPause)
            .expect.element('#tab-prices > h2:nth-child(1)').text.to.equal('Prices')
        this.lc
            .click('#tab-prices > table:nth-child(2) > tbody > tr > td > input[type="number"]')
            .setValue('#tab-prices > table:nth-child(2) > tbody > tr > td > input[type="number"]', "10")
            .click('#tab-prices > table:nth-child(2) > tbody > tr > td > select')
        browser
            .pause(300)
            .keys(browser.Keys.DOWN_ARROW)
            .pause(300)
            .keys(browser.Keys.ENTER)
            .pause(300)
        this.lc
            .setValue('#tab-prices > table:nth-child(4) > tbody > tr:nth-child(2) > td:nth-child(1) > span > input[type="text"]', "100")
            .setValue('#tab-prices > table:nth-child(4) > tbody > tr:nth-child(3) > td:nth-child(1) > span > input[type="text"]', "100")
            .click('#content > form > p > span > button:nth-child(1)')
    },

    'Check new product': function (browser) {
        browser
            .pause(300)
        this.lc
            .click('#content > form > table > tbody > tr:nth-child(4) > td:nth-child(3) > a')
            .waitForElementVisible('#content > h1', browser.globals.waitElementPause)
            .expect.element('#content > h1').text.to.equal('Edit Product: Darkwing Duck')
    },

    'Logout': function (client) {
        this.lc
            .click('@logoutButton')
            .waitForElementVisible('@loginButton', client.globals.waitElementPause)
            .expect.element('@loginButton').text.to.equal('Login')
    },

};

