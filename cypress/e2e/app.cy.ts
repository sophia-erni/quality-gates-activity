import { HomePage } from './page-objects/home.po';

describe('Home Page', () => {
  const homePage = new HomePage();

  beforeEach(() => {
    homePage.navigateTo();
  });

  it('should display the home page and say hello', () => {
    cy.url().should('include', homePage.url, { timeout: 10000 }); // Increase the timeout to 10 seconds
    homePage.welcomeText.should('contain', 'Welcome');
  });
});
