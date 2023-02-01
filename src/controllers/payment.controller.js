const MercadolibreService = require('../../services/MercadolibreService/MercadolibreService')
const mercadoLibre = new MercadolibreService()

exports.getPayment = async (req, res) => {
    try {
        const payment = await mercadoLibre.getPayment(req.params.id);
        
        res.status(200).json({
            data: payment
        })
    } catch (err) {
        res.status(400).json({
            message: "error getting payment data",
            error: err
        });
    }
}