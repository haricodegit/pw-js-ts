const { test, expect } = require('@playwright/test')

import exp from 'constants'
import generateTokenPayload from '../test-data/generateTokenPayload.json'

test('Get all the Booking Ids from the server and Delete them all Until ZERO', async( { request }) => {

    let finalCount = 1;

    while(finalCount != 0 ) {

    let allBookingIDsResponse = await request.get('/booking')
    expect(allBookingIDsResponse.ok()).toBeTruthy()
    let allBookingIDsResponseBody = await allBookingIDsResponse.json()

    let allBookIdsArray = []
    allBookIdsArray = allBookingIDsResponseBody

    console.log('Tobe--DeletedCount', allBookIdsArray.length);

    let TokenResponse = await request.post('/auth', {
        data: generateTokenPayload
    })

    expect(TokenResponse.ok()).toBeTruthy()
    let TokenResponseBody = await TokenResponse.json()
    let tokenNo = TokenResponseBody.token
    console.log("Outside tokenNo", tokenNo);

    let TotalDeletedCount = 0
    let i = 1

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
        // let temp = TotalDeletedCount
        
        if(TotalDeletedCount > i * 25) {
            allBookingIDsResponse = await request.get('/booking')
            expect(allBookingIDsResponse.ok()).toBeTruthy()
            console.log('calling get request and renew Token, after deleting 25 IDs', i * 25);
            i++
            
            TokenResponse = await request.post('/auth', {
                data: generateTokenPayload
            })
        
            expect(TokenResponse.ok()).toBeTruthy()
            TokenResponseBody = await TokenResponse.json()
            tokenNo = TokenResponseBody.token
            console.log('inside Token', tokenNo);
        }
        // break
    }

    console.log('TotalDeletedCount', TotalDeletedCount);

    console.log("============Next Set of Records==============");

    allBookingIDsResponse = await request.get('/booking')
    expect(allBookingIDsResponse.ok()).toBeTruthy()
    allBookingIDsResponseBody = await allBookingIDsResponse.json()

    // allBookIdsArray = []
    allBookIdsArray = allBookingIDsResponseBody

    // console.log('Tobe--DeletedCount1', allBookIdsArray.length);
    finalCount = allBookIdsArray.length
    console.log('finalCount Inside: ',finalCount);
    }
})