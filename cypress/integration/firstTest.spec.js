describe.skip("First test suite", () => {

  it("First test", () => {

    cy.visit("/")

    cy.contains("Forms").click()
    cy.contains("Form layouts", {matchCase: false}).click()

    //by tagname
    cy.get("input")

    //by ID
    cy.get("#inputEmail1")

    //by class name
    cy.get(".input-full-width")

    //by attribute
    cy.get("[placeholder]")

    //by attribute value
    cy.get("[placeholder='Email']")

    //by class value
    cy.get("[class='input-full-width size-medium shape-rectangle']")

    //mix of selectors
    cy.get("input[placeholder='Email']")

    //mix 2
    cy.get("input[placeholder='Email'].input-full-width")

    //hycom approach
    // cy.get("[data-test='dataTest']")
    // cy.getByDataTest("dataTest")

  })

  it("Second test", () => {
    cy.visit("/")

    cy.contains("Forms").click()
    cy.contains("Form Layouts").click()

    cy.contains("Sign in").click()
    cy.contains("[status='warning']", "Sign in")
    cy.contains("[status='primary']", "Sign in")

    //parents() / find()
    cy.get("#inputEmail3")
      .parents("form")
      .find("input[type='checkbox']").check({force: true}).uncheck({force: true})

    cy.get("#inputEmail3")
      .parents("form")
      .find("button")
      .should("contain", "Sign in")

  })

  it("theny", () => {

    cy.visit("/")

    cy.contains("Forms").click()
    cy.contains("Form Layouts").click()

    cy.contains("nb-card", "Using the Grid").find("[for='inputEmail1']").should("contain", "Email")
    cy.contains("nb-card", "Using the Grid").find("[for='inputPassword2']").should("contain", "Password")

    //selenium
/*    webelement element = cy.contains("nb-card", "Using the Grid")

    element.find("[for='inputEmail1']").should("contain", "Email")
    element.find("[for='inputPassword2']").should("contain", "Password")*/

    cy.contains("nb-card", "Using the Grid").then(firstForm => {
      const email = firstForm.find("[for='inputEmail1']").text()
      expect(email).to.equal("Email")
      cy.wrap(firstForm).find("[for='inputEmail1']").invoke("text").should("equal", "Email")
    })


  })

  it("invoke property", () => {

    cy.visit("/")

    cy.contains("Forms").click()
    cy.contains("Datepicker").click()

    cy.contains("nb-card", "Common Datepicker").find("input").then(input => {
      cy.wrap(input).click()
      cy.contains("nb-calendar-day-cell", "11").click()
      cy.wrap(input).invoke("prop", "value").should("contain", "Oct 11, 2021")
    })
  })

  it.only("tabele", () => {

    cy.visit("/")

    cy.contains("Tables & Data").click()
    cy.contains("Smart Table").click()

    //edycja
    cy.get("tbody").contains("tr", "Barbara").then(tableRow => {
      cy.wrap(tableRow).find(".nb-edit").click()
      cy.wrap(tableRow).find("[placeholder='Age']").clear().type("22")
      cy.wrap(tableRow).find(".nb-checkmark").click()
      cy.wrap(tableRow).find("td").eq(6).should("contain", "22")
      // cy.wrap(tableRow).find("td").last().should("contain", "22")
    })

    //dodaniege.j
    cy.get(".nb-plus").click()
    cy.get("thead").find("tr").eq(2).then(tableRow => {
      cy.wrap(tableRow).find("[placeholder='First Name']").type("Wojtek")
      cy.wrap(tableRow).find("[placeholder='Last Name']").type("Nowak")
      cy.wrap(tableRow).find(".nb-checkmark").click()
    })
    cy.get("tbody tr").first().find("td").then(tableRow => {
      cy.wrap(tableRow).eq(2).should("contain", "Wojtek")
      cy.wrap(tableRow).eq(3).should("contain", "Nowak")
    })

  })
})

describe("Second test suite", () => {

  it("First test", () => {

  })
})
