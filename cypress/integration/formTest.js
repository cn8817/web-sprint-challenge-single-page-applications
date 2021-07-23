desbribe('Sprint challenge', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000')
    })

    it('check if text input works', () => {
        nameInput()
            .should('have.value', '')
            .type('christine')
            .should('have.value', 'christine')
    })
})

const nameInput = () => cy.get('input[name="name"]')
const pepperoniInput = () => cy.get('input[name=""pepperoni]')
const baconInput = () => cy.get('input[name="bacon"]')
const submitBtn =() => cy.get('buton[id="order-button"]')