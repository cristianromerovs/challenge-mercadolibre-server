const MercadolibreService = require('../../services/MercadolibreService/MercadolibreService')

const mercadoLibre = new MercadolibreService()

// const UserController = {}

exports.getUser = async (req, res) => {
    try {
        const user = await mercadoLibre.getUser();
        
        res.status(200).json({
            data: user
        })
    } catch (err) {
        res.status(400).json({
            message: "error getting user",
            error: err
        });
    }
}


// module.exports = UserController;