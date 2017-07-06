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


    'Check main item attr': function (browser) {
        var SaleH = ''
        var RegH = ''
        browser
            .waitForElementVisible('#box-campaigns > div > ul > li > a.link > div.name', browser.globals.waitElementPause)
            .getTagName('#box-campaigns > div > ul > li > a.link > div.price-wrapper > s', function (strk) {
                if (strk.value == 's') {
                    console.log('Main Regular Price Font is OK');
                }
                else {
                    console.log('! Main Regular Price has not strike through style EXIT');
                    browser.waitForElementVisible('body1', 100)
                }
            })
            .getCssProperty('#box-campaigns > div > ul > li > a.link > div.price-wrapper > s', "color", function (priceColor) {
                // console.log(priceColor.value);
                var colorString = priceColor.value,
                    colorsOnly = colorString.substring(colorString.indexOf('(') + 1, colorString.lastIndexOf(')')).split(/,\s*/),
                    components = {};
                components.red = colorsOnly[0];
                components.green = colorsOnly[1];
                components.blue = colorsOnly[2];
                // console.log(colorsOnly);

                if (components.red == components.green && components.red == components.blue) {
                    console.log('Main Regular Price Color is OK');
                }
                else {
                    console.log('! Main Regular Price color is wrong EXIT');
                    browser.waitForElementVisible('body1', 100)
                }
            })

            .getElementSize('#box-campaigns > div > ul > li > a.link > div.price-wrapper > s', function (mainSize) {
                RegH = mainSize.value.height

            })

            .getElementSize('#box-campaigns > div > ul > li > a.link > div.price-wrapper > strong', function (SaleSize) {
                SaleH = SaleSize.value.height


                if (SaleH > RegH) {
                    console.log('Regular Price font size < Sale Price font size');
                }
                else {
                    console.log('! Regular Price font size >= Sale Price font size EXIT');
                    browser.waitForElementVisible('body1', 100)
                }
            })

            .getTagName('#box-campaigns > div > ul > li > a.link > div.price-wrapper > strong', function (bold) {
                if (bold.value == 'strong') {
                    console.log('Main Sale Price Font is OK');
                }
                else {
                    console.log('! Main Sale Price has not bold style EXIT');
                    browser.waitForElementVisible('body1', 100)
                }
            })

            .getCssProperty('#box-campaigns > div > ul > li > a.link > div.price-wrapper > strong', "color", function (saleColor) {
                // console.log(saleColor.value);
                var colorString = saleColor.value,
                    colorsOnly = colorString.substring(colorString.indexOf('(') + 1, colorString.lastIndexOf(')')).split(/,\s*/),
                    components = {};
                components.red = colorsOnly[0];
                components.green = colorsOnly[1];
                components.blue = colorsOnly[2];
                // console.log(colorsOnly);

                if (components.green == components.blue && components.blue == 0) {
                    console.log('Main Sale Price Color is OK');
                }
                else {
                    console.log('! Main Sale Price color is wrong EXIT');
                    browser.waitForElementVisible('body1', 100)
                }
            })

    },



    'Compare item attr': function (browser) {
        var mainCaption = ''
        var mainPrice = ''
        var mainSale = ''
        browser
            .getText('#box-campaigns > div > ul > li > a.link > div.name', function (cap) {
                mainCaption = cap.value
                // console.log(mainCaption)
            })
            .getText('#box-campaigns > div > ul > li > a.link > div.price-wrapper > s', function (price) {
                mainPrice = price.value
                // console.log(mainPrice)
            })

            .getText('#box-campaigns > div > ul > li > a.link > div.price-wrapper > strong', function (sale) {
                mainSale = sale.value
                // console.log(mainSale)
            })

            .click('#box-campaigns > div > ul > li > a.link')
            .waitForElementVisible('#box-product > div:nth-child(1) > h1', browser.globals.waitElementPause)
            .getText('#box-product > div:nth-child(1) > h1', function (caption) {
                // console.log(caption.value)
                if (mainCaption == caption.value) {
                    // console.log(mainCaption + ' = ' + caption.value)
                    console.log('Item Name is OK');
                }
                else {
                    console.log('! ' + mainCaption + ' <> ' + caption.value + ' EXIT');
                    browser.waitForElementVisible('body1', 100)
                }
            })

            .getText('#box-product > div.content > div.information > div.price-wrapper > s', function (price) {
                // console.log(price.value)
                if (mainPrice == price.value) {
                    // console.log(mainPrice + ' = ' + price.value)
                    console.log('Regular Price is OK');
                }
                else {
                    console.log('! ' + mainPrice + ' <> ' + price.value + ' EXIT');
                    browser.waitForElementVisible('body1', 100)
                }
            })

            .getText('#box-product > div.content > div.information > div.price-wrapper > strong', function (sale) {
                // console.log(sale.value)
                if (mainSale == sale.value) {
                    // console.log(mainSale + ' = ' + sale.value)
                    console.log('Sale Price is OK');
                }
                else {
                    console.log('! ' + mainSale + ' <> ' + sale.value + ' EXIT');
                    browser.waitForElementVisible('body1', 100)
                }
            })

    },


    'Check item attr': function (browser) {
        var itSaleH = ''
        var itRegH = ''
        browser
            .getTagName('#box-product > div.content > div.information > div.price-wrapper > s', function (strk) {
                if (strk.value == 's') {
                    console.log('Regular Price Font is OK');
                }
                else {
                    console.log('! Regular Price has not strike through style EXIT');
                    browser.waitForElementVisible('body1', 100)
                }
            })

            .getTagName('#box-product > div.content > div.information > div.price-wrapper > strong', function (bold) {
                if (bold.value == 'strong') {
                    console.log('Sale Price Font is OK');
                }
                else {
                    console.log('! Sale Price has not bold style EXIT');
                    browser.waitForElementVisible('body1', 100)
                }
            })


            .getCssProperty('#box-product > div.content > div.information > div.price-wrapper > s', "color", function (priceColor) {
                var colorString = priceColor.value,
                    colorsOnly = colorString.substring(colorString.indexOf('(') + 1, colorString.lastIndexOf(')')).split(/,\s*/),
                    components = {};
                components.red = colorsOnly[0];
                components.green = colorsOnly[1];
                components.blue = colorsOnly[2];
                // console.log(colorsOnly);

                if (components.red == components.green && components.red == components.blue) {
                    console.log('Regular Price Color is OK');
                }
                else {
                    console.log('! Regular Price color is wrong EXIT');
                    browser.waitForElementVisible('body1', 100)
                }
            })

            .getElementSize('#box-product > div.content > div.information > div.price-wrapper > s', function (itmainSize) {
                itRegH = itmainSize.value.height

            })

            .getElementSize('#box-product > div.content > div.information > div.price-wrapper > strong', function (itSaleSize) {
                itSaleH = itSaleSize.value.height


                if (itSaleH > itRegH) {
                    console.log('Regular Price font size < Sale Price font size');
                }
                else {
                    console.log('! Regular Price font size >= Sale Price font size EXIT');
                    browser.waitForElementVisible('body1', 100)
                }
            })


            .getCssProperty('#box-product > div.content > div.information > div.price-wrapper > strong', "color", function (saleColor) {
                // console.log(saleColor.value);
                var colorString = saleColor.value,
                    colorsOnly = colorString.substring(colorString.indexOf('(') + 1, colorString.lastIndexOf(')')).split(/,\s*/),
                    components = {};
                components.red = colorsOnly[0];
                components.green = colorsOnly[1];
                components.blue = colorsOnly[2];
                // console.log(colorsOnly);

                if (components.green == components.blue && components.blue == 0) {
                    console.log('Sale Price Color is OK');
                }
                else {
                    console.log('! Sale Price color is wrong EXIT');
                    browser.waitForElementVisible('body1', 100)
                }
            })



    },


};

