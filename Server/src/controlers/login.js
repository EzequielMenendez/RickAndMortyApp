const { User } = require("../DB_connection");

const login = async(req, res)=>{
    const { email, password } = req.query;
    try {
        if (!email || !password) throw Error("Faltan datos");
        const user = await User.findOne({ where: {email: email} });
        if(!user)throw Error("Usuario no encontrado");
        if(user.password !== password)throw Error("Contraseña incorrecta");
        return res.status(200).json({access: true})
    } catch (error) {
        let status = 500;
        if(error.message === "Faltan datos")status = 400;
        if(error.message === "Usuario no encontrado")status = 404;
        if(error.message === "Contraseña incorrecta")status = 403;
        return res.status(status).json({error: error.message});
    }
}

module.exports = login;