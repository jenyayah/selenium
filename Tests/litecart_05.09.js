module.exports = {
    before: function (browser) {
        browser
            .url('http://localhost/litecart/admin/?app=countries&doc=countries')
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

    'Countries sorting': function (browser) {
        browser.elements('css selector', '[name="countries_form"] tr.row', function (Carr) {
            console.log('Checking sorting for: ' + [Carr.value.length] + ' countries');
            let Prev = '';
            for (var i = 0; i < Carr.value.length; i++) {
                let local = i
                let sel = '[name="countries_form"] tr:nth-child(' + [local + 2] + ') td:nth-child(5)';
                browser.getAttribute(sel, 'innerText', function (txt) {
                    if (txt.value.length != 0) {
                        if (Prev === ''
                        ) {
                            Prev = txt.value;
                        }
                        else {
                            if (Prev <= txt.value) {
                                // console.log(Prev +  ' <= ' + txt.value)
                                console.log('OK');
                            }
                            else {
                                console.log('! ' + Prev + ' >>>>>> ' + txt.value + ' EXIT');
                                browser.waitForElementVisible('body1', 100)
                            }
                            Prev = txt.value;
                        }
                    }
                })
            }
        });
    },


    'Zones sorting CA': function (browser) {
        browser
            .click('#content > form > table > tbody > tr:nth-child(39) > td:nth-child(5) > a')
            .elements('css selector', '[id=table-zones] tr', function (can) {
                console.log('Checking sorting for: ' + [can.value.length - 2] + ' states');
                let Prev = '';
                for (var i = 0; i < [can.value.length - 1]; i++) {
                    let local = i
                    let sel = '[id = table-zones] tr:nth-child(' + [local + 2] + ') td:nth-child(3)';
                    browser.getAttribute(sel, 'innerText', function (txt) {
                        if (txt.value.length != 0) {
                            if (Prev === ''
                            ) {
                                Prev = txt.value;
                            }
                            else {
                                if (Prev <= txt.value) {
                                    // console.log(Prev + ' <= ' + txt.value)
                                    console.log('OK');
                                }
                                else {
                                    console.log('! ' + Prev + ' >>>>>> ' + txt.value + ' EXIT');
                                    browser.waitForElementVisible('body1', 100)
                                }
                                Prev = txt.value;
                            }
                        }
                    })
                }
            })
    },

    'Zones sorting USA': function (browser) {
        this.lc
            .click('@Countries')
        browser
            .click('#content > form > table > tbody > tr:nth-child(225) > td:nth-child(5) > a')
            .elements('css selector', '[id=table-zones] tr', function (usa) {
                console.log('Checking sorting for: ' + [usa.value.length - 2] + ' states');
                let Prev = '';
                for (var i = 0; i < [usa.value.length - 1]; i++) {
                    let local = i
                    let sel = '[id = table-zones] tr:nth-child(' + [local + 2] + ') td:nth-child(3)';
                    browser.getAttribute(sel, 'innerText', function (txt) {
                        if (txt.value.length != 0) {
                            if (Prev === ''
                            ) {
                                Prev = txt.value;
                            }
                            else {
                                if (Prev <= txt.value) {
                                    // console.log(Prev + ' <= ' + txt.value)
                                    console.log('OK');
                                }
                                else {
                                    console.log('! ' + Prev + ' >>>>>> ' + txt.value + ' EXIT');
                                    browser.waitForElementVisible('body1', 100)
                                }
                                Prev = txt.value;
                            }
                        }
                    })
                }
            })
    },



    'GeoZones sorting Ca': function (browser) {
        this.lc
            .click('@GeoZones')
        browser
            .click('#content > form > table > tbody > tr:nth-child(2) > td:nth-child(3) > a')
            .elements('css selector', '[id=table-zones] tr', function (zca) {
                console.log('Checking sorting for: ' + [zca.value.length - 2] + ' zones');
                let Prev = '';
                for (var i = 0; i < [zca.value.length - 2]; i++) {
                    let local = i
                    let sel = '[id = table-zones] tr:nth-child(' + [local + 2] + ') td:nth-child(3) select option[selected="selected"]';
                    browser.getAttribute(sel, 'innerText', function (txt) {
                        if (txt.value.length != 0) {
                            if (Prev === ''
                            ) {
                                Prev = txt.value;
                            }
                            else {
                                if (Prev <= txt.value) {
                                    // console.log(Prev + ' <= ' + txt.value)
                                    console.log('OK');
                                }
                                else {
                                    console.log('! ' + Prev + ' >>>>>> ' + txt.value + ' EXIT');
                                    browser.waitForElementVisible('body1', 100)
                                }
                                Prev = txt.value;
                            }
                        }
                    })
                }
            })
    },

    'GeoZones sorting USA': function (browser) {
        this.lc
            .click('@GeoZones')
        browser
            .click('#content > form > table > tbody > tr:nth-child(3) > td:nth-child(3) > a')
            .elements('css selector', '[id=table-zones] tr', function (zus) {
                console.log('Checking sorting for: ' + [zus.value.length - 2] + ' zones');
                let Prev = '';
                for (var i = 0; i < [zus.value.length - 2]; i++) {
                    let local = i
                    let sel = '[id = table-zones] tr:nth-child(' + [local + 2] + ') td:nth-child(3) select option[selected="selected"]';
                    browser.getAttribute(sel, 'innerText', function (txt) {
                        if (txt.value.length != 0) {
                            if (Prev === ''
                            ) {
                                Prev = txt.value;
                            }
                            else {
                                if (Prev <= txt.value) {
                                    // console.log(Prev + ' <= ' + txt.value)
                                    console.log('OK');
                                }
                                else {
                                    console.log('! ' + Prev + ' >>>>>> ' + txt.value + ' EXIT');
                                    browser.waitForElementVisible('body1', 100)
                                }
                                Prev = txt.value;
                            }
                        }
                    })
                }
            })
    },


};

