module.exports = {
    before: function (client) {
        client
            .url('http://localhost/litecart/admin/')
            .waitForElementVisible('body', client.globals.waitElementPause)
        this.lc = client.page.litecart();
    },

    after: function (client, done) {
        client.end();
        done();
    },

    'Title is correct': function (client) {
        client.assert.title('My Store')

    },

    'Login as admin': function (client) {
        this.lc
            .waitForElementVisible('@loginInput', client.globals.waitElementPause)
            .click('@loginInput')
            .sendKeys('@loginInput', 'admin')
            .sendKeys('@passInput', 'admin')
            .click('@loginButton')
            .waitForElementVisible('@versionLabel', client.globals.waitElementPause)
            .expect.element('@versionLabel').to.contain.text('LiteCart® 1.3.7')
    },

    'Logout': function (client) {
        this.lc
            .click('@logoutButton')
            .waitForElementVisible('@loginButton', client.globals.waitElementPause)
            .expect.element('@loginButton').text.to.equal('Login')
    },

};

