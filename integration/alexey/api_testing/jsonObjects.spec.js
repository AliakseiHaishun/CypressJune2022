/// <reference types="cypress" />


describe('JSOM objects', () => {

    it('JSIN Objects', () => {
        cy.visit('http://localhost:3000')

        const simpleObject = { "key": "value", "key2": "value2" }

        const simpleArrayOfValues = ["one", "two", "three"];
    
        const arrayOfObjects = [{ "key": "value" }, { "key2": "value2" }, { "key3": "value2" }];
    
        const typesOfData = { "string": "this is string", "value": 10 }
    
        const mix = {
            "firstName": "Alexey",
            "LastName": "Haishun",
            "Age": 26,
            "Students": [
                {
                    "firstName": "Anna",
                    "LastName": "Ivanova",
                },
                {
                    "firstName": "Andrew",
                    "LastName": "Jhones",
                }
            ]
        }
    
        console.log(simpleObject.key2);
        console.log(simpleObject["key2"]);
        console.log(simpleArrayOfValues[1]);
        console.log(arrayOfObjects[2].key3);
        console.log(mix.Students[0].firstName);
        
    })

})