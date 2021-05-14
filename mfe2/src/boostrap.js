import faker from 'faker';
console.log("Loading mfe2");
const mountBrand = (el) => {
    let brand = '';
    for (let i = 0; i < 5; i++) {
        let itemName = faker.vehicle.manufacturer();
        brand += `<div>${itemName}</div>`;
    }
    el.innerHTML ="<h1>Microservice 2</h1>";
    el.innerHTML += brand;
}
export { mountBrand };
