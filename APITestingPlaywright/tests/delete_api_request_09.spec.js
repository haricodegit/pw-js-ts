const { test, expect } = require('@playwright/test')

import postRequestPayload from '../test-data/postRequestDynamicBody.json'
import generateTokenPayload from '../test-data/generateTokenPayload.json'

import { faker } from '@faker-js/faker'
import { DateTime } from 'luxon'
import { stringFormat } from '../utils/common'
import exp from 'constants'
import { type } from 'os'

test('Delete API request in Playwright', async( { request }) => {

    // console.log('===Create Booking===');
    const firstName = faker.person.firstName('female')
    const lastName = faker.person.lastName('female')
    let totalPrice = faker.finance.amount({min: 1000, max: 5000, dec: 0})
    totalPrice = Number(totalPrice)
    const checkIn = DateTime.now().toFormat('yyyy-MM-dd')
    const checkOut = DateTime.now().plus({ days: 5}).toFormat('yyyy-MM-dd')
    const additionalNeeds = faker.company.name()

    const postRequestPayloadFinal = stringFormat(JSON.stringify(postRequestPayload), firstName, lastName, totalPrice, checkIn, checkOut, additionalNeeds)

    const postRequestResponse = await request.post('/booking', {
        data: JSON.parse(postRequestPayloadFinal)
    })

    expect(postRequestResponse.ok()).toBeTruthy()
    expect(postRequestResponse.status()).toBe(200)

    const postRequestResponseBody = await postRequestResponse.json()
    // console.log('postRequestResponseBody', postRequestResponseBody);

    // console.log('===GET Booking Details===');

    const bId = postRequestResponseBody.bookingid
    // console.log('typeof bId', typeof bId);

    const getRequestResponse = await request.get(`/booking/${bId}`)

    expect(getRequestResponse.ok()).toBeTruthy()
    expect(getRequestResponse.status()).toBe(200)

    const getRequestResponseBody = await getRequestResponse.json()
    // console.log('getRequestResponseBody', getRequestResponseBody);

    // console.log('DELETE API Request');

    const generateTokenResponse = await request.post('/auth', {
        data: generateTokenPayload
    })

    expect(generateTokenResponse.ok()).toBeTruthy()
    expect(generateTokenResponse.status()).toBe(200)

    const generateTokenResponseBody = await generateTokenResponse.json()
    const tokenNo = generateTokenResponseBody.token

    const deleteRequestResponse = await request.delete(`/booking/${bId}`, {
        headers: {
            "Content-Type": "application/json",
            "Cookie": `token=${tokenNo}`
        }
    })

    // console.log('deleteRequestResponse', deleteRequestResponse);

    expect(deleteRequestResponse.statusText('Created'))
    expect(deleteRequestResponse.status()).toBe(201)

    // const deleteRequestResponseBody = await deleteRequestResponse.json()
    // console.log(deleteRequestResponseBody);

    // console.log('Verify Deleted Booking is not available in the Application server');

    const VerifygetRequestResponse = await request.get(`/booking/${bId}`)

    expect(VerifygetRequestResponse.statusText('Not Found'))
    expect(VerifygetRequestResponse.status()).toBe(404)

    // const VerifygetRequestResponseBody = await VerifygetRequestResponse.json()
    // console.log('VerifygetRequestResponseBody', VerifygetRequestResponseBody);
})