import { LoginPage } from './e2e/page-objects/login.po';
import { AppSharedPage } from './e2e/page-objects/app-shared.po';
import { HomePage } from './e2e/page-objects/home.po';

describe('when the app loads', () => {
  const login = new LoginPage();
  const app = new AppSharedPage();
  const home = new HomePage();

  before(() => {
    app.navigateAndSetLanguage();
  });

  it('should display the login page and log in', () => {
    cy.url().should('include', login.url);
    login.login();
  });

  it('should display the home page and say hello', () => {
    cy.url().should('include', home.url);
    home.welcomeText.contains('Hello world !');
  });
});
