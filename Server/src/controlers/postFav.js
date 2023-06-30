const { Favorite } = require("../DB_connection");

const postFav = async(req, res)=> {
    try {
        const { id, name, origin, status, image, species, gender } = req.body;

        if(!id || !name || !origin || !status || !image || !species || !gender)throw Error("Faltan datos");

        await Favorite.findOrCreate({where: { id, name, origin, status, image, species, gender } } );
        const favs = await Favorite.findAll();

        return res.status(200).json(favs);
    } catch (error) {
        let status = 500;
        if(error.message === "Faltan datos")status = 401;
        return res.status(status).json({error: error.message});
    }
}

module.exports = postFav;