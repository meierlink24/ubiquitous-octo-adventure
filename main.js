
let cartCount = 0;

document.querySelectorAll('.add-to-cart').forEach(button => {
    button.addEventListener('click', () => {
        cartCount++;
        document.getElementById('cart-count').innerText = cartCount;
        alert('Item added to cart!');
    });
});

// Currency conversion logic (example)
const currencyConverter = (price, currency) => {
    const conversionRates = {
        'USD': 1,
        'EUR': 0.85,
        'GBP': 0.75
    };
    return (price * conversionRates[currency]).toFixed(2);
};

// Example of changing currency based on user region
const userCurrency = 'EUR'; // This would be dynamically determined
document.querySelectorAll('.price').forEach(priceElement => {
    const priceInUSD = parseFloat(priceElement.getAttribute('data-price'));
    priceElement.innerText = `Price: €${currencyConverter(priceInUSD, userCurrency)}`;
});