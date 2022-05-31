export class SmartTablePage {

  updateAgeByFirstName(firstName, age) {
    cy.get("tbody").contains("tr", firstName).then(tableRow => {
      cy.wrap(tableRow).find(".nb-edit").click()
      cy.wrap(tableRow).find("[placeholder='Age']").clear().type(age)
      cy.wrap(tableRow).find(".nb-checkmark").click()
      cy.wrap(tableRow).find("td").eq(6).should("contain", age)
      // cy.wrap(tableRow).find("td").last().should("contain", "22")
    })
  }

  addNewRecordWithFirstAndLastName(firstName, lastName) {
    cy.get(".nb-plus").click()
    cy.get("thead").find("tr").eq(2).then(tableRow => {
      cy.wrap(tableRow).find("[placeholder='First Name']").type(firstName)
      cy.wrap(tableRow).find("[placeholder='Last Name']").type(lastName)
      cy.wrap(tableRow).find(".nb-checkmark").click()
    })
    cy.get("tbody tr").first().find("td").then(tableRow => {
      cy.wrap(tableRow).eq(2).should("contain", firstName)
      cy.wrap(tableRow).eq(3).should("contain", lastName)
    })
  }

}

export const smartTablePage = new SmartTablePage()
