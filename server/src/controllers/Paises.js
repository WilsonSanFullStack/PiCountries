//controles de los paises
const {Country, Activity } = require('../db.js')

const getAllCountries = async () => await Country.findAll();
/*
const getCountryById = async (id) => {
  const countryFilterId = await Country.findOne({where: {id}});
  
  if (countryFilterId) return countryFilterId;
  return {error: `No hay paises con el ID: ${id}`};
};

const getCountryByName = async (name) => {
  name.toLowerCase(name)
  const countryFilterName = await Country.findOne({where: {name}})
  if (countryFilterName) return countryFilterName;
  return {error: `No hay paises con el Nombre: ${name}`}
};
*/
module.exports ={
  getAllCountries,
  //getCountryById,
  //getCountryByName
}