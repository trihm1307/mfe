import faker from 'faker';
console.log("Loading mfe1");
const mount = (el) => {
    let products = '';
    for (let i = 0; i < 5; i++) {
        let itemName = faker.commerce.productName();
        products += `<div>${itemName}</div>`;
    }
    el.innerHTML ="<h1>Microservice 1</h1>";
    el.innerHTML += products;
}
export { mount };
