const { Schema } = require("mongoose");

const PositionsSchema = new Schema({
    product: String,
    qty : String,
    name: String,
    avg: Number,
    price: Number,
    net: String,
    day: String,
    isLoss: Boolean,
});

module.exports = {PositionsSchema};