function tokenIsValid(req) {

    let tokens = [
        //controlando acessos ao endpoint
        'ana01',
        'beatriz01',
        'girao01',
    ];

    return tokens.includes(req.headers.token);
}

function errorPermission(res) {
    res.status(401).send({
        error: 'vc nao tem permissao'
    });
}

function validSecurity(req, res, next) {
    if (!tokenIsValid(req)) {
        errorPermission(res);
        return;
    }

    next();
}

module.exports = {
    validSecurity
};