describe("Manage my booking", () => {
    beforeEach(() => {
        cy.setCookie("__kwc_agreed", "true")
    })
    it("Get booking token and reservation URL", () => {
        const flyFrom = "LHR" // London
        const flyTo = "DXB" // Dubai
        const departAfter = "2022-11-15T00:00"
        const holdBaggage = "1"
        const newOriginCity = "Vienna"
        const newDestinationCity = "Barcelona"
        // cy.request(
        //     "GET",
        //     `https://api.skypicker.com/flights?partner=cypress&fly_from=${flyFrom}&fly_to=${flyTo}&depart_after=${departAfter}&max_stopovers=0&adult_hold_bag=${holdBaggage}`
        // ).then((xhr) => {
        //     const bookingToken = xhr.body.data[0].booking_token
        //     cy.request(
        //         "POST",
        //         "https://qaa-be.platform-prod.skypicker.com/booking/create_booking?confirm=api_call",
        //         {
        //             booking_ancillaries: {
        //                 fare_type: "flexi",
        //                 guarantee: true,
        //                 service_package: "premium"
        //             },
        //             booking_passengers: [
        //                 {
        //                     birthday: "1988-04-21",
        //                     category: "adult",
        //                     document_expiry: "2025-12-31",
        //                     document_number: "12345678XY",
        //                     email: "test@kiwi.com",
        //                     name: "TEST",
        //                     nationality: "gb",
        //                     passenger_ancillaries: {
        //                         axa_insurance: "basic",
        //                         hand_baggage: true,
        //                         hold_baggage: true,
        //                         priority_boarding: false
        //                     },
        //                     phone: "+44 55555555",
        //                     surname: "TEST",
        //                     title: "mr"
        //                 }
        //             ],
        //             booking_token: bookingToken
        //         }
        //     )
        //     .then((xhr) => {
        // const reservationURL = xhr.body.mmb_link
        cy.visit(
            "https://www.kiwi.com/en/manage/293983635/4fd1463d-50d9-4fb3-8a8b-a089fcbf7cfc"
        )
        // cy.get('[data-test="FlightsChange"]', { timeout: 20000 })
        //     .scrollIntoView()
        //     .should("be.visible")
        //     .click()
        // // 3.
        // cy.contains("p", "Pay only the price difference").should(
        //     "be.visible"
        // )
        // //4.
        // cy.get('[data-test="search-origin"]')
        //     .first()
        //     .type(newOriginCity)
        // cy.get(".ModalSimplePicker")
        //     .eq(0)
        //     .should("contain", newOriginCity)
        //     .click()

        // cy.get('[data-test="search-destination"]')
        //     .first()
        //     .type(newDestinationCity)
        // cy.get(".ModalSimplePicker")
        //     .eq(0)
        //     .should("contain", newDestinationCity)
        //     .click()
        // cy.intercept(
        //     "GET",
        //     "https://booking-api.skypicker.com/mmb/v1/bookings/**"
        // ).as("modifyBooking")
        // cy.get('[data-test="ChangeAlternativesSearchForm-button"]')
        //     .should("be.visible")
        //     .click()
        // cy.wait("@modifyBooking")
        //     .its("response.statusCode")
        //     .should("eq", 200)
        // //5.

        // cy.get('[data-test="BookingJourneyChange-alternative-list"]')
        //     .find('[data-test="Journey-toggle"]')
        //     .eq(0)
        //     .contains('[data-test="journeyInfo-price-tooltip"]', "FREE")
        //     .click()

        // //6.
        // cy.get('[data-test="ItineraryGuarantee"]')
        //     .scrollIntoView()
        //     .should("be.visible")
        // //7.
        // cy.get(
        //     '[data-test="JourneyBookingButton-Itinerary-bookingBtn"]'
        // ).scrollIntoView().click()
        // //8.
        // cy.get('[data-test="changeConfirmation-NewItinerary"]').within(
        //     () => {
        //         cy.contains(newDestinationCity).should("be.visible")
        //         cy.contains(newOriginCity).should("be.visible")
        //     }
        // )
        // cy.get('[data-test="ChangeConfirmation-CheckoutBtn"]')
        //     .scrollIntoView()
        //     .should("be.visible")
        //     .and("be.disabled")

        // cy.get('[data-test="changeConfirmation-LegalCheckbox"]')
        //     .scrollIntoView()
        //     .click({ force: true })
        // cy.get('[data-test="ChangeConfirmation-CheckoutBtn"]').click()
        // cy.get('[data-test="BookingJourneyChange"]').within(() => {
        //     cy.contains("h2", "Thanks for your request").should(
        //         "be.visible"
        //     )
        //     cy.contains(
        //         "We'll change your trip and email you as soon as it's done."
        //     ).should("be.visible")
        //     cy.contains("button", "Return to your trip")
        //         .should("be.visible")
        //         .click()
        // })
        cy.get('[data-test="processing"]').should("be.visible").click()
        cy.contains(
            'div[role="tooltip"]',
            "We're processing your requested itinerary change and we'll let you know as soon as it's done."
        ).should("be.visible")
        cy.get('[data-test^="BoardingPasses-section-"]').each(() => {
            cy.get(
                '[data-test="BoardingPassHeaderBadge-ground_processing"]'
            ).should("be.visible")
        })
        cy.get('[data-test="processing"]').should("be.visible").click()
        cy.contains(
            'div[role="tooltip"]',
            "We're processing your requested itinerary change and we'll let you know as soon as it's done."
        ).should("be.visible")
        cy.get('[data-test="Journey-toggle"]').click()
    })
})
//     })
// })
