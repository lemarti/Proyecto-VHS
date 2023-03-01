const products = require("../hardcode.json")

const getProducts = async (req, res) => {
    res.send(products)
}
module.exports = {
    getProducts
}