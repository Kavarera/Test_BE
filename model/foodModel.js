const { nanoid } = require("nanoid");

let foodList = [
    {
        "id": nanoid(16),
        "nama": "Burger",
        "harga": "Rp20.000"
    },
    {
        "id": nanoid(16),
        "nama": "Bakso",
        "harga": "Rp16.000"
    },
    {
        "id": nanoid(16),
        "nama": "Mie Ayam",
        "harga": "Rp40.000"
    },
    {
        "id": nanoid(16),
        "nama": "Somay",
        "harga": "Rp5.000"
    },
    {
        "id": nanoid(16),
        "nama": "Kebab",
        "harga": "Rp18.000"
    },
    {
        "id": nanoid(16),
        "nama": "Burito",
        "harga": "Rp22.000"
    },
    {
        "id": nanoid(16),
        "nama": "Pizza",
        "harga": "Rp30.000"
    },
];

module.exports = foodList;