// /* matched function
const products = [
    { id: 1, name: "iphone", price: 90000, },
    { id: 2, name: "deel inspiron laptop", price: 80000, },
    { id: 3, name: "xiaumi phone on night", price: 19000, },
    { id: 4, name: "macbook air", price: 120000, },
    { id: 5, name: "samsung Phone note 7", price: 20000, },
    { id: 6, name: "lenovo yoga laptop", price: 60000, },
    { id: 7, name: "phone one", price: 10000, }
];
function matchedProducts(products, search) {
    const matched = [];
    for (const product of products) {
        if (product.name.toLowerCase().includes(search.toLowerCase())) {
            matched.push(product)
        }
    }
    return matched;
};
const result = matchedProducts(products, "Phone");
console.log(result);

