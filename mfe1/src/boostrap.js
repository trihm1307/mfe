import faker from 'faker';
console.log("Loading mfe1");
let products = '';
const mount = (el) => {
    for (let i = 0; i < 5; i++) {
        let itemName = faker.commerce.productName();
        products += `<div>${itemName}</div>`;
    }
    el.innerHTML = products;
}
export { mount };
