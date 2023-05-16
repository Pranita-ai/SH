///<refernces types="cypress>>>"/>

import { skip } from "rxjs"

beforeEach(function(){  // beforeEach outside describe block

    
    cy.visit("https://rahulshettyacademy.com/AutomationPractice/")

})

it.skip('Alert', function(){


    cy.get("#alertbtn").click()
    cy.get('#confirmbtn').click()
    
    //window Alert
    cy.on('window:alert',(str) =>
    {
        //Mocha
       expect(str).to.equal('Hello , share this practice page and share your knowledge')
    })
    
})
it('Invoke',function(){

    //cy.get('#opentab').click()
   cy.get('#opentab').invoke('removeAttr','target').click()
   
   //Navigation
   cy.go('back')
   cy.url().should('include','https://rahulshettyacademy.com/')
})