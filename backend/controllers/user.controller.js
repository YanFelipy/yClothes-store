const User = require('../models/user.model')
const bcrypt = require ('bcrypt')


exports.register = async (req, res) => {

try {

const { name, lastName, email, password } = req.body;

const userExists = await User.findOne({ email });
if (userExists) {
    return res.status(400).json({ message: "Este e-mail já está cadastrado." });
}


const salt = await bcrypt.genSalt(10);
const hashedPassword = await bcrypt.hash(password, salt);

const newUser = new User({
    name,
    lastName,
    email,
    password: hashedPassword
});

await newUser.save();

res.status(201).json({ message: "Usuário criado com sucesso!" });

}
 catch (error) {
    res.status(500).json({ message: "Erro no servidor, tente novamente." });
}}

