let car = {
    type: "Sedan",
    model: "Corolla",
    color: "Blue"
};

console.log(typeof car);  // Output: "object"

car.type = "Toyota";
console.log(car);  // Output: { type: "Toyota", model: "Corolla", color: "Blue" }

car.wheels = 4;
console.log(car);  // Output: { type: "Toyota", model: "Corolla", color: "Blue", wheels: 4 }