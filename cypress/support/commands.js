/**
 * get a profile object from the profiles fixture by username.
 * @param {string} username The username of the profile object
 * @param {string} brand The brand to use to get the profile
 * @returns {object} profile object or empty object if profile with specified username not found
 */
Cypress.Commands.add('getTestUserProfile', (username, brand = 'neds') =>
    cy.fixture(`users`).then((p) => p.filter((profile) => profile.username === username)[0] || {}));