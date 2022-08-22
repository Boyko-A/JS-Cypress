describe('Работа авторизации', function () {

     it('Открытие сайта', function () {
        cy.visit('https://staya.dog/');
        cy.get('.header-bottom__right--link').click()
        cy.get('.auth-form > form > [type="email"]').type('boyko_anastasia@mail.ru');
        cy.get('.auth-form > form > [type="password"]').type('38AY@n@aOW');
        cy.get('.auth-form__submit > .s-button__content').click();
        cy.contains('Мои заказы');
     })
})
