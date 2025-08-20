const express = require('express');
const router = express.Router();
const {Product} = require('../models');
const {Op} = require('sequelize');



// get product// estos me servira apra listar todos mis productos
router.get('/', async (req, res) =>{
    const { name } = req.query;
    try {
        let products;
        if (name) {
            products = await Product.findAll({
                where:{
                    name:{
                        [Op.iLike]:`%${name}%`
                    }
                }
            });
        } else {
            products = await Product.findAll();
        }
        res.json(products);
    } catch (error) {
        console.error('error al obtener los productos', error);
        res.status(500).json({error: 'error del servidor'});
    }
});

// post product // esto me mandara los prodcutos para mostarlos
//!
router.post('/', async (req,res) => {
    try {
        const {name, description, price, image, stock} = req.body;
        // validaciones basicas
        if (!name || !description || !price || !image || stock === undefined) {
            return res.status(400).json({error: 'faltam campos obligatorios'});
        }
        if (typeof price !=='number' || price < 0 ) {
            return res.status(400).json({error: 'el precio tiene que ser un numeor positivo'});
        }
        if (typeof stock !== 'number' || stock < 0) {
            return res.status(400).json({error:'el sotck tiene que ser numeor positivo'})
        }
        const newProduct = await Product.create({
            name, 
            description, 
            price, 
            image, 
            stock
        });
        res.status(201).json(newProduct);
    } catch (error) {
        console.error('error al crear el producto', error);
        res.status(500).json({error: 'no s epudo crear el producto'});
    }
});


// get products by id // obtener prodcutos mediante el id

router.get('/:id', async (req,res) =>{
    try {
        const product = await Product.findByPk(req.params.id);
        if(!product){
            return res.status(404).json({error: 'producto no encontrado'});
        }
        res.json(product);
    } catch (error) {
        console.error('error al obtener el prodcuto', error);
        res.status(500).json({error:'error del servidor'});        
    }
});


// put products // actualizar un prodcuto

router.put('/:id', async (req, res) =>{
    const {id} = req.params;
    const {name, description, price, image, stock} = req.body;

    //validaciones basica
    if (!name || !description || !price || !image || stock === undefined) {
            return res.status(400).json({error: 'faltam campos obligatorios'});
        }
        if (typeof price !=='number' || price < 0 ) {
            return res.status(400).json({error: 'el precio tiene que ser un numeor positivo'});
        }
        if (typeof stock !== 'number' || stock < 0) {
            return res.status(400).json({error:'el sotck tiene que ser numeor positivo'});
        }

    try {
        const product = await Product.findByPk(id);
        if(!product) return res.status(404).json({error: 'producto no encontrado'});
        await product.update({name, description, price, image, stock});
        res.json(product);
    } catch (error) {
        res.status(500).json({error: 'error al actulizar el prpdcuto'})
    }
});


// delete by id / eliminar producto por ID

router.delete('/:id',async(req,res)=>{
    const {id} = req.params;
    try {
        const product = await Product.findByPk(id);
            if(!product) return res.status(404).json({error: 'producto no encontrado'});    
        await product.destroy();
        res.json({message: 'Producto eliminado correctamente'});
    } catch (error) {
        console.error('error al eliminar el proctto');
        req.status(500).json({error: 'error del servidor'});
    }
});
module.exports = router;
