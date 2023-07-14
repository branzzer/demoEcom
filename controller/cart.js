const Cart = require("../models/cart")

const addNewToCart = async (req, res) => {

    // we can also directly pass req.body if 
    //    const { quantity, product, user } = req.body


    try {

        const doc = await Cart.create(req.body)
        res.status(201).json(doc)

    } catch (error) {
        res.status(400).json({ msg: "error at addNewToCart ", error: error })
    }


}


const getCartByUserQuery = async (req, res) => {
    const { userId } = req.query

    try {
        const cartList = await Cart.find({ user: userId }).populate('product').populate("user")
        res.status(200).json(cartList)

    } catch (error) {
        res.status(400).json({ msg: "error at getCartByUserQuery ", error: error })
    }


}

// using cartID
const getCartByUserParms = async (req, res) => {
    const id = req.params.id


    try {
        const cartList = await Cart.find({ user: id }).populate('product')
        res.status(200).json(cartList)

    } catch (error) {
        res.status(400).json({ msg: "error at getCartByUserParms ", error: error })
    }



}


const deletCartSingleItem = async (req, res) => {
    const id = req.params.id


    try {
        const doc = await Cart.findByIdAndDelete(id)
        return res.status(200).json({ msg: "delted Suceesfully ", doc });

    } catch (error) {
        res.status(400).json({ msg: "error at deletCartSingleItem ", error: error })
    }
}



const updateCartItem = async (req, res) => {
    const id = req.params.id

    try {
        const doc = await Cart.findByIdAndUpdate(id, req.body, { new: true })
        return res.status(200).json({ msg: "updated successfuly", doc });
    } catch (error) {
        res.status(400).json({ msg: "error at updateCartItem ", error: error })
    }
}

module.exports = {
    addNewToCart,
    getCartByUserQuery,
    getCartByUserParms,
    deletCartSingleItem,
    updateCartItem

}