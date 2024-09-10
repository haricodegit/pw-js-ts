const { test, expect } = require('@playwright/test')

import exp from 'constants'
import generateTokenPayload from '../test-data/generateTokenPayload.json'

import { faker } from '@faker-js/faker'
import PostRequestJsonFile from '../test-data/postRequestDynamicBody.json'
import { stringFormat } from '../utils/common'
import { setTimeout } from 'timers'

test('Get all the Booking Ids from the server and Delete them all Until ZERO', async( { request }) => {
    
    function sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
      }

    let finalCount = 200;

    while(finalCount > 100 ) {

    let allBookingIDsResponse = await request.get('/booking')
    expect(allBookingIDsResponse.ok()).toBeTruthy()
    let allBookingIDsResponseBody = await allBookingIDsResponse.json()

    let allBookIdsArray = []
    allBookIdsArray = allBookingIDsResponseBody

    // console.log('Tobe--DeletedCount', allBookIdsArray.length);

    let limitArray = allBookIdsArray.slice(0,500)
    console.log('Tobe--DeletedCount', limitArray.length);

    let TokenResponse = await request.post('/auth', {
        data: generateTokenPayload
    })

    expect(TokenResponse.ok()).toBeTruthy()
    let TokenResponseBody = await TokenResponse.json()
    let tokenNo = TokenResponseBody.token
    // console.log("Outside tokenNo", tokenNo);

    let TotalDeletedCount = 0
    let i = 1

    for(let x of limitArray) {
        let deleteResponse = await request.delete(`/booking/${x.bookingid}`, {
            headers: {
                "Content-Type": "application/json",
                "Cookie": `token=${tokenNo}`
            }
        })

        expect.soft(deleteResponse.statusText('Created'))
        expect.soft(deleteResponse.status()).toBe(201)
        // console.log('deleteResponse: ',deleteResponse.ok());
        TotalDeletedCount++

        if(deleteResponse.ok() === false) {
            console.log('Not Okay After: ',TotalDeletedCount-1);
            await sleep(20000).then(() => { console.log('waited for 20 secs');});
            for(let i = 0; i<10; i++) {
                const firstName = faker.person.firstName('female')
                const lastName = faker.person.lastName('female')
                const additionalNeeds = faker.animal.bird()

                const DynamicRequestJsonFile = stringFormat(JSON.stringify(PostRequestJsonFile), firstName, lastName, additionalNeeds)

                const postRequestResponse = await request.post('/booking', {
                    data: JSON.parse(DynamicRequestJsonFile)
                })

                // const postRequestResponseBody = await postRequestResponse.json()
                // console.log('postRequestResponseBody', postRequestResponseBody)

                expect(postRequestResponse.ok()).toBeTruthy()
                expect(postRequestResponse.status()).toBe(200)

            }
            console.log('10 new bookings are newly created');
        }
        
        if(TotalDeletedCount > i * 250) {
            console.log('renew Token, after deleting 250 IDs', i * 250);
            await sleep(10000).then(() => { console.log('TotalDeletedCount - waited for 10 secs');});
            console.log('Check wait time ???');
            i++
            
            TokenResponse = await request.post('/auth', {
                data: generateTokenPayload
            })
        
            expect(TokenResponse.ok()).toBeTruthy()
            TokenResponseBody = await TokenResponse.json()
            tokenNo = TokenResponseBody.token
            // console.log('inside Token', tokenNo);
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