const MercadolibreService = require('../../services/MercadolibreService/MercadolibreService')

const mercadoLibre = new MercadolibreService()

exports.getLevel = async (req, res) => {
    try {
        const level = await mercadoLibre.getLevel();
        
        res.status(200).json({
            data: level
        })
    } catch (err) {
        res.status(400).json({
            message: "error getting user",
            error: err
        });
    }
}