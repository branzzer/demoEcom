const Product = require("../models/product")

const createProduct = async (req, res) => {

    const product = await Product.create(req.body);

    try {
        const doc = await product.save()
        res.status(201).json({ msg: "product created", product: doc })
    } catch (error) {

        res.status(400).json({ error: error })
    }


}


const fetchAllProducts = async (req, res) => {

    let { brand, category, title, select, _sort, _order, page, limit } = req.query

    const queryObject = {}

    if (category) {
        queryObject.category = category
    }

    if (brand) {
        queryObject.brand = brand
    }

    if (title) {
        queryObject.title = { $regex: title, $options: 'i' }
    }

    let query = Product.find(queryObject)
    // for single fieds
    if (_sort && _order) {

        query = query.sort({ [_sort]: _order })
    }
    // for multiple fields
    if (_sort) {
        let sortFix = _sort.split(",").join(" ");
        query = query.sort(sortFix)
    }

    if (select) {
        let selectFix = select.split(',').join(" ")
        query = query.select(selectFix)
    }

    page = page || 1
    limit = limit || 3
    let skip = (page - 1) * limit;
    query = query.skip(skip).limit(limit)


    try {
        const doc = await query
        res.status(200).json(doc);
    } catch (error) {
        res.status(400).json({ error: error })
    }

}


const fetchProductById = async (req, res) => {
    const id = req.params.id
    const product = await Product.findById(id)

    try {
        res.status(200).json(product);
    } catch (error) {
        res.status(400).json({ error: error })
    }


}
const updateProduct = async (req, res) => {
    const id = req.params.id


    try {
        const doc = await Product.findByIdAndUpdate(id, req.body, { new: true })

        return res.status(200).json(doc);
    } catch (error) {
        res.status(400).json({ error: error })

    }




}


const deleteProductById = async (req, res) => {

    const id = req.params.id

    try {

        const doc = await Product.findByIdAndDelete(id);
        res.status(200).json(doc);

    } catch (error) {
        res.status(400).json({ error: error })
    }
}


module.exports = {
    createProduct,
    fetchAllProducts,
    fetchProductById,
    deleteProductById,
    updateProduct

}