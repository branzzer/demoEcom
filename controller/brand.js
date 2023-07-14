const Brand = require("../models/brand");

const addNewBrand = async (req, res) => {
    const { label, value } = req.body;

    try {
        const doc = (await Brand.create({ label, value }))
        return res.status(201).json({ msg: "brand added succesfully", doc: doc })
    } catch (error) {
        console.log(`error at addNewBrand ERROR =>${error}`)
        return res.json(`ERROR ${error}`)
    }


}
const getAllBrands = async (req, res) => {
    try {
        const doc = await Brand.find({})
        return res.status(200).json({ msg: "all brands data", doc: doc })
    } catch (error) {
        console.log(`error at getAllBrands ERROR =>${error}`)
        return res.json(`ERROR ${error}`)
    }

}

const getBrandById = async (req, res) => {
    const id = req.params.id
    console.log(id)
    try {
        const doc = await Brand.findById(id)
        if (!doc) {
            return res.status(404).json({ error: 'Brand not found' });
        }
        return res.status(201).json({ msg: "your brand data", doc: doc })
    } catch (error) {
        console.log(`error at getBrandById ERROR =>${error}`)
        return res.json(`ERROR ${error}`)
    }

}


const deleteBrandById = async (req, res) => {
    const id = req.params.id
    console.log(id)
    try {
        const doc = await Brand.findByIdAndDelete(id)
        if (!doc) {
            return res.status(404).json({ error: 'Brand not found' });
        }

        return res.status(201).json({ msg: "delted ", doc: doc })
    } catch (error) {
        console.log(`error at deleteBrandById ERROR =>${error}`)
        return res.json(`ERROR ${error}`)
    }
}

const updateBrandById = async (req, res) => {
    const id = req.params.id
    try {
        const doc = await Brand.findByIdAndUpdate(id, req.body, { new: true })
        if (!doc) {
            return res.status(404).json({ error: 'Brand not found' });
        }

        return res.status(201).json({ doc: doc })
    } catch (error) {
        console.log(`error at addNewBrand ERROR =>${error}`)
        return res.json(`ERROR ${error}`)
    }
}



module.exports = {
    addNewBrand,
    getAllBrands,
    getBrandById,
    deleteBrandById,
    updateBrandById
}