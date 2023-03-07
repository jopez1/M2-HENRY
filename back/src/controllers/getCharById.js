const axios = require("axios");
const url = "https://rickandmortyapi.com/api/character/"

const getCharById = async (req, res) => {
  try {
  const {id} = req.params;
  let result = await axios(url + id)
  const { data } = result;
          let objeto = {
              name : data.name,
              image: data.image,
              id: data.id,
              gender: data.gender,
              species: data.species
          }
          res.status(200)
          res.json(objeto)
      
  } catch (err) {
      res.status(500)
      res.json({message: err.message})
  }
}

module.exports = getCharById;

//como lo tenia antes
/* const axios = require("axios");

const getCharById = (res, id) => {
    axios(`https://rickandmortyapi.com/api/character/${id}`)

    .then((response) => response.data)
    .then(data => {
      let character = {
        id: id.data,
        name: data.name,
        image: data.image,
        gender: data.gender,
        species: data.species
      }
      res.writeHead(200, {"content-type":"application/json"}).end(JSON.stringify(character));

      });
      res // esta bien el res aqui?
      .catch(err => 
        res.writeHead(500, {"content-type":"text/plain"}).end(`El personaje con id:${id} no fue encontrado`)
    )

    }
    
module.exports = getCharById;

 */