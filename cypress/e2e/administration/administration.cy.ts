import {
  userManagementPageHeadingSelector,
  metricsPageHeadingSelector,
  healthPageHeadingSelector,
  logsPageHeadingSelector,
  configurationPageHeadingSelector,
} from '../../support/commands';

describe('/admin', () => {
  const username = Cypress.env('E2E_USERNAME') ?? 'admin';
  const password = Cypress.env('E2E_PASSWORD') ?? 'admin';

  beforeEach(() => {
    cy.login(username, password);
    cy.visit('');
  });

  describe('/user-management', () => {
    it('should load the page', () => {
      cy.clickOnAdminMenuItem('user-management');
      cy.get(userManagementPageHeadingSelector).should('be.visible');
    });
  });

  describe('/metrics', () => {
    it('should load the page', () => {
      cy.clickOnAdminMenuItem('metrics');
      cy.get(metricsPageHeadingSelector).should('be.visible');
    });
  });

  describe('/health', () => {
    it('should load the page', () => {
      cy.clickOnAdminMenuItem('health');
      cy.get(healthPageHeadingSelector).should('be.visible');
    });
  });

  describe('/logs', () => {
    it('should load the page', () => {
      cy.clickOnAdminMenuItem('logs');
      cy.get(logsPageHeadingSelector).should('be.visible');
    });
  });

  describe('/configuration', () => {
    it('should load the page', () => {
      cy.clickOnAdminMenuItem('configuration');
      cy.get(configurationPageHeadingSelector).should('be.visible');
    });
  });
});
