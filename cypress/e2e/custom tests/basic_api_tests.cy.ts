import {Pages} from "@support/pages";
import {response} from "express";

describe('Basic API tests', () => {

    context('basic CRUD',() => {
        it('basic GET request',() => { // set browser to run tests
            cy.request('GET',
                Pages.getJsonPlaceHolderUrl()+'posts/1')
                .its('status')
                .should('eq',200)
        })


        it('should verify that the GET request to JSONPlaceholder returns exactly 100 posts', () => {
            cy.request('GET', 'https://jsonplaceholder.typicode.com/posts')
                .then((response) => {
                    // Check if the response contains exactly 100 posts
                    expect(response.body).to.have.length(100);
            });
        });


        it('basic POST request',() => {
            cy.request('POST',
                Pages.getJsonPlaceHolderUrl()+'posts',
                {
                    title:'post title',
                    body:'post body',
                    userId:1
                })
                .its('status')
                .should('eq',201);
        })

        it('verify full post response body and specific property',() => {
            cy.request('POST',
                Pages.getJsonPlaceHolderUrl()+'posts',
                {
                    title:'post title',
                    body:'post body',
                    userId:1
                })
                .then((response) => {
                    // Check if the response contains exactly response body
                    expect(response.body).to.deep.equal({
                        title: 'post title',
                        body: 'post body',
                        userId: 1,
                        id: 101
                    });
                    expect(response.body.id).eql(101);
                })
        })

        it('basic PUT request',() => {
            cy.request('PUT',Pages.getJsonPlaceHolderUrl()+'posts/1',{
                title:'post title',
                body:'post body',
                userId:1,
                id:1
            })
                .then((response) =>{
                    expect(response.status).eql(200);
                    expect(response.body.userId).eql(1);
                    expect(response.body.id).eql(1);
                })
        })

        it('basic DELETE request',() => {
            cy.request('DELETE',Pages.getJsonPlaceHolderUrl()+'posts/1')
                .then((response) =>{
                    expect(response.status).eql(200);
                    // expect(response.body.userId).eql(1);
                    // expect(response.body.id).eql(1);
                })
        })
    })


})
