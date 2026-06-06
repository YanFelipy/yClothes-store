const mongoose = require('mongoose');
const dns = require('dns')

dns.setServers([
    '1.1.1.1',
    '8.8.8.8'
])

const connectDB = async () => {
  try {
   
    await mongoose.connect(process.env.MONGODB_URI);
    console.log('MongoDB conectado com sucesso!');
  } catch (error) {
    console.error('Erro ao conectar ao MongoDB:', error.message);
    process.exit(1); 
  }
};



module.exports = connectDB;