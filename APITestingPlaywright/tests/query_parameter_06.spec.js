const { test, expect } = require('@playwright/test')

import exp from 'constants'
import postRequestDynamicJSONBody from '../test-data/postRequestDynamicBody.json'
import { stringFormat } from '../utils/common'
import { faker } from '@faker-js/faker'

test("Query Parameters in Playwright", async({ request }) => {

    const firstName = faker.person.firstName('female')
    const lastName = faker.person.lastName('female')
    const additionalNeeds = faker.company.name()

    // console.log(firstName, " ", lastName, " ", additionalNeeds);

    const postRequestDynamicBody = stringFormat(JSON.stringify(postRequestDynamicJSONBody), firstName, lastName, additionalNeeds)
    // const DynamicRequestJsonFile = stringFormat(JSON.stringify(PostRequestJsonFile), firstName, lastName, additionalNeeds)

    const postRequestAPIResponse = await request.post('/booking', {
        data: JSON.parse(postRequestDynamicBody)
    })

    expect(postRequestAPIResponse.ok()).toBeTruthy()
    expect(postRequestAPIResponse.status()).toBe(200)

    const postRequestAPIResponseBody = await postRequestAPIResponse.json()
    console.log(postRequestAPIResponseBody);

    expect(postRequestAPIResponseBody.booking).toHaveProperty('firstname',firstName)
    expect(postRequestAPIResponseBody.booking).toHaveProperty('lastname',lastName)
    expect(postRequestAPIResponseBody.booking).toHaveProperty('additionalneeds',additionalNeeds)

    const queryparamResponse = await request.get('/booking', {
        params: {
            "firstname": "Vicky"
        }
    })

    expect(queryparamResponse.ok()).toBeTruthy()
    expect(queryparamResponse.status()).toBe(200)

    const queryparamResponseBody = await queryparamResponse.json()
    console.log(queryparamResponseBody);

})