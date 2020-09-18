module.exports = (req, res, next) => {

    if(!req.user){
        return res.status(401).send({error: 'se tiene que estar logueado'});
    }

    next();
};