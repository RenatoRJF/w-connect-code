/// <reference types="cypress" />

describe("example to-do app", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  });

  it("displays four menu items by default", () => {
    cy.get(".menu-list-item").should("have.length", 4);
  });

  it("can add new todo items", () => {
      cy.get(".menu-list-item").contains("New York Times").click();
      cy.location("pathname").should("include", "new-york-times");
  });
});
