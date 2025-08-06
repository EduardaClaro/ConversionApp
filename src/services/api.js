const BASE_URL = "https://exchangerate-api.com/v4/lastest";

async function exchangeRateApi(fromCurrency) {

    try {
        const response = await fetch(`${BASE_URL}/${fromCurrency}`)
        const data = await response.json()
        return data
    } catch(err) {
        console.log(err)
    }

}
