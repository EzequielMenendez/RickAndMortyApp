/*const axios = require("axios")

const getCharById = (res, id) =>{
    axios(`https://rickandmortyapi.com/api/character/${id}`)
    .then(response => response.data)
    .then(({ name, gender, species, origin, image, status }) => {
        const character = {
            id,
            name,
            gender,
            species,
            origin,
            image,
            status
        }

        return res.writeHead(200, { 'Content-Type':'application/json' }).end(JSON.stringify(character));
    }).catch((error)=>{
        return res.writeHead(500, { 'Content-Type':'text/plain' }).end(error.message)
})
}
module.exports = {
    getCharById
}*/

const axios = require("axios")

const URL = "https://rickandmortyapi.com/api/character/"

const getCharById = async (req, res) =>{
    const { id } = req.params;
    try {
        let { data } = await axios(URL + id)
        if(!data.name) throw new Error(`ID: ${id} Not Found`)
        const character = {
            id: id,
            name: data.name,
            gender: data.gender,
            species: data.species,
            origin: data.origin,
            image: data.image,
            status: data.status
        }
        return res.status(200).json(character);
    }catch (error) {
        error.message.includes('ID') ? res.status(404).send(error.message):res.status(500).send(error.message);
    }
}

module.exports = {
    getCharById
};