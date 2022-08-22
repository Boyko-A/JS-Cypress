describe('Проверка сообщения об ошибке', function () {

     it('Открытие сайта', function () {
        cy.visit('https://staya.dog/');
        cy.get('.header-bottom__right--link').click()
        cy.get('.auth-form > form > [type="email"]').type('boyko_anastasia@mail.ru');
        cy.get('.auth-form > form > [type="password"]').type('38AYOW');
        cy.get('.auth-form__submit > .s-button__content').click();
        cy.contains('Невозможно войти с предоставленными учетными данными.');
     })
})