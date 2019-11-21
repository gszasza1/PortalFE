describe("Főoldal", () => {
  beforeEach(() => window.cy.visit("/"));
  console.log("asd");
  it("should display list created and edited", () => {
    window.cy.viewport(1920, 1080);
    window.cy.contains("PORTAL");
    window.cy.screenshot("Főoldal");
  });
});
