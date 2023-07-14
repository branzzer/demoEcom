const User = require("../models/user");

const signup = async (req, res) => {

    const { name, email, password } = req.body;

    try {

        const user = await User.create({ name, email, password });
        await user.save()

        res.status(201).json({
            msg: "user created succesfully",
            user: user
        })


    } catch (error) {
        res.status(500).json(`ERROR=> ${error}`)
        console.log(`error at signUp controller ERROR =>${error}`)
    }


}

const login = async (req, res) => {

    const { email, password } = req.body;

    try {

        const isAuthenticated = User.checkPassword(email, password)

        if (!isAuthenticated) return res.status(404).json({ msg: "invalid user", user: user })

        res.status(200).json({
            msg: "user login succesfully",

        })


    } catch (error) {
        res.status(500).json(`ERROR=> ${error}`)
        console.log(`error at login controller ERROR =>${error}`)
    }

}

const updateUserById = async (req, res) => {
    const id = req.params.id
    const { name, password } = req.body

    try {
        const user = await User.findById(id);

        if (!user) return res.status(404).json({ msg: "invalid user", user: user })

        if (name) {
            user.name = name
        }
        if (password) {
            user.password = password
        }

        await user.save();
        res.status(200).json({ mas: "user update succesflly", user: user });

    } catch (error) {
        res.status(500).json({ msg: "update failed ", error: error })
        console.log(`error at updateUserById controller ERROR =>${error}`)
    }
}


const findUserById = async (req, res) => {
    const id = req.params.id

    try {
        const user = await User.findById(id);

        if (!user) return res.status(404).json({ msg: "invalid user not exist", user: user })

        res.status(200).json({ mas: "user found successfuly", user: user });

    } catch (error) {
        res.status(500).json({ msg: "user not found ", error: error })
        console.log(`error at findUserById controller ERROR =>${error}`)
    }
}


const deleteUserById = async (req, res) => {
    const id = req.params.id


    try {

        const doc = await User.findByIdAndDelete(id);
        return res.status(200).json(doc);

    } catch (error) {
        res.status(500).json({ msg: "failed to delte user ", error: error })
        console.log(`error at deleteUserById controller ERROR =>${error}`)
    }

}

module.exports = {
    signup,
    login,
    updateUserById,
    findUserById,
    deleteUserById,
}