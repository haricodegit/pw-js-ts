const { test, expect } = require('@playwright/test')

import exp from 'constants'
import generateTokenPayload from '../test-data/generateTokenPayload.json'
import { de } from '@faker-js/faker'

test('Get all the Booking Ids from the server and Delete them', async( {request }) => {

    const allBookingIDsResponse = await request.get('/booking')
    expect(allBookingIDsResponse.ok()).toBeTruthy()
    const allBookingIDsResponseBody = await allBookingIDsResponse.json()
    // console.log('allBookingIDsResponseBody', allBookingIDsResponseBody);

    let allBookIdsArray = []
    allBookIdsArray = allBookingIDsResponseBody
    // console.log('allBookIdsArray', allBookIdsArray);
    // console.log(allBookIdsArray[0].bookingid);

    const TokenResponse = await request.post('/auth', {
        data: generateTokenPayload
    })

    expect(TokenResponse.ok()).toBeTruthy()
    const TokenResponseBody = await TokenResponse.json()
    const tokenNo = TokenResponseBody.token

    let deleteCount = 0

    for(let x of allBookIdsArray) {
        // let y = x.bookingid
        // console.log('y',y);
        deleteCount++
    }
    console.log('deleteCount', deleteCount);
    console.log('array length method',allBookIdsArray.length);
})