export class HomePage {
  url = '/home';

  navigateTo() {
    cy.visit(this.url);
    cy.url().should('include', this.url, { timeout: 10000 }); // Ensure the URL includes '/home'
  }

  get welcomeText() {
    return cy.get('app-root mat-card-title', { timeout: 10000 }).should('be.visible'); // Increase the timeout to 10 seconds
  }
}
