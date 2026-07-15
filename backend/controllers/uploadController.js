const cloudinaryService = require('../services/cloudinaryService');

const uploadImage = async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ errors: ["Nenhum arquivo enviado."] });
    }
        const result = await cloudinaryService.upload(req.file.buffer);

    res.status(200).json({
      message: "Upload realizado com sucesso!",
      url: result.secure_url
    });
  } catch (error) {
    res.status(500).json({ errors: ["Erro ao processar imagem no servidor."] });
  }
};

module.exports = { uploadImage };