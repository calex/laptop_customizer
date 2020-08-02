function returnInUSCurrencyFormat(number) {
    const USCurrencyFormat = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD'
    });

    return USCurrencyFormat.format(number);
}

export default returnInUSCurrencyFormat;