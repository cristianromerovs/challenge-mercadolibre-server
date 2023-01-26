const MercadolibreService = require('../../services/MercadolibreService/MercadolibreService')
const mercadoLibre = new MercadolibreService()

exports.getShipment = async (req, res) => {
    try {
        const shipment = await mercadoLibre.getUser();
        
        res.status(200).json({
            data: shipment
        })
    } catch (err) {
        res.status(400).json({
            message: "error getting user",
            error: err
        });
    }
}