///<refernces types="cypress>>>"/>

it("Test1", function(){

cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/")
cy.get(':nth-child(1) > .product-action > button').click()
cy.get('.cart-icon > img').click()
cy.get(':nth-child(1) > .product-action > button').click()
cy.wait(2000)
cy.get('.search-keyword').type('ca').click()
cy.get('.product:visible').should('have.length', 4 )

cy.get('.products').as('productLocator')
cy.get('@productLocator').find('.product').should('have.length', 4)

cy.get('@productLocator').find('.product').eq(2).contains('ADD TO CART').click().then(function(){

    console.log('sf')
})



//cy.contains('ADD TO CART').click()

// Search by using item name & click on add to cart Using each()

cy.get('@productLocator').find('.product').each(($el, index, $list) => {

   const textVeg=$el.find('h4.product-name').text()
   if(textVeg.includes('cashews'))
    {
        $el.find('button').click()
   }
})
cy.get('.brand').should('have.text', 'GREENKART')
cy.get('.brand').then(function(logoelement)
{
    cy.log(logoelement.text())
})
cy.get('.cart-icon > img').click()
cy.contains('PROCEED TO CHECKOUT').click()
cy.contains('Place Order').click()


})

