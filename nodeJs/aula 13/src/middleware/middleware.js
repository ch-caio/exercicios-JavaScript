module.exports = (req, res, next) => {
    console.log()
    if (req.body.cliente) {
console.log(`peguei ${req.body.cliente}`)
     }
    console.log()
    next();
}