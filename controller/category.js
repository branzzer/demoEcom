const Category = require("../models/category")

const addNewCategory = async (req, res) => {
    const { label, value } = req.body

    try {

        const doc = await Category.create({ label, value });
        return res.status(201).json({ msg: "category created successfuly", doc: doc })

    } catch (error) {
        console.log(`error at addNewCategory ERROR =>${error}`)
        return res.json(`ERROR ${error}`)
    }
}
const getAllCategory = async (req, res) => {

    try {

        const doc = await Category.find({});
        return res.status(201).json({ msg: "all category", doc: doc })

    } catch (error) {
        console.log(`error at getAllCategory ERROR =>${error}`)
        return res.json(`ERROR ${error}`)
    }
}
const getCategoryById = async (req, res) => {

    const id = req.params.id
    try {

        const doc = await Category.findById(id);
        return res.status(201).json({ msg: "category created successfuly", doc: doc })

    } catch (error) {
        console.log(`error at getCategoryById ERROR =>${error}`)
        return res.json(`ERROR ${error}`)
    }
}
const deleteCategoryById = async (req, res) => {
    const id = req.params.id
    try {

        const doc = await Category.findByIdAndDelete(id)
        return res.status(201).json({ msg: "category Deleted successfuly", doc: doc })

    } catch (error) {
        console.log(`error at deleteCategoryById ERROR =>${error}`)
        return res.json(`ERROR ${error}`)
    }

}

const deleteCategoryByLabel = async (req, res) => {
    const label = req.params.label
    console.log(label)
    try {

        const doc = await Category.findOneAndDelete({ label });
        return res.status(201).json({ msg: "category Deleted (label) successfuly", doc: doc })

    } catch (error) {
        console.log(`error at deleteCategoryByLabel ERROR =>${error}`)
        return res.json(`ERROR ${error}`)
    }

}
const updateCategoryById = async (req, res) => {

    const id = req.params.id
    try {

        const doc = await Category.findByIdAndUpdate(id, req.body, { new: true })
        return res.status(201).json({ msg: "category updated successfuly", doc: doc })

    } catch (error) {
        console.log(`error at updateCategoryById ERROR =>${error}`)
        return res.json(`ERROR ${error}`)
    }

}


module.exports = {
    addNewCategory,
    getAllCategory,
    getCategoryById,
    deleteCategoryById,
    deleteCategoryByLabel,
    updateCategoryById
}