const assert = require('assert');
const wdi5 = require('../../../../../index');

describe('ui5 plugin', () => {
    const viewName = 'test.Sample.view.Main';

    it('test the cordova barcodescanner plugin', () => {
        // ui5
        const buttonselector = {
            wdio_ui5_key: 'barcodescannerplugin',
            selector: {
                id: 'barcodescannerplugin',
                viewName: viewName
            }
        };

        const inputSelector = {
            wdio_ui5_key: 'barcodeValue',
            selector: {
                id: 'barcodeValue',
                viewName: viewName
            }
        };

        const button = browser.asControl(buttonselector);
        // open the barcode scanner
        button.press();

        const input = browser.asControl(inputSelector);
        // the app function passes the scan into the model and bind to the input value
        assert.equal('some test scan test', input.getProperty('value'));
    });
});
