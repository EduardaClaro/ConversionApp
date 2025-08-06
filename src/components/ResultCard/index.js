import { Text, View } from "react-native";
import { styles } from "./styles";

export function ResultCard({
    exchangeRate,
    result,
    fromCurrency,
    toCurrency,
    currencies
}) {

    if(!result || !exchangeRate) return null

    const toSymbol = currencies.find( currency => currency.code === toCurrency).symbol

    return (
        <View style={styles.container}>
            <Text style={styles.label}>Resultado:</Text>
            <Text>
               {toSymbol} {result}
            </Text>
            <Text>
                Taxa de Câmbio 1: {fromCurrency} = {exchangeRate.toFixed(4)} {toCurrency}
            </Text>
        </View>
    )
}