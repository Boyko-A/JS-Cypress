describe('Проверка поисковой выдачи', function () {

     it('Открытие сайта', function () {
        cy.visit('https://yandex.ru/');
        cy.get('#text').type('Котята');
        cy.get('.search2__button > .button').click();
        cy.contains('Картинки по запросу «Котята»');
     })
})