const mongoose = require("mongoose");
const app = require("./app");
const port = process.env.PORT || 3977;
const { API_VERSION, IP_SERVER, PORT_DB } = require("./config");

//mongoose.set("useFindAndModify", false);
//mongodb+srv://filmappuser:<password>@filmsapp.87cig.mongodb.net/myFirstDatabase?retryWrites=true&w=majority
//mongodb://${IP_SERVER}:${PORT_DB}/MultimediaDB
mongoose.connect(
  `mongodb+srv://filmappuser:mernfilm@filmsapp.87cig.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  (err, res) => {
    if (err) {
      throw err;
    } else {
      console.log("La conexión a la base de datos es correcta.");
      app.listen(port, () => {
        console.log("###############################");
        console.log("########### API REST ##########");
        console.log("###############################");
        console.log(`https://filmsappserver.herokuapp.com/api/${API_VERSION}/
        `);
      });
    }
  }
);
