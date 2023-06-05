//      ,----------------,              ,---------,
//         ,-----------------------,          ,"        ,"|
//       ,"                      ,"|        ,"        ,"  |
//      +-----------------------+  |      ,"        ,"    |
//      |  .-----------------.  |  |     +---------+      |
//      |  |                 |  |  |     | -==----'|      |
//      |  |  I LOVE DOS!    |  |  |     |         |      |
//      |  |  Bad command or |  |  |/----|`---=    |      |
//      |  |  C:\>_          |  |  |   ,/|==== ooo |      ;
//      |  |                 |  |  |  // |(((( [33]|    ,"
//      |  `-----------------'  |," .;'| |((((     |  ,"
//      +-----------------------+  ;;  | |         |,"
//         /_)______________(_/  //'   | +---------+
//    ___________________________/___  `,
//   /  oooooooooooooooo  .o.  oooo /,   \,"-----------
//  / ==ooooooooooooooo==.o.  ooo= //   ,`\--{)B     ,"
// /_==__==========__==_ooo__ooo=_/'   /___________,"
//
//                 .-~~~~~~~~~-._       _.-~~~~~~~~~-.
//             __.'              ~.   .~              `.__
//           .'//                  \./                  \\`.
//         .'//                     |                     \\`.
//       .'// .-~"""""""~~~~-._     |     _,-~~~~"""""""~-. \\`.
//     .'//.-"                 `-.  |  .-'                 "-.\\`.
//   .'//______.============-..   \ | /   ..-============.______\\`.
// .'______________________________\|/______________________________`.

const axios = require("axios");
const server = require("./src/server");
const { conn, Country } = require("./src/db.js");
const PORT = 3001;

conn
  .sync({ force: true })
  .then(() => {
    server.listen(PORT, async () => {
      const dbCountries = Country.findAll();
      if (!dbCountries.length) {
        const urlApi = await axios.get("http://localhost:5000/countries");
        const infApi = await urlApi.data.map((pais) => {
          return {
            id: pais.cca3,
            name: pais.name.common,
            image: pais.flags.svg,
            continent: pais.continents[0],
            capital: pais.capital ? pais.capital[0] : "Capital",
            subregion: pais.subregion ? pais.subregion : "Subregion",
            area: pais.area,
            population: pais.population,
          };
        });
        for (let i = 0; i < infApi.length; i++) {
          await Country.findOrCreate({
            where: { name: infApi[i].name },
            defaults: infApi[i],
          });
        }
        console.log("La Base De Datos ha sido actualizada");
      }
      console.log(`Server listening on port ${PORT}`);
    });
  })
  .catch((error) => console.log("hubo un error"));
