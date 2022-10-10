/*
exports.midddleWareGlobal = (req, res, next) => {
    res.locals.variavelLocal = "Variavel local";
    next();
}

exports.outroMiddleware = (req, res, next) => {
    next();
}

*/

module.exports = (req, res, next) => {
    console.log()
    if (req.body.cliente) {
        console.log(`peguei ${req.body.cliente}`)
    }
    console.log()
    next();
}

