const { test, expect } = require('@playwright/test');

const { insertManyDocuments } = require('../utils/mongoUtils')

test('Get all the booking IDs and store in Mongo DB', async({ request }) => {

    const getBookingIDsResponse = await request.get('/booking');
    expect(getBookingIDsResponse.ok()).toBeTruthy();
    expect(getBookingIDsResponse.status()).toBe(200);

    const getBookingIDsResponseBody = await getBookingIDsResponse.json();
    // let BSONdocument = JSON.stringify(getBookingIDsResponseBody);
    // BSONdocument = JSON.parse(BSONdocument);
    let arry = [];
    arry = getBookingIDsResponseBody;
    console.log("Length",arry.length);
    await insertManyDocuments(getBookingIDsResponseBody);
});