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

const getAllProducts = async (req, res) => {
  try {
    // Busca todos os produtos no banco, ordenando pelos mais novos (opcional)
    const products = await Product.find({}).sort({ createdAt: -1 });

    res.status(200).json(products);
  } catch (err) {
    console.error("Erro ao buscar produtos:", err);
    res.status(500).json({ errors: ["Erro interno ao buscar produtos."] });
  }
};

// Nova função para buscar UM produto pelo ID (útil para página de detalhes)
const getProductById = async (req, res) => {
  try {
    const { id } = req.params;
    const product = await Product.findById(id);

    if (!product) {
      return res.status(404).json({ errors: ["Produto não encontrado."] });
    }

    res.status(200).json(product);
  } catch (err) {
    console.error("Erro ao buscar produto:", err);
    res.status(500).json({ errors: ["Erro interno ao buscar produto."] });
  }
};

module.exports = { createProduct, getAllProducts, getProductById};