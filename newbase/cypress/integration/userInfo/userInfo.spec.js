describe('userInfo', () => {
    it('openSetUserInfoDialog', () => {
        cy.visit('http://localhost:4100/users-info');
        cy.contains('Add').click();
        expect(cy.get('div').should('have.class', 'dialog-wrapper'));
    });
    it('typeUserInfoInDialog', () => {
        cy.get('[name="name"]').type('Test Me').should('have.value', 'Test Me');
        cy.get('[name="surname"]').type('surname').should('have.value', 'surname');
        cy.get('div').should('have.class', 'select-menu');
    });
    it('setUserInfo', () => {
        cy.contains('Submit').click().should(() => {
            expect(localStorage.getItem('userInfoList')).contains('Test Me');
        });
    });
});