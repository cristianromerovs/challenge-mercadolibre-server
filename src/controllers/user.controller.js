const MercadolibreService = require('../../services/MercadolibreService/MercadolibreService')
const mercadoLibre = new MercadolibreService()

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

exports.getUserRestrictions = async (req, res) => {
    try {
        const userRestrictions = await mercadoLibre.getUserRestrictions(req.params.id);
        res.status(200).json({
            data: userRestrictions
        })
    } catch (err) {
        res.status(400).json({
            message: "error getting user",
            error: err
        });
    }
}

exports.getUserPurchases = async (req, res) => {
    try {
        const userPurchases = await mercadoLibre.getUserPurchases(req.params.id, req.query.limit, req.query.offset);

        res.status(200).json({
            data: userPurchases
        })
    } catch (err) {
        res.status(400).json({
            message: "error getting user purchases",
            error: err
        });
    }
}