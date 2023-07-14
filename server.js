const express = require('express');
const dotenv = require('dotenv')
// file imports 
const { connectMongo } = require('./config');
const userRoute = require('./routes/user')
const productRoute = require('./routes/product')
const brandRoute = require('./routes/brand')
const categoryRoute = require('./routes/category')
const cartRoute = require('./routes/cart')
const orderRoute = require('./routes/order')

dotenv.config();
const app = express();
const PORT = process.env.PORT || 8080

// preDefined middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));


app.use('/user', userRoute)
app.use('/product', productRoute)
app.use('/brand', brandRoute)
app.use('/category', categoryRoute)
app.use('/cart', cartRoute)
app.use('/order', orderRoute)




app.listen(PORT, () => {
    connectMongo(process.env.MONGO);
    console.log('server is running at port 8080')
})