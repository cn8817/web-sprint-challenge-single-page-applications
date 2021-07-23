describe('Sprint challenge', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000/pizza')
    })

    it('check if text input works', () => {
        nameInput()
            .should('have.value', '')
            .type('christine')
            .should('have.value', 'christine')
    })

    it('check if we can select multiple toppings', () => {
        pepperoniInput().click()
        baconInput().click()
    }) 

    it('check if we can submit', () => {
        nameInput().type('christine')
        sizeInput().select('small')
        submitBtn().should('not.be.disabled')
    })
})

const nameInput = () => cy.get('input[name="name"]')
const sizeInput = () => cy.get('input[name="size"]')
const pepperoniInput = () => cy.get('input[name="pepperoni"]')
const baconInput = () => cy.get('input[name="bacon"]')
const submitBtn =() => cy.get('buton[id="order-button"]')