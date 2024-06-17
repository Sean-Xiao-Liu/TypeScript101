declare namespace Cypress {
    interface Chainable {
        refresh(): Chainable<void>;
        getById(id:string): Chainable<JQuery<HTMLElement>>; // define the return type here
    }
}
