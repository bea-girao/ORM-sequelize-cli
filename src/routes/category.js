const express = require('express');
const Category = require('../entity/Category');
const {validSecurity} = require('../security/security');

const router  = express.Router();

router.get('/categorias', validSecurity, async (req, res) => {
    //if (tokenIsValid(req) === false) {
    //    errorPermission(res);
    //    return;
    //}

    let data = await Category.findAll(); //SELECT * FROM ... 
    //documentacao sequelize substitui as queries
    res.send(data);
});

router.get('/categorias/:id', validSecurity, async (req, res) => {
    //if (tokenIsValid(req) === false) {
    //    errorPermission(res);
    //    return;
    //}

    let data = await Category.findByPk(req.params.id);

    res.send(data);
});

router.post('/categorias', validSecurity, async (req, res) => {
    //if (tokenIsValid(req) === false) {
    //    errorPermission(res);
    //    return;
    //}

    let data = await Category.create({
        name: req.body.name,
        description: req.body.description,
        // ou Category.create(req.body);
    });

    res.send(data);
});

router.patch('/categorias/:id', validSecurity, async (req, res) => {
    //if (tokenIsValid(req) === false) {
    //    errorPermission(res);
    //    return;
    //}

    let cat = await Category.findByPk(req.params.id);

    cat.name =req.body.name;
    cat.description = req.body.description;
    cat.save();

    res.send(cat);

    //outra forma:
    //await Category.update(req.body, {
    //    where: {
    //        id: req.params.id
    //    }
    //});

    //res.send(req.body)
});

router.delete('/categorias/:id', validSecurity, async (req, res) => {
    //if (tokenIsValid(req) === false) {
    //    errorPermission(res);
    //    return;
    //}

    let linhasExcluidas = await Category.destroy({
        where: {
            id: req.params.id
        }
    });
    
    //outra forma:
    //let cat = await Category.findByPk(req.params.id);
    //cat.destroy();
    
    let status = linhasExcluidas === 0 ? 404 : 204;
    res.status(status).end();
})


module.exports = router;
