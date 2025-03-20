// filepath: c:\Users\extjaso\OneDrive - ERNI Group\Desktop\Bootcamp\Exercises\quality-gates-activity\cypress\e2e\page-objects\home.po.ts
export class HomePage {
  url = '/home';

  navigateTo() {
    cy.visit(this.url);
    cy.url().should('include', this.url, { timeout: 10000 }); // Ensure the URL includes '/home'
  }

  get welcomeText() {
    return cy.get('mat-card mat-card-title', { timeout: 10000 }).should('be.visible'); // Increase the timeout to 10 seconds
  }
}
