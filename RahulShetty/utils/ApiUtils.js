const exp = require("constants")

class ApiUtils
{

    constructor(apiContext, loginPayload) 
    {
        this.apiContexts = apiContext
        this.loginPayload = loginPayload
    }

    async gettoken() {
        const loginResponse = await this.apiContexts.post("https://rahulshettyacademy.com/api/ecom/auth/login", 
        {
            data: this.loginPayload
        })

    const loginResponseJson = await loginResponse.json()
    const token = loginResponseJson.token
    return token
    }

    async createOrder(createOrderPayload) 
    {
        let response = {}
        response.token = await this.gettoken()
        const orderResponse = await this.apiContexts.post("https://rahulshettyacademy.com/api/ecom/order/create-order",
        {
            data: createOrderPayload,
            headers: 
            {
                'Authorization': response.token,
                'Content-Type' : 'application/json'
            },
        })
        const orderResponseJson = await orderResponse.json()
        const OrderID = orderResponseJson.orders[0]
        response.OrderID = OrderID;
        return response
    }
}

module.exports = {ApiUtils}