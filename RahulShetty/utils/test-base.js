const base = require('@playwright/test')

exports.customtest =  base.test.extend(
    {
        DataForOrders: {
            username: "resttassuredd@gmail.com",
            password: "Welcome@123",
            productName: "ZARA COAT 3",
            countryname: "United States",
            CreditCardNumber: "1111 2222 3333 4444",
            ExpriyMonth: "12",
            ExpiryDate: "31",
            CVV: "154",
            NameonCard: "Ramesh Kumar",
            Coupon: "rahulshettyacademy",
            successmsg: "Thankyou for the order."
          }
    }
)