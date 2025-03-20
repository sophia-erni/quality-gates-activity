import { LoginPage } from './login.po';
import { AppSharedPage } from './app-shared.po';
import { HomePage } from './home.po';

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
