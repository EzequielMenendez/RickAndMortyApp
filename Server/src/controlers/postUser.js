const { User } = require("../DB_connection");

const postUser = async(req, res)=>{
    const { email, password } = req.body;
    try {
        if(!email && !password)throw Error("Faltan datos")
        const response = await User.findOrCreate({ where: { email: email, password: password }})
        return res.status(200).json(response);
    } catch (error) {
        let status = 500
        if(error === "Faltan datos")status = 400
        return res.status(status).json({error: error.message});
    }
}

module.exports = postUser;