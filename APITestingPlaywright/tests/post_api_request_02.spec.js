const {test, expect} = require('@playwright/test')
const exp = require('constants')

const requestPayload = require('../test-data/createBookingPayload.json')

test('Create POST API request using static JSON file', async({request})  => {

    const postrequestAPIResponse = await request.post(`/booking`, {
        data: requestPayload
    })

    const postrequestAPIResponseBody = await postrequestAPIResponse.json()

    expect(postrequestAPIResponse.ok()).toBeTruthy()
    // expect(postRequestApiResponse.ok()).toBeTruthy()
    expect(postrequestAPIResponse.status()).toBe(200)

    expect(postrequestAPIResponseBody.booking).toHaveProperty('firstname','Micheal')
    expect(postrequestAPIResponseBody.booking.bookingdates).toHaveProperty('checkin','2024-09-01')

    console.log('postrequestAPIResponseBody', postrequestAPIResponseBody);

})