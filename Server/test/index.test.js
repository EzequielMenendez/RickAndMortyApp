const app = require('../src/app');
const session = require('supertest');
const agent = session(app);

describe("Test de RUTAS", ()=>{
    describe("GET /rickandmorty/character/:id", ()=>{
        it("Responde con status: 200", async ()=>{
            await agent.get('/rickandmorty/character/1').expect(200);
        })
        it("Responde un objeto con las propiedades: id, name, species, gender, status, origin e image", async ()=>{
            const response = await agent.get('/rickandmorty/character/1');
            expect(response.body).toHaveProperty('id')
            expect(response.body).toHaveProperty('name')
            expect(response.body).toHaveProperty('species')
            expect(response.body).toHaveProperty('gender')
            expect(response.body).toHaveProperty('status')
            expect(response.body).toHaveProperty('origin')
            expect(response.body).toHaveProperty('image')
        })
        it("si hay un error responde con un status 500", async ()=>{
            await agent.get('/rickandmorty/character/-1').expect(500);
        })
    })
    describe("GET /rickandmorty/login", ()=>{
        let email = "eze@gmail.com";
        let password = "Eze123"
        let incorrectEmail = "Hola@gmail.com"
        let incorrectPassword = "Hola123"
        it("Si el email y contraseña son correctos, concede el acceso", async ()=>{
            await agent.get(`/rickandmorty/login?email=${email}&password=${password}`).expect({access: true})
        })
        it("Si el email y contraseña son incorrectos, denega el acceso", async ()=>{
            await agent.get(`/rickandmorty/login?email=${incorrectEmail}&password=${incorrectPassword}`).expect({access: false})
        })
    })
    describe("POST /rickandmorty/fav", ()=>{
        let favorites = [];
        it("lo que se envia por body es devuelto en un array", async ()=>{
            const newFavorite = {name: "Rick", id: 1}
            const response = await agent.post('/rickandmorty/fav').send(newFavorite);
            expect(response.body).toEqual([newFavorite])
            favorites = response.body;
        })
        it("si se agrega otro elemento devuelve un array con el el elemento actual y el anterior", async ()=>{
            const newFavorite = {name: "Morty", id: 2}
            const response = await agent.post('/rickandmorty/fav').send(newFavorite);
            expect(response.body).toEqual([...favorites, newFavorite])
            favorites = response.body
        })
    })
    describe("DELETE /rickandmorty/fav/:id", ()=>{
        let favorites = [
            {name: "Rick", id: 1},
            {name: "Morty", id: 2}
        ]
        it("Si el id enviado no corresponde a ningun personaje devolver el array sin cambios", async ()=>{
            const response = await agent.delete('/rickandmorty/fav/3');
            expect(response.body).toEqual(favorites)
        })
        it("Si el id es correcto, elimina al personaje y devuelve un array sin el", async()=>{
            const response = await agent.delete('/rickandmorty/fav/2');
            favorites = favorites.filter(character => character.id !== response.body.id)
            expect(response.body).toEqual(favorites)
        })
    })
})