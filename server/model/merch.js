const mongoose = require("mongoose");

const MerchSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "{PATH} must be present"]
    },
    price: {
        type: Number,
        required: [true, "{PATH} must be present"]
    },
    description: {
        type: String,
        required: [true, "{PATH} must be present"]
    },
    imgurl: {
        type: String,
        required: [true, "{PATH} must be present"]
    },
    // color: {
    //     type: Array,
    //     required: [true, "{PATH} must be present"]
    // },
    // size: {

    // }
}, {timestamps:true})

// create schema and export
const Merch = mongoose.model("Merch", MerchSchema);
module.exports = Merch;