const {test, expect} = require('@playwright/test')
const exp = require('constants')

import { faker } from '@faker-js/faker'
import { DateTime } from 'luxon'

test('Create POST API request using dynamic request body', async({request}) => {

    const firstName = faker.person.firstName('male')
    const lastName = faker.person.lastName('male')
    // const totalPrice = faker.finance.amount({min: 1000, max: 5000, dec: 2, symbol: "$", autoFormat: true})
    let totalPrice = faker.finance.amount({min: 1000, max: 5000, dec: 0})
    totalPrice = Number(totalPrice)
    // console.log(typeof totalPrice);
    // totalPrice = totalPrice.toString()
    // console.log('totalPrice----------', totalPrice);
    // faker.date.
    const checkIn = DateTime.now().toFormat('yyyy-MM-dd')
    const checkOut = DateTime.now().plus({ days: 5}).toFormat('yyyy-MM-dd')

    const postRequestAPIResponse = await request.post(`/booking`, {
        data: {
            "firstname": firstName,
            "lastname": lastName,
            "totalprice": totalPrice,
            "depositpaid": true,
            "bookingdates": {
                "checkin": checkIn,
                "checkout": checkOut
            },
            "additionalneeds": "Learning API testing"
        }
    })

    const postRequestAPIResponseBody = await postRequestAPIResponse.json()

    expect(postRequestAPIResponse.ok()).toBeTruthy()
    expect(postRequestAPIResponse.status()).toBe(200)

    // console.log("postRequestAPIResponseBody", postRequestAPIResponseBody);

    expect(postRequestAPIResponseBody.booking).toHaveProperty('firstname',firstName)
    expect(postRequestAPIResponseBody.booking).toHaveProperty('lastname',lastName)
    expect(postRequestAPIResponseBody.booking).toHaveProperty('totalprice',totalPrice)

    expect(postRequestAPIResponseBody.booking.bookingdates).toHaveProperty('checkin',checkIn)
    expect(postRequestAPIResponseBody.booking.bookingdates).toHaveProperty('checkout',checkOut)
})

    