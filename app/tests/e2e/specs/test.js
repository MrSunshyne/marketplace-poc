// https://docs.cypress.io/api/introduction/api.html

describe("Marketplace PoC is online", () => {
  it("Visits the app root url", () => {
    cy.visit("/");
    cy.contains("h2", "Buy anything?");
  });

  it("Loads featured listings", () => {
    cy.visit("/");
    cy.get('[data-cy="featured"]');
  });

  it("Create Listing", () => {
    cy.visit("/new/+");
    cy.get("form").within(($form) => {
      // you have access to the found form via
      // the jQuery object $form if you need it

      // cy.get() will only search for elements within form,
      // not within the entire document
      cy.get('input[id="title"]').type("My Title");
      cy.get('textarea[id="description"]').type("description");
      cy.root().submit();
    });

    cy.get("#confirm").click();
    cy.wait(1500);
    cy.get('[data-cy="success"]').contains("Listing added with great success");
  });
});
