const cars = require("../lib/data/cars.json");
const { Promise } = require("bluebird");

class CarController {

    getCars() {
        return Promise.resolve(cars);
    }

    getCarByColor(color) {
        const carFound = cars.find(u => u.color === color);
        return Promise.resolve(carFound);
    }
}

module.exports = new CarController();