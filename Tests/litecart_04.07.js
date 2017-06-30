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



    'Menu Appearence items': function (client) {
        this.lc
            .waitForElementVisible('@Appear', client.globals.waitElementPause)
            .click('@Appear')
            .expect.element('@headerText').text.to.equal('Template')
        this.lc
            .waitForElementVisible('@AppearLogotype', client.globals.waitElementPause)
            .click('@AppearLogotype')
            .expect.element('@headerText').text.to.equal('Logotype')
    },

    'Menu Catalog items': function (client) {
        this.lc
            .waitForElementVisible('@Catalog', client.globals.waitElementPause)
            .click('@Catalog')
            .expect.element('@headerText').text.to.equal('Catalog')

        this.lc
            .waitForElementVisible('@CatalogProd', client.globals.waitElementPause)
            .click('@CatalogProd')
            .expect.element('@headerText').text.to.equal('Product Groups')

        this.lc
            .waitForElementVisible('@CatalogOpt', client.globals.waitElementPause)
            .click('@CatalogOpt')
            .expect.element('@headerText').text.to.equal('Option Groups')

        this.lc
            .waitForElementVisible('@CatalogManuf', client.globals.waitElementPause)
            .click('@CatalogManuf')
            .expect.element('@headerText').text.to.equal('Manufacturers')

        this.lc
            .waitForElementVisible('@CatalogSuppl', client.globals.waitElementPause)
            .click('@CatalogSuppl')
            .expect.element('@headerText').text.to.equal('Suppliers')

        this.lc
            .waitForElementVisible('@CatalogDeliv', client.globals.waitElementPause)
            .click('@CatalogDeliv')
            .expect.element('@headerText').text.to.equal('Delivery Statuses')

        this.lc
            .waitForElementVisible('@CatalogSold', client.globals.waitElementPause)
            .click('@CatalogSold')
            .expect.element('@headerText').text.to.equal('Sold Out Statuses')

        this.lc
            .waitForElementVisible('@CatalogQnt', client.globals.waitElementPause)
            .click('@CatalogQnt')
            .expect.element('@headerText').text.to.equal('Quantity Units')

        this.lc
            .waitForElementVisible('@CatalogCSV', client.globals.waitElementPause)
            .click('@CatalogCSV')
            .expect.element('@headerText').text.to.equal('CSV Import/Export')
    },

    'Menu Single items': function (client) {
        this.lc
            .waitForElementVisible('@Countries', client.globals.waitElementPause)
            .click('@Countries')
            .expect.element('@headerText').text.to.equal('Countries')

        this.lc
            .waitForElementVisible('@Currencies', client.globals.waitElementPause)
            .click('@Currencies')
            .expect.element('@headerText').text.to.equal('Currencies')

        this.lc
            .waitForElementVisible('@GeoZones', client.globals.waitElementPause)
            .click('@GeoZones')
            .expect.element('@headerText').text.to.equal('Geo Zones')

        this.lc
            .waitForElementVisible('@Pages', client.globals.waitElementPause)
            .click('@Pages')
            .expect.element('@headerText').text.to.equal('Pages')

        this.lc
            .waitForElementVisible('@Slides', client.globals.waitElementPause)
            .click('@Slides')
            .expect.element('@headerText').text.to.equal('Slides')
        this.lc
            .waitForElementVisible('@Users', client.globals.waitElementPause)
            .click('@Users')
            .expect.element('@headerText').text.to.equal('Users')

        this.lc
            .waitForElementVisible('@vQmods', client.globals.waitElementPause)
            .click('@vQmods')
            .expect.element('@headerText').text.to.equal('vQmods')
    },




    'Menu Customers items': function (client) {
        this.lc
            .waitForElementVisible('@Customers', client.globals.waitElementPause)
            .click('@Customers')
            .expect.element('@headerText').text.to.equal('Customers')

        this.lc
            .waitForElementVisible('@CustCsv', client.globals.waitElementPause)
            .click('@CustCsv')
            .expect.element('@headerText').text.to.equal('CSV Import/Export')

        this.lc
            .waitForElementVisible('@CustNews', client.globals.waitElementPause)
            .click('@CustNews')
            .expect.element('@headerText').text.to.equal('Newsletter')

    },



    'Menu Languages items': function (client) {
        this.lc
            .waitForElementVisible('@Languages', client.globals.waitElementPause)
            .click('@Languages')
            .expect.element('@headerText').text.to.equal('Languages')

        this.lc
            .waitForElementVisible('@LangStor', client.globals.waitElementPause)
            .click('@LangStor')
            .expect.element('@headerText').text.to.equal('Storage Encoding')

    },

    'Menu Modules items': function (client) {
        this.lc
            .waitForElementVisible('@Modules', client.globals.waitElementPause)
            .click('@Modules')
            .expect.element('@headerText').text.to.equal('Job Modules')

        this.lc
            .waitForElementVisible('@ModCust', client.globals.waitElementPause)
            .click('@ModCust')
            .expect.element('@headerText').text.to.equal('Customer Modules')

        this.lc
            .waitForElementVisible('@ModShip', client.globals.waitElementPause)
            .click('@ModShip')
            .expect.element('@headerText').text.to.equal('Shipping Modules')
        this.lc
            .waitForElementVisible('@ModPay', client.globals.waitElementPause)
            .click('@ModPay')
            .expect.element('@headerText').text.to.equal('Payment Modules')
        this.lc
            .waitForElementVisible('@ModTotal', client.globals.waitElementPause)
            .click('@ModTotal')
            .expect.element('@headerText').text.to.equal('Order Total Modules')
        this.lc
            .waitForElementVisible('@ModSuc', client.globals.waitElementPause)
            .click('@ModSuc')
            .expect.element('@headerText').text.to.equal('Order Success Modules')
        this.lc
            .waitForElementVisible('@ModAct', client.globals.waitElementPause)
            .click('@ModAct')
            .expect.element('@headerText').text.to.equal('Order Action Modules')
    },

    'Menu Orders items': function (client) {
        this.lc
            .waitForElementVisible('@Orders', client.globals.waitElementPause)
            .click('@Orders')
            .expect.element('@headerText').text.to.equal('Orders')

        this.lc
            .waitForElementVisible('@OrderSt', client.globals.waitElementPause)
            .click('@OrderSt')
            .expect.element('@headerText').text.to.equal('Order Statuses')
    },


    'Menu Reports items': function (client) {
        this.lc
            .waitForElementVisible('@Reports', client.globals.waitElementPause)
            .click('@Reports')
            .expect.element('@headerText').text.to.equal('Monthly Sales')

        this.lc
            .waitForElementVisible('@RepSold', client.globals.waitElementPause)
            .click('@RepSold')
            .expect.element('@headerText').text.to.equal('Most Sold Products')

        this.lc
            .waitForElementVisible('@RepShop', client.globals.waitElementPause)
            .click('@RepShop')
            .expect.element('@headerText').text.to.equal('Most Shopping Customers')
    },



    'Menu Settings items': function (client) {
        this.lc
            .waitForElementVisible('@Settings', client.globals.waitElementPause)
            .click('@Settings')
            .expect.element('@headerText').text.to.equal('Settings')
        this.lc
            .waitForElementVisible('@SetDef', client.globals.waitElementPause)
            .click('@SetDef')
            .expect.element('@headerText').text.to.equal('Settings')
        this.lc
            .waitForElementVisible('@SetGen', client.globals.waitElementPause)
            .click('@SetGen')
            .expect.element('@headerText').text.to.equal('Settings')
        this.lc
            .waitForElementVisible('@SetList', client.globals.waitElementPause)
            .click('@SetList')
            .expect.element('@headerText').text.to.equal('Settings')
        this.lc
            .waitForElementVisible('@SetImag', client.globals.waitElementPause)
            .click('@SetImag')
            .expect.element('@headerText').text.to.equal('Settings')
        this.lc
            .waitForElementVisible('@SetCheck', client.globals.waitElementPause)
            .click('@SetCheck')
            .expect.element('@headerText').text.to.equal('Settings')
        this.lc
            .waitForElementVisible('@SetAdv', client.globals.waitElementPause)
            .click('@SetAdv')
            .expect.element('@headerText').text.to.equal('Settings')
        this.lc
            .waitForElementVisible('@SetSec', client.globals.waitElementPause)
            .click('@SetSec')
            .expect.element('@headerText').text.to.equal('Settings')



    },



    'Menu Tax items': function (client) {
        this.lc
            .waitForElementVisible('@Tax', client.globals.waitElementPause)
            .click('@Tax')
            .expect.element('@headerText').text.to.equal('Tax Classes')
        this.lc
            .waitForElementVisible('@TaxR', client.globals.waitElementPause)
            .click('@TaxR')
            .expect.element('@headerText').text.to.equal('Tax Rates')
    },




    'Menu Translations items': function (client) {
        this.lc
            .waitForElementVisible('@Translations', client.globals.waitElementPause)
            .click('@Translations')
            .expect.element('@headerText').text.to.equal('Search Translations')
        this.lc
            .waitForElementVisible('@TransScan', client.globals.waitElementPause)
            .click('@TransScan')
            .expect.element('@headerText').text.to.equal('Scan Files For Translations')
        this.lc
            .waitForElementVisible('@TransCSV', client.globals.waitElementPause)
            .click('@TransCSV')
            .expect.element('@headerText').text.to.equal('CSV Import/Export')
    },




    // 'Logout': function (client) {
    //     this.lc
    //         .click('@logoutButton')
    //         .waitForElementVisible('@loginButton', client.globals.waitElementPause)
    //         .expect.element('@loginButton').text.to.equal('Login')
    // },

};

