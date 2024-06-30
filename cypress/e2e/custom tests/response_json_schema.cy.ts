import {Pages} from "@support/pages";

describe('verify custom json schema', () => {
    // need to install the ajv package
    const AJV = require('ajv');
    const ajv = new AJV(); // create a AJV instance
    const expectedSchema = require('../../fixtures/fake_store_json_schema.json'); // use 'https://transform.tools/json-to-json-schema'
    beforeEach(() => {
        cy.clearAllCookies();
        cy.clearLocalStorage()
    })

    it('paragraph should have title', () => {
        cy.request({
            method: 'GET',
            url: Pages.getFakeStoreUrl()+'products',
        }).then((response) => {
            expect(response.status).to.eq(200);
            const validateFunction =  ajv.compile(expectedSchema); // compile schema to a validation function
            const isValid = validateFunction(response.body);
            expect(isValid).to.be.true;
        })
    })
})
