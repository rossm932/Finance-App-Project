document.getElementById('currency-form').addEventListener('submit', function(event) {
    event.preventDefault();

const apiKey = 'https://www.amdoren.com/api/currency.php'; //Currency API Key
const fromCurrency = document.getElementById('from').value.toUpperCase();
const toCurrency = document.getElementById('to').value.toUpperCase();
const amount = document.getElementById('amount').value;

})