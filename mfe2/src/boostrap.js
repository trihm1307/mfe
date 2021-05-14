import faker from 'faker';
console.log("Loading mfe1");
let products = '';
const mount = (el) => {
    for (let i = 0; i < 5; i++) {
        let itemName = faker.vehicle.manufacturer();
        products += `<div>${itemName}</div>`;
    }
    el.innerHTML ="<h1>Microservice 2</h1>";
    el.innerHTML += products;
}
export { mount };
