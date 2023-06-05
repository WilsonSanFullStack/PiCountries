const { Router } = require("express");

const router = Router();

const {
  getAllCountries,
  //getCountriesById,
  //getCountriesByName,
} = require("../controllers/Paises");

router.get("/", async (req, res) => {
  /*const AllCountries = await getAllCountries();
return AllCountries;*/
res.send('hola mundo')
});
/*
router.get("/id", async (req, res) => {
  const { id } = req.params;

  if (id) {
    const countryById = await getCountriesById(id);

    if (countryById.error) return res.status(404).json(countryById);
    return res.status(200).json(countryById);
  } else {
    const AllCountries = await getAllCountries();
    return res.status(200).json(AllCountries);
  }
});

*/

module.exports = router;
