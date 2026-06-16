const User = require('../models/user.model')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')


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
        console.error("Erro no cadastro:", error);
        res.status(500).json({ message: "Erro no servidor, tente novamente." });
    }
}


exports.login = async (rec, res) => {

    try {

        const { email, password } = req.body;
        const user = await User.findOne({ email })

        if (!user) {
            return res.status(400).json({ message: "Usuário não encontrado" });
        }

        const isMatch = await bcrypt.compare(password, user.password)

        if (!isMatch) {
            return res.status(400).json({ message: "Senha incorreta" })
        }

        const token = JsonWebTokenError.sign((
            {
                id: user.id,
                role: user.role
            },
            process.env.JWT_SECRET,
            { expiresIn: '1h'}
        ))

    } catch (error) {
        console.error(error)
        res.status(500).json({ message: "Erro no servidor, tente novamente mais tarde" })
    }

}
