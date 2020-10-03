/// <reference types="cypress" />

context("Homepage", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  });

  describe("Welcome text", () => {
    it("should show welcome text", () => {
      cy.contains(/Learn React/).should('be.visible')
      cy.contains(/Mocked Todo1/).should('be.visible');
      cy.contains(/lasljasj/);
    });
  });
});
