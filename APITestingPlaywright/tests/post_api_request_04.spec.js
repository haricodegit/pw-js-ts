const { test, expect } = require('@playwright/test')

import { faker } from '@faker-js/faker'
import { DateTime } from 'luxon'
const { insertSingleDocument } = require('../utils/mongoUtils')

import PostRequestJsonFile from '../test-data/postRequestDynamicBody.json'
// import { postRequestDynamicJSONBody } from '../test-data/postRequestDynamicBody.json'
import { stringFormat } from '../utils/common'
// const { stringFormat } = require('../utils/common')
import exp from 'constants'

test('Create POST API request using dynamic JSON file', async({ request }) => {

    for(let i =0; i<1000; i++) {
    const firstName = faker.person.firstName('female')
    const lastName = faker.person.lastName('female')
    let totalPrice = faker.finance.amount({min: 1000, max: 5000, dec: 0})
    totalPrice = Number(totalPrice)
    const checkIn = DateTime.now().toFormat('yyyy-MM-dd')
    const checkOut = DateTime.now().plus({ days: 5}).toFormat('yyyy-MM-dd')
    const additionalNeeds = faker.animal.bird()

    const DynamicRequestJsonFile = stringFormat(JSON.stringify(PostRequestJsonFile), firstName, lastName, totalPrice, checkIn, checkOut, additionalNeeds)

    const postRequestResponse = await request.post('/booking', {
        data: JSON.parse(DynamicRequestJsonFile)
    })

    const postRequestResponseBody = await postRequestResponse.json()
    // console.log('postRequestResponseBody', postRequestResponseBody)

    expect(postRequestResponse.ok()).toBeTruthy()
    expect(postRequestResponse.status()).toBe(200)
    
    expect(postRequestResponseBody.booking).toHaveProperty('firstname',firstName)
    expect(postRequestResponseBody.booking).toHaveProperty('lastname',lastName)
    expect(postRequestResponseBody.booking).toHaveProperty('additionalneeds',additionalNeeds)

    await insertSingleDocument(postRequestResponseBody);
}
console.log('Completed 1000 bookings');
})