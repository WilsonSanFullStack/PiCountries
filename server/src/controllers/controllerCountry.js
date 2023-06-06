//controles de los paises
const { Country, Activity, sequelize } = require("../db.js");
const { Op } = require("sequelize");

const getAllCountries = async () => await Country.findAll();

const getCountryById = async (id) => {
  const countryFilterId = await Country.findOne({ where: { id } });

  if (countryFilterId) return countryFilterId;
  return { error: `No hay paises con el ID: ${id}` };
};

const getCountryByName = async (name) => {
  const countryFilterName = await Country.findAll({
    where: {
      name: {
        [Op.iLike]: `%${name}%`,
      },
    },
  });

  if (countryFilterName.length > 0) return countryFilterName;
  return { error: `No hay paises con el Nombre: ${name}` };
};

module.exports = {
  getAllCountries,
  getCountryById,
  getCountryByName,
};
