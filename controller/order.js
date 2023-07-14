const Order = require("../models/order")

const createOrder = async (req, res) => {

    try {

        const doc = await Order.create(req.body);
        return res.status(201).json({ msg: "successfulr order created", doc });

    } catch (error) {
        return res.status(400).json({ msg: "error at createOrder controller", error })
    }



}
const getAllOrders = async (req, res) => {
    const { userId } = req.query


    try {

        const doc = await Order.find({ user: userId });
        return res.status(200).json({ msg: "all Orders ", doc });

    } catch (error) {
        return res.status(400).json({ msg: "error at getAllOrders controller", error })
    }
}
const getOrder = async (req, res) => {
    const id = req.params.id

    try {
        const doc = await Order.findById(id).populate('user');
        return res.status(200).json({ msg: "Order", doc });
    } catch (error) {
        return res.status(400).json({ msg: "error at getOrder controller", error })
    }
}

const deletAllOrderByUserId = async (req, res) => {
    const { userId } = req.query
    console.log(userId)
    try {
        const doc = await Order.deleteMany({ user: userId })
        return res.status(200).json({ msg: "all order of user deleted", doc });
    } catch (error) {
        return res.status(400).json({ msg: "error at deletAllOrderByUserId controller", error })
    }

}
const deletOrderByOrderId = async (req, res) => {
    const id = req.params.id
    try {
        const doc = await Order.findByIdAndDelete(id);
        return res.status(200).json({ msg: "order of user deleted", doc });
    } catch (error) {
        return res.status(400).json({ msg: "error at deletOrderByOrderId controller", error })
    }


}
const updateOrder = async (req, res) => {
    const id = req.params.id
    try {
        const doc = await Order.findByIdAndUpdate(id, req.body, { new: true })
        return res.status(200).json({ msg: "updated order", doc })
    } catch (error) {
        return res.status(400).json({ msg: "error at deletOrderByOrderId controller", error })
    }

}


module.exports = {
    createOrder,
    getAllOrders,
    getOrder,
    deletAllOrderByUserId,
    deletOrderByOrderId,
    updateOrder
}