import * as yup from 'yup';

// Regex para a senha
const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

const userRegisterSchema = yup.object().shape({ 
    name: yup.string().required("Nome é obrigatório"), 
    lastName: yup.string().required("Sobrenome é obrigatório"),
    email: yup.string().email("E-mail inválido").required("E-mail é obrigatório"),
    password: yup.string()
        .required("Senha é obrigatória")
        .matches(
            passwordRegex,
            "A senha deve conter 8+ caracteres, uma maiúscula, uma minúscula, um número e um caractere especial"
        ),
    // Corrigido: o ref deve receber o nome do campo como string 'password'
    confirmPassword: yup.string()
        .oneOf([yup.ref('password'), null], 'As senhas devem ser iguais')
        .required("Confirme sua senha")
});


const userLoginSchema = yup.object().shape({ 
    email: yup.string().email("E-mail inválido").required("E-mail é obrigatório"),
    password: yup.string().required("Senha é obrigatória")
  
});

export { userRegisterSchema, userLoginSchema };