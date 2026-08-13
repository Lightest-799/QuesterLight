alert("Hello world!");

function calculateDiscount(price, quantity) {

    const total = price * quantity;

    if (total >= 50000) {
        return total - 5000;
    } else {
        return total;
    }
}

const result = calculateDiscount(15000, 4);

console.log(result);