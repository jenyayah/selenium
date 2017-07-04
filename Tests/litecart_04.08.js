module.exports = {
    before: function (browser) {
        browser
            .url('http://localhost/litecart/en/')
            .waitForElementVisible('body', browser.globals.waitElementPause)
        this.lc = browser.page.litecart();
    },

    after: function (browser, done) {
        browser.end();
        done();
    },


    'Find most popular ducks': function (browser) {
        browser.elements('css selector', '#box-most-popular .product', function (ducks) {
            console.log('Ducks count in the block: ' + ducks.value.length);
            for (var i = 0; i < ducks.value.length; i++) {
                let local = i
                let sel = '#box-most-popular li.product:nth-of-type(' + [local + 1] + ') div.sticker'               
                browser.elements('css selector', sel, function (label) {
                    if (label.value.length != 1) {
                        console.log('Sticker count is: ' + label.value.length + ' for duck # ' + [local + 1])
                        browser.waitForElementVisible('body1', 100)
                    }
                })
            }
        })
    },



    'Find ducks in campaigns': function (browser) {
        browser.elements('css selector', '#box-campaigns li.product', function (ducks) {
            console.log('Ducks count in the block: ' + ducks.value.length);
            for (var i = 0; i < ducks.value.length; i++) {
                let local = i;
                let sel = '#box-campaigns li.product:nth-child(' + [local + 1] + ') div.sticker';
                console.log(sel);              
                browser.elements('css selector', sel, function (label) {
                    if (label.value.length != 1) {
                        // browser.expect.element(sel).to.be.visible;
                        console.log('Sticker count is: ' + label.value.length + ' for duck # ' + [local + 1]);
                        browser.waitForElementVisible('body1', 100);
                    }
                })
            }
        })
    },


    'Find latest ducks': function (browser) {
        browser.elements('css selector', '#box-latest-products .product', function (ducks) {
            console.log('Ducks count in the block: ' + ducks.value.length);
            for (var i = 0; i < ducks.value.length; i++) {
                let local = i
                let sel = '#box-latest-products li.product:nth-of-type(' + [local + 1] + ') div.sticker'               
                browser.elements('css selector', sel, function (label) {
                    if (label.value.length != 1) {
                        console.log('Sticker count is: ' + label.value.length + ' for duck # ' + [local + 1])
                        browser.waitForElementVisible('body1', 100)
                    }
                })
            }
        })
    },




};

