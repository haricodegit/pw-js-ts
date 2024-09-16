// Load Playwright module
const {test, expect} = require('@playwright/test');
const exp = require('constants');

const { insertSingleDocument, fetchDocuments } = require('../utils/mongoUtils')

// import { test, expect } from '@playwright/test';
// import exp from 'constants';

// Write a test
test('Create POST API Request using static request body',async({request}) => {

    // Create POST API request
    const postRequestApiResponse = await request.post('/booking',{
        data: {
            "firstname": "Tom",
            "lastname": "Dio",
            "totalprice": 2000,
            "depositpaid": true,
            "bookingdates": {
                "checkin": "2024-08-31",
                "checkout": "2024-08-31"
            },
            "additionalneeds": "super bowls"
        }
    })

    const postRequestApiResponseBody = await postRequestApiResponse.json()
    // console.log('postRequestApiResponseBody',postRequestApiResponseBody);
    await insertSingleDocument(postRequestApiResponseBody);
    // console.log('postRequestApiResponse', postRequestApiResponse);

// Validate status code
expect(postRequestApiResponse.ok()).toBeTruthy()
expect(postRequestApiResponse.status()).toBe(200)

// Validate JSON API response
expect(postRequestApiResponseBody.booking).toHaveProperty('firstname','Tom')
expect(postRequestApiResponseBody.booking).toHaveProperty('lastname','Dio')

// Validate Nested JSON objects
expect(postRequestApiResponseBody.booking.bookingdates).toHaveProperty('checkin','2024-08-31')
expect(postRequestApiResponseBody.booking.bookingdates).toHaveProperty('checkout','2024-08-31')
})