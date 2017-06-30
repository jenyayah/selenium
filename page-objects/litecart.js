module.exports = {
    elements: {
        loginInput: {
            selector: '#box-login > form > div.content > table > tbody > tr:nth-child(1) > td:nth-child(2) > span > input[type="text"]'
        },
        passInput: {
            selector: '#box-login > form > div.content > table > tbody > tr:nth-child(2) > td:nth-child(2) > span > input[type="password"]'
        },
        loginButton: {
            selector: '#box-login > form > div.footer > button'
        },
        versionLabel: {
            selector: '#platform'
        },
        logoutButton: {
            selector: '#sidebar > div.header > a:nth-child(5) > i'
        },
        headerText: {
            selector: '#content > h1'
        },


        Appear: {
            selector: "//*[contains(text(), 'Appearence')]",
            locateStrategy: 'xpath'
        },
        AppearLogotype: {
            selector: 'li#doc-logotype'
        },


        Catalog: {
            selector: "//*[contains(text(), 'Catalog')]",
            locateStrategy: 'xpath'
        },
        CatalogProd: {
            selector: 'li#doc-product_groups'
        },
        CatalogOpt: {
            selector: 'li#doc-option_groups'
        },
        CatalogManuf: {
            selector: 'li#doc-manufacturers'
        },
        CatalogSuppl: {
            selector: 'li#doc-suppliers'
        },
        CatalogDeliv: {
            selector: 'li#doc-delivery_statuses'
        },
        CatalogSold: {
            selector: 'li#doc-sold_out_statuses'
        },
        CatalogQnt: {
            selector: 'li#doc-quantity_units'
        },
        CatalogCSV: {
            selector: 'li#doc-csv'
        },

        Countries: {
            selector: "//*[contains(text(), 'Countries')]",
            locateStrategy: 'xpath'
        },

        Currencies: {
            selector: "//*[contains(text(), 'Currencies')]",
            locateStrategy: 'xpath'
        },

        GeoZones: {
            selector: "//*[contains(text(), 'Geo Zones')]",
            locateStrategy: 'xpath'
        },

        Pages: {
            selector: "//*[contains(text(), 'Pages')]",
            locateStrategy: 'xpath'
        },

        Slides: {
            selector: "//*[contains(text(), 'Slides')]",
            locateStrategy: 'xpath'
        },

        Users: {
            selector: "//*[contains(text(), 'Users')]",
            locateStrategy: 'xpath'
        },

        vQmods: {
            selector: "//*[contains(text(), 'vQmods')]",
            locateStrategy: 'xpath'
        },

        Customers: {
            selector: "//*[contains(text(), 'Customers')]",
            locateStrategy: 'xpath'
        },
        CustNews: {
            selector: 'li#doc-newsletter'
        },
        CustCsv: {
            selector: 'li#doc-csv'
        },


        Languages: {
            selector: "//*[contains(text(), 'Languages')]",
            locateStrategy: 'xpath'
        },
        LangStor: {
            selector: 'li#doc-storage_encoding'
        },


        Modules: {
            selector: "//*[contains(text(), 'Modules')]",
            locateStrategy: 'xpath'
        },
        ModCust: {
            selector: 'li#doc-customer'
        },
        ModShip: {
            selector: 'li#doc-shipping'
        },
        ModPay: {
            selector: 'li#doc-payment'
        },
        ModTotal: {
            selector: 'li#doc-order_total'
        },
        ModSuc: {
            selector: 'li#doc-order_success'
        },
        ModAct: {
            selector: 'li#doc-order_action'
        },

        Orders: {
            selector: "//*[contains(text(), 'Orders')]",
            locateStrategy: 'xpath'
        },
        OrderSt: {
            selector: 'li#doc-order_statuses'
        },


        Reports: {
            selector: "//*[contains(text(), 'Reports')]",
            locateStrategy: 'xpath'
        },
        RepSold: {
            selector: 'li#doc-most_sold_products'
        },
        RepShop: {
            selector: 'li#doc-most_shopping_customers'
        },



        Settings: {
            selector: "//*[contains(text(), 'Settings')]",
            locateStrategy: 'xpath'
        },
        SetDef: {
            selector: 'li#doc-defaults'
        },
        SetGen: {
            selector: 'li#doc-general'
        },
        SetList: {
            selector: 'li#doc-listings'
        },
        SetImag: {
            selector: 'li#doc-images'
        },
        SetCheck: {
            selector: 'li#doc-checkout'
        },
        SetAdv: {
            selector: 'li#doc-advanced'
        },
        SetSec: {
            selector: 'li#doc-security'
        },


        Tax: {
            selector: "//*[contains(text(), 'Tax')]",
            locateStrategy: 'xpath'
        },
        TaxR: {
            selector: 'li#doc-tax_rates'
        },



        Translations: {
            selector: "//*[contains(text(), 'Translations')]",
            locateStrategy: 'xpath'
        },
        TransScan: {
            selector: 'li#doc-scan'
        },
        TransCSV: {
            selector: 'li#doc-csv'
        },


    }
};