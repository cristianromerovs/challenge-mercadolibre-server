const MercadolibreService = require('../../services/MercadolibreService/MercadolibreService')
const mercadoLibre = new MercadolibreService()

exports.getShipment = async (req, res) => {
    try {
        const shipment = await mercadoLibre.getShipment(req.params.id);
        
        res.status(200).json({
            data: shipment
        })
    } catch (err) {
        res.status(400).json({
            message: "error getting shipment data",
            error: err
        });
    }
}