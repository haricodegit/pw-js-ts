const { test } = require('@playwright/test');
const { fetchDocuments } = require('../utils/mongoUtils');

test('API Retrive data from MongoDB', async() => {
    // let query = booking.{firstname: "Cheryl"}
    let query = {"booking.firstname": "Cheryl"}
    const result = await fetchDocuments(query);
    // console.log('Documents fetched', result);
});
