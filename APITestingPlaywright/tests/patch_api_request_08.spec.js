const { test, expect } = require('@playwright/test')

import { faker } from '@faker-js/faker';
import { DateTime } from 'luxon';
import dynamicRequestPayload from '../test-data/postRequestDynamicBody.json'
import generateTokenPayload from '../test-data/generateTokenPayload.json'
import patchRequestPayload from '../test-data/patchRequestPayload.json';
import { stringFormat } from '../utils/common';
import exp from 'constants';

test('Patch API Request in Playwright ', async({ request }) => {

    // console.log('===Create Booking===');
    const firstName = faker.person.firstName('female')
    const lastName = faker.person.lastName('female')
    let totalPrice = faker.finance.amount({min: 1000, max: 5000, dec: 0})
    totalPrice = Number(totalPrice)
    const checkIn = DateTime.now().toFormat('yyyy-MM-dd')
    const checkOut = DateTime.now().plus({ days: 5}).toFormat('yyyy-MM-dd')
    const additionalNeeds = faker.color.rgb()

    const postRequestPayload = stringFormat(JSON.stringify(dynamicRequestPayload), firstName, lastName, totalPrice, checkIn, checkOut, additionalNeeds)

    const postRequestResponse = await request.post('/booking', {
        data: JSON.parse(postRequestPayload)
    })

    expect(postRequestResponse.ok()).toBeTruthy()
    expect(postRequestResponse.status()).toBe(200)

    const postRequestResponseBody = await postRequestResponse.json()
    // console.log('postRequestResponseBody', postRequestResponseBody);

    // console.log('===Get Booking Details===');

    const bId = postRequestResponseBody.bookingid

    const getRequestResponse = await request.get(`/booking/${bId}`)
    // console.log('getRequestResponse', getRequestResponse);

    expect(getRequestResponse.ok()).toBeTruthy()
    expect(getRequestResponse.status()).toBe(200)

    // console.log("getRequestResponseBody", await getRequestResponse.json());

    const generateTokenResponse = await request.post('/auth', {
        data: generateTokenPayload
    })

    expect(generateTokenResponse.ok()).toBeTruthy()
    expect(generateTokenResponse.status()).toBe(200)


    const generateTokenResponseBody = await generateTokenResponse.json()
    const TokenNo = generateTokenResponseBody.token
    // console.log('TokenNo, ', TokenNo);

    const patchRequestResponse = await request.patch(`booking/${TokenNo}`, {
        headers: {
            "Content-Type": "application/json",
            "Cookie": `token=${TokenNo}`
        },
        data: patchRequestPayload
    })

    // console.log('patchRequestResponse', patchRequestResponse);
    expect(patchRequestResponse.ok()).toBeTruthy()
    // expect(patchRequestResponse.statusText('Forbidden'))
    expect(patchRequestResponse.status()).toBe(200)

    const patchRequestResponseBody = await patchRequestResponse.json()
    // console.log('patchRequestResponseBody', patchRequestResponseBody);

});