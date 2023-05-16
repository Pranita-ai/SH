///<refernces types="cypress>>>"/>

import { skip } from "rxjs"

beforeEach(function(){  // beforeEach outside describe block

    
    cy.visit("https://rahulshettyacademy.com/AutomationPractice/")

})

describe('All TC', function(){



it.skip("Test1", function(){





    cy.get('#checkBoxOption1').check().should('be.checked').and('have.value','option1')
   // cy.get('#checkBoxOption1').uncheck().should('not.be.checked')
    cy.get('input[type="checkbox"]').check(['option2','option3'])
})

//Static Dropdown
it("Static Dropdown", function(){

    cy.get('select').select('option2').should('have.value','option2')

})
// Dynamic Dropdown
it("Dynamic Dropdown", function(){

cy.get("#autocomplete").click().type("India")

cy.get('.ui-menu-item').each(($e1, index, $list) => {

    if($e1.text()==="India"){

        $e1.click()
    }
   
})



})



// How to work on visible & unvisible object on page
it.skip("Visible & invisible object on page", function(){

    cy.get('#displayed-text').should('be.visible')
    cy.get('#hide-textbox').click()
    cy.get('#displayed-text').should('not.be.visible')
    cy.get('#show-textbox').click()
    cy.get('#displayed-text').should('be.visible')
})


//Radio Buttons

it("Radio buttons", function(){

    cy.get('input[value="radio1"]').check().should('be.checked').and('have.value','radio1')
})

})