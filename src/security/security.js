const User = require("../entity/User");

async function tokenIsValid(req) {

    //let tokens = [
        //controlando acessos ao endpoint
    //    'ana01',
    //    'beatriz01',
    //    'girao01',
    //];

    //return tokens.includes(req.headers.token);

    let user = await User.findAll({
        where: {
            token: req.headers.token
        }
    });

    if (user.length === 0) {
        return false;
    }

    return user;
}

function errorPermission(res) {
    res.status(401).send({
        error: 'vc nao tem permissao'
    });
}

async function validSecurity(req, res, next) {
    if (! await tokenIsValid(req)) {
        errorPermission(res);
        return;
    }

    next();
}

module.exports = {
    validSecurity
};