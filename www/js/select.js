const Furniture = Object.freeze({
    Unfurnished: 0,
    "Half Furnished": 1,
    "TV is not included": 2,
    Furnished: 3,
});

const Type = Object.freeze({
    Apartment: 0,
    Penthouse: 1,
    House: 2,
    Villa: 3,
});

// Display messages in the console.
function log(message, type = "INFO") {
    console.log(`${new Date()} [${type}] ${message}`);
}