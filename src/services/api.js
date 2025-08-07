const BASE_URL = "https://v6.exchangerate-api.com/v6/a9805fe5c819e203c733c875/latest"; // Substitua SUA-CHAVE-API pela sua chave válida

export async function exchangeRateApi(fromCurrency) {
    try {
        const response = await fetch(`${BASE_URL}/${fromCurrency}`);
        const data = await response.json();
        return data;
    } catch (err) {
        console.log(err);
    }
}