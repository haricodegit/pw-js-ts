const { test, expect } = require('@playwright/test')

import { faker } from '@faker-js/faker'
import { DateTime } from 'luxon';
import { stringFormat } from '../utils/common'

import DynamicRequestJsonFile from '../test-data/postRequestDynamicBody.json';
import exp from 'constants';


test('Get API - Get Booking details', async({ request }) => {


    // console.log("======Creating Booking=========");

    const firstName = faker.person.firstName('female')
    const lastName = faker.person.lastName('female')
    let totalPrice = faker.finance.amount({min: 1000, max: 5000, dec: 0})
    totalPrice = Number(totalPrice)
    const checkIn = DateTime.now().toFormat('yyyy-MM-dd')
    const checkOut = DateTime.now().plus({ days: 5}).toFormat('yyyy-MM-dd')
    const additionalNeeds = faker.animal.dog()

    const postRequestDynamicBody = await stringFormat(JSON.stringify(DynamicRequestJsonFile), firstName, lastName, totalPrice, checkIn, checkOut, additionalNeeds)

    const postRequestResponse = await request.post('/booking', {
        data: JSON.parse(postRequestDynamicBody)
    })

    expect(postRequestResponse.ok()).toBeTruthy()
    expect(postRequestResponse.status()).toBe(200)

    const postRequestAPIResponseBody = await postRequestResponse.json()
    // console.log('postRequestAPIResponseBody', postRequestAPIResponseBody);

    expect(postRequestAPIResponseBody.booking).toHaveProperty('firstname',firstName)
    expect(postRequestAPIResponseBody.booking).toHaveProperty('lastname',lastName)
    expect(postRequestAPIResponseBody.booking).toHaveProperty('additionalneeds',additionalNeeds)

    // console.log("======GET Booking Details=========");

    const bId = await postRequestAPIResponseBody.bookingid
    const getRequestResponse = await request.get(`booking/${bId}`)

    expect(getRequestResponse.ok()).toBeTruthy()
    expect(getRequestResponse.status()).toBe(200)

    const getRequestResponseBody = await getRequestResponse.json()
    // console.log(getRequestResponseBody);

    // expect(getRequestResponseBody).toHaveProperty('bookingid',bId)
    expect(getRequestResponseBody).toHaveProperty('firstname',firstName)
    expect(getRequestResponseBody).toHaveProperty('lastname',lastName)
    expect(getRequestResponseBody).toHaveProperty('additionalneeds',additionalNeeds)
})