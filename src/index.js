const express = require('express');
const bodyParser = require("body-parser");
// const { City } =  require('./models/index'); `Model/Db interaction is done at the repository level.`
const CityRepository =  require('./repository/city-repository');

const { PORT } =  require('./config/serverConfig')




const setupAndStartServer = async() => {
    //create an express object.
    const app = express()

    app.use(bodyParser.json())
    app.use(bodyParser.urlencoded({extended: true}));
    const PORT = 3000;
    app.listen(PORT,async () => {
        console.log(`Server Started at ${PORT}`);
       const repo = new CityRepository();
       repo.createCity({name: "Mumbai"});

    });
}

setupAndStartServer();


