const stockTable = require('../models/Stocks');
const productTable = require('../models/Products');
const imageTable = require("../models/Images");

async function modifyProduct(data,image){
    try{
        const changeProduct = await productTable.update({
            name:data.nameProduct,
            code:data.newCodeProduct,
            description:data.descProduct,
        },{where:{code:data.currentCodeProduct}})

        const findIdProduct = await productTable.findOne({where:{code:data.newCodeProduct}});
        
        const changeStock = await stockTable.update({
            size:data.sizeProduct,
            quantity:data.qtdProduct,
            unitValue:data.unitValue,
        },{where:{id_product:findIdProduct.idProduct}});
        
        const resultImage = await imageTable.update({
            pathImage: image,
            nameImage: image,
        },{where:{id_product:findIdProduct.idProduct}});
    
    }catch(err){
        console.log(err);
    }
    return true
};

module.exports = modifyProduct;