context('demonstrating slow down using retries', () => {
    const totalTests = 20; // with retries for cy:run set to 2 (total of 60 runs), this stalls at test 10/11

    for (let i = 0; i < totalTests; i++) {
        it(`(${i}) should login successfully`, () => {
            const username = 'tomsmith';
            // const password = 'SuperSecretPassword!'; // correct password
            const password = 'badpassword';

            cy.visit('http://the-internet.herokuapp.com/login');
            cy.get('#username').clear().type(username);
            cy.get('#password').clear().type(password);
            cy.get('button').contains('Login').click();

            cy.get('#flash').contains('You logged into a secure area!');
        });
    }
});