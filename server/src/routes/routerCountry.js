const { Router } = require("express");
const router = Router();
const {
  getAllCountries,
  getCountryById,
  getCountryByName,
} = require("../controllers/controllerCountry");

router.get("/", async (req, res) => {
  const AllCountries = await getAllCountries();
  res.status(200).json(AllCountries);
  //await res.send('hola mundo')
});

router.get("/:id", async (req, res) => {
  const { id } = req.params;

  if (id) {
    const countryById = await getCountryById(id);

    if (countryById.error) return res.status(404).json(countryById);
    return res.status(200).json(countryById);
  } else {
    const AllCountries = await getAllCountries();
    return res.status(200).json(AllCountries);
  }
});

router.get("/countries/name", async (req, res) => {
  const { name } = req.query;
  console.log(name);
  if (name) {
    const countriesByName = await getCountryByName(name);

    if (countriesByName.error) return res.status(404).json(countriesByName);
    return res.status(200).json(countriesByName);
  } else {
    const AllCountries = await getAllCountries();
    return res.status(200).json(AllCountries);
  }
});

module.exports = router;
