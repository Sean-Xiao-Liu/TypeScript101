import {Pages} from "@support/pages";
import {ClientNameAndEmailGenerator} from "@support/clientNameAndEmailGenerator";
import {response} from "express";

describe('custom query parameters', () => {
    const today = new Date();
    const formattedDate = today.toISOString().substring(0, 10);

    context('query parameters input', () => {
        it('hard coded url parameters', () => {
            cy.request('GET', Pages.getRegreUrl() + 'api/users?page=2')
                .then((response) => {
                    expect(response.status).to.eq(200);
                    expect(response.body.data).to.have.length(6);
                })
        })

        it('url parameters with qs option within request()', () => {
            // the method, url and qs all in the options
            cy.request({
                method: 'GET',
                url: Pages.getRegreUrl() + 'api/users',
                qs: { // use to put parameters
                    page: 2
                }
            })
                .then((response) => {
                    expect(response.status).to.eq(200);
                    expect(response.body.data).to.have.length(6);
                    expect(response.body.data[0].id).to.eql(7);
                    expect(response.body.data[1]).to.have.property('id').eql(8);
                })
        })
    })

    context('book API generate token at run time', () => {
        let accessToken: string;
        const generator = new ClientNameAndEmailGenerator();
        const requestBody = generator.generateRandomClient();
        before(() => {
            cy.request('POST', Pages.getSimpleBookUrl() + 'api-clients/', requestBody)
                .then((response) =>{
                    expect(response.status).to.eq(201);
                    accessToken = response.body.accessToken;
                })
        })

        it('should be able to get empty book list with token', () => {
            cy.request({
                method: 'GET',
                url: Pages.getSimpleBookUrl() + 'orders',
                headers:{
                    'Authorization': 'Bearer ' + accessToken
                }
            }).then((response) => {
                expect(response.status).to.eq(200);
                expect(response.body).eql([]);
            })
        });

        it('should be able to order multiple books', () => {
            for(let i = 0; i < 5; i++) {
                cy.request({
                    method: 'POST',
                    url: Pages.getSimpleBookUrl() + 'orders',
                    headers:{
                        'Authorization': 'Bearer ' + accessToken
                    },
                    body:{
                        "bookId": 1,
                        "customerName": "{{$randomFullName}}"
                    }
                }).then((response) => {
                    expect(response.status).to.eq(201);
                    expect(response.body.created).to.eql(true);
                })
            }
        });

        it('should be able to get the order list of 5 books', () => {
            cy.request({
                method: 'GET',
                url: Pages.getSimpleBookUrl() + 'orders',
                headers:{
                    'Authorization': 'Bearer ' + accessToken
                }
            }).then((response) => {
                expect(response.status).to.eq(200);
                expect(response.body).to.have.length(5);
            })
        })
    })
})
