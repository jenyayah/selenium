module.exports = {
    before: function (client) {
        client
            .url('http://yandex.ru/')
            .waitForElementVisible('body', client.globals.waitElementPause)
        this.yndx = client.page.yandex();
    },

    after: function (client, done) {
        client.end();
        done();
    },

    'Title is correct': function (client) {
        client.assert.title('Яндекс')

    },

    'Navigate to weather': function (client) {
        this.yndx
            .waitForElementVisible('@weatherLink', client.globals.waitElementPause)
            .click('@weatherLink')
            .waitForElementVisible('@weatherLabel', client.globals.waitElementPause)
            .expect.element('@weatherLabel').to.contain.text('Погода в ')
    },

    'Change city': function (client) {
        this.yndx
            .click('@weatherInput')
            .sendKeys('@weatherInput', 'Санкт-Петербург')
            .click('@weatherButton')
            .waitForElementVisible('@weatherSearchLabel', client.globals.waitElementPause)
            .expect.element('@weatherSearchLabel').to.contain.text('Вы искали: Санкт-Петербург')
    },

};

