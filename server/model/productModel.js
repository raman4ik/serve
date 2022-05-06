const mongoose = require('mongoose')

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Please Enter Product Name"],
        trim: true
    },
    description: {
        type: String,
        required: [true, "Please Enter Product Description"]
    },
    price: {
        type: Number,
        required: [true, "Please Enter Product Price"]
    },
    images: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: [true, "Please Enter Product Category"]
    },
    category_slug: {
        type: String,
        required: [true, "Please Enter Category Slug"]
    },
    slug: {
        type: String,
        required: [true, "Please Enter Product Slug"]
    },
    data: {
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model("Product", productSchema)