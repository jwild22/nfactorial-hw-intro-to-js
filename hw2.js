let restaraunt = 'Liitle Brazil';
const PLAYER_NUMBER = 22;
let shop = {
    name: 'Magnum',
    isOpen: true,
}

shop['quantity'] = 50;
shop['competitors'] = undefined;

let vehicle= {};
vehicle.brandName = 'BMW'
vehicle.model = 'X5';
vehicle.model = 'M1';
delete vehicle.model;

let salaries = {
	Aroo: 100,
	Dalida: 160,
	Samat: 130
}

let total = 0;

for (let name in salaries) {
    total += salaries[name];
}

console.log(total)