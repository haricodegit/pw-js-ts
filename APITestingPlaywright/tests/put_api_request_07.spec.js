const { test, expect } = require('@playwright/test')

import postRequestDynamicPayload from '../test-data/postRequestDynamicBody.json'
import putRequestPayload from '../test-data/putRequestBody.json'
import generateTokenPayload from '../test-data/generateTokenPayload.json'

import { faker } from '@faker-js/faker'
import { stringFormat } from '../utils/common'
import exp from 'constants'

test('Create PUT API request in Playwright', async( { request } ) => {

    console.log("==Create Booking==");
    const firstName = faker.person.firstName('female')
    const lastName = faker.person.lastName('female')
    const additionalNeeds = faker.airline.airport()

    const CreateBookingPayload = stringFormat(JSON.stringify(postRequestDynamicPayload), firstName, lastName, additionalNeeds)

    const CreateBookingPayResponse = await request.post('/booking', {
        data: JSON.parse(CreateBookingPayload)
    })

    expect(CreateBookingPayResponse.ok()).toBeTruthy()

    const CreateBookingPayResponseBody = await CreateBookingPayResponse.json()
    console.log(CreateBookingPayResponseBody);

    console.log("==GET Booking Details==");

    const bId = CreateBookingPayResponseBody.bookingid
    console.log('bId', bId);

    const generateTokenResponse = await request.post('/auth', {
        data: generateTokenPayload
    })

    expect(generateTokenResponse.ok()).toBeTruthy()

    const generateTokenResponseBody = await generateTokenResponse.json()
    const tokenNo = generateTokenResponseBody.token
    console.log('tokenNo', tokenNo);

    const putRequestResponse = await request.put(`/booking/${bId}`, {
        headers: {
            "Content-Type": "application/json",
            "Cookie": `token=${tokenNo}`
        },
        data: putRequestPayload
    })

    expect(putRequestResponse.ok()).toBeTruthy()

    const putRequestResponseBody = await putRequestResponse.json()
    console.log(putRequestResponseBody);

})