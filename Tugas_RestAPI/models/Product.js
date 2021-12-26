import mongoose from "mongoose";

// Membuat Schema
const Product = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    }
});

export default mongoose.model('Products', Product);