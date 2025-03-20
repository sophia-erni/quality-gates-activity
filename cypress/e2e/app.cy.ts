import { LoginPage } from './page-objects/login.po';
import { AppSharedPage } from './page-objects/app-shared.po';
import { HomePage } from './page-objects/home.po';

describe('when the app loads', () => {
  const login = new LoginPage();
  const app = new AppSharedPage();
  const homePage = new HomePage();

  before(() => {
    app.navigateAndSetLanguage();
    login.navigateTo();
    login.login('username', 'password'); // Replace with valid credentials
    homePage.navigateTo();
  });

  it('should display the login page and log in', () => {
    cy.url().should('include', login.url);
  });

  it('should display the home page and say hello', () => {
    cy.url().should('include', homePage.url, { timeout: 10000 }); // Increase the timeout to 10 seconds
    homePage.welcomeText.should('contain', 'hello');
  });
});
