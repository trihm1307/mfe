import faker from 'faker';

console.log("this is mfe1");
let products = '';
const mount = (el) => {
    for (let i = 0; i < 5; i++) {
        let itemName = faker.commerce.productName();
        products += `<div>${itemName}</div>`;
    }
    el.innerHTML = products;
}
const root = document.querySelector("#root");
if (root) {
    mount(root);
}

export { mount };
