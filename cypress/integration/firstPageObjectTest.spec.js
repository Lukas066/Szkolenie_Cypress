import {navigationPage} from "../support/pages/navigationPage";
import {smartTablePage} from "../support/pages/smartTablePage";

describe("first test with page object", () => {

  beforeEach("open app", () => {
    cy.openHomePage()
  })

  it("verify navigation", () => {
    navigationPage.formLayoutsPage()
    navigationPage.datepickerPage()
    navigationPage.smartTablePage()
  })

  it("navigate to smart table, add and edit user", () => {
    navigationPage.smartTablePage()
    smartTablePage.addNewRecordWithFirstAndLastName("Marek", "Kowalski")
    smartTablePage.updateAgeByFirstName("Barbara", "33")
  })

})
