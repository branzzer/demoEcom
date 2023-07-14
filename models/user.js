const mongoose = require('mongoose');
const bcrypt = require('bcrypt')

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    }

}, { timestamps: true });


userSchema.pre('save', async function (next) {
    const user = this;

    if (!user.isModified('password')) return;

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(user.password, salt);
    this.password = hashedPassword

    return next()

})


userSchema.static("checkPassword", async function (email, password) {
    const user = await this.findOne({ email })

    if (!user) return false

    isPasswordValid = bcrypt.compare(password, user.password);

    if (!isPasswordValid) return false


    return true



})

const User = mongoose.model('user', userSchema);
module.exports = User





// userSchema.pre('save', function (next) {
//     const user = this;
//     // if user password is not changed we will return
//     if (!user.isModified("password")) return;

//     //if user passwrod is created or modified we will bycrypt
//     const salt = randomBytes(16).toString();          // secret key
//     const hashedPassword = createHmac('sha256', salt).update(user.password).digest("hex")

//     //we can also user Bycrypt instead of crypto
//     //const salt = await bcrypt.genSalt(10); // Generate a salt with 10 rounds of hashing
//     //const hashedPassword = await bcrypt.hash(this.password, salt);
//     this.salt = salt
//     this.password = hashedPassword

//     next();
// })
