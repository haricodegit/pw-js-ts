class LoginAPI {
    constructor(apiContext, loginpayload) {
        this.apiContexts = apiContext
        this.loginpayload = loginpayload
    }

    async gettoken() {
    const loginResponse = await this.apiContexts.post("https://rahulshettyacademy.com/api/ecom/auth/login", 
        {
            data: this.loginpayload
        })
    const loginResponseJson = await loginResponse.json()
    const token = loginResponseJson.token
    return token
    }
}

module.exports = { LoginAPI }