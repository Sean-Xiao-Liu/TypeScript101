import {Pages} from "@support/pages";

describe('custom query parameters', () => {
    const today = new Date();
    const formattedDate = today.toISOString().substring(0, 10);

    context('query parameters input', () => {
        it('hard coded url parameters', () => {
            cy.request('GET',Pages.getRegreUrl()+'api/users?page=2')
                .then((response) =>{
                    expect(response.status).to.eq(200);
                    expect(response.body.data).to.have.length(6);
                })
        })

        it('url parameters with qs option within request()', () => {
            // the method, url and qs all in the options
            cy.request({
                method: 'GET',
                url: Pages.getRegreUrl()+'api/users',
                qs:{ // use to put parameters
                    page: 2
                }
            })
                .then((response) =>{
                    expect(response.status).to.eq(200);
                    expect(response.body.data).to.have.length(6);
                    expect(response.body.data[0].id).to.eql(7);
                    expect(response.body.data[1]).to.have.property('id').eql(8);
                })
        })
    })
})
