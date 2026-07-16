const Product = require('../models/product.model');

const createProduct = async (req, res) => {
  try {

    const { 
      prodName, 
      prodPrice, 
      previousPrice, 
      quantity, 
      category, 
      productType, 
      productSize, 
      imageUrl, 
      galleryImages 
    } = req.body;

    const userId = req.user.id; 

 
    if (!prodName || !prodPrice || !category || !productType || !productSize || !imageUrl) {
      return res.status(400).json({ 
        errors: ["Campos obrigatórios faltando (nome, preço, categoria, tipo, tamanho ou imagem principal)."] 
      });
    }

  
    const newProduct = new Product({
      prodName,
      prodPrice,
      previousPrice, 
      quantity,      
      category,
      productType,
      productSize,
      imageUrl,
      galleryImages, 
      userId
    });

    const savedProduct = await newProduct.save();

    res.status(201).json({
      message: "Produto criado com sucesso!",
      product: savedProduct
    });
  } catch (err) {
    console.error("Erro ao criar produto:", err);
    res.status(500).json({ errors: ["Erro interno ao salvar produto."] });
  }
};

module.exports = { createProduct };