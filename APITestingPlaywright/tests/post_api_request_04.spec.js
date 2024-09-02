const { test, expect } = require('@playwright/test')

import { faker } from '@faker-js/faker'
// import { DateTime } from 'luxon'

import PostRequestJsonFile from '../test-data/postRequestDynamicBody.json'
// import { postRequestDynamicJSONBody } from '../test-data/postRequestDynamicBody.json'
import { stringFormat } from '../utils/common'
// const { stringFormat } = require('../utils/common')
import exp from 'constants'

test('Create POST API request using dynamic JSON file', async({ request }) => {

    const firstName = faker.person.firstName('female')
    const lastName = faker.person.lastName('female')
    const additionalNeeds = faker.animal.bird()

    const DynamicRequestJsonFile = stringFormat(JSON.stringify(PostRequestJsonFile), firstName, lastName, additionalNeeds)

    const postRequestResponse = await request.post('/booking', {
        data: JSON.parse(DynamicRequestJsonFile)
    })

    const postRequestResponseBody = await postRequestResponse.json()
    console.log('postRequestResponseBody', postRequestResponseBody)

    expect(postRequestResponse.ok()).toBeTruthy()
    expect(postRequestResponse.status()).toBe(200)
    
    expect(postRequestResponseBody.booking).toHaveProperty('firstname',firstName)
    expect(postRequestResponseBody.booking).toHaveProperty('lastname',lastName)
    expect(postRequestResponseBody.booking).toHaveProperty('additionalneeds',additionalNeeds)
})