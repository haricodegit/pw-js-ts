const { test, expect } = require('@playwright/test')

import exp from 'constants'
import generateTokenPayload from '../test-data/generateTokenPayload.json'

test('Get all the Booking Ids from the server and Delete them', async( { request }) => {

    const allBookingIDsResponse = await request.get('/booking')
    expect(allBookingIDsResponse.ok()).toBeTruthy()
    const allBookingIDsResponseBody = await allBookingIDsResponse.json()

    let allBookIdsArray = []
    allBookIdsArray = allBookingIDsResponseBody

    console.log('Tobe--DeletedCount', allBookIdsArray.length);

    const TokenResponse = await request.post('/auth', {
        data: generateTokenPayload
    })

    expect(TokenResponse.ok()).toBeTruthy()
    const TokenResponseBody = await TokenResponse.json()
    const tokenNo = TokenResponseBody.token

    let TotalDeletedCount = 0

    for(let x of allBookIdsArray) {
        let deleteResponse = await request.delete(`/booking/${x.bookingid}`, {
            headers: {
                "Content-Type": "application/json",
                "Cookie": `token=${tokenNo}`
            }
        })

        expect(deleteResponse.statusText('Created'))
        expect(deleteResponse.status()).toBe(201)
        TotalDeletedCount++
        break
    }

    console.log('TotalDeletedCount', TotalDeletedCount);
})