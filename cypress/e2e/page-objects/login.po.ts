export class LoginPage {
  url = '/login';

  navigateTo() {
    cy.visit(this.url);
  }

  login(username: string, password: string) {
    cy.get('input[name="username"]', { timeout: 20000 }).should('be.visible').type(username); // Increase the timeout to 10 seconds
    cy.get('input[name="password"]', { timeout: 20000 }).should('be.visible').type(password); // Increase the timeout to 10 seconds
    cy.get('button[type="submit"]', { timeout: 20000 }).should('be.visible').click(); // Increase the timeout to 10 seconds
  }
}
