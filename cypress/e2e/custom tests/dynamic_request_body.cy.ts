import {Pages} from "@support/pages";
import {RandomNameAndJobGenerator} from "@support/randomNameAndJobGenerator";
/**
 * 3 ways to use post request body:
 * 1. hard coded within scenario
 * 2. use fixtures
 * 3. generate dynamically
 */

describe('Multiple ways to create request body', () => {
    const today = new Date();
    const formattedDate = today.toISOString().substring(0, 10);
    context('Multiple ways to create request body', () => {
        it('should work with hard coded request body', () => {
            const requestBody = {
                name: "morpheus",
                job: "leader"
            };

            cy.request('POST',Pages.getRegreUrl()+'api/users',requestBody)
                .then((response) =>{
                    expect(response.status).to.eq(201);
                    expect(response.body.job).to.eql('leader');
                    expect(response.body.createdAt).to.contain(formattedDate);
                })
        });

        it('should work with fixture request body', () => {
            // get request body using fixture
            cy.fixture('name_and_job').then((data) =>{
                const requestBody = data;
                // put request within fixture function
                cy.request('POST',Pages.getRegreUrl()+'api/users',requestBody)
                    .then((response) =>{
                        expect(response.status).to.eq(201);
                        expect(response.body.job).to.eql(data.job); // Assertion with
                        expect(response.body.name).to.eql(data.name);
                        expect(response.body.createdAt).to.contain(formattedDate);
                    })
            })
        });

        it('should work with dynamically generated request body', () => {
            const generator = new RandomNameAndJobGenerator();
            const requestBody = generator.generate();

            cy.request('POST',Pages.getRegreUrl()+'api/users',requestBody)
                .then((response) =>{
                    expect(response.status).to.eq(201);
                    expect(response.body.job).to.eql(generator.getJob());
                    expect(response.body.name).to.eql(generator.getName());
                })
        })

    })
})
