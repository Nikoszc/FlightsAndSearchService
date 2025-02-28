const { City } =  require('../models/index');

class CityRepository {
    async createCity({ name }) {
        try {
            const city = await City.create({ name });
            return city; // Return the created city
        } catch (error) {
            console.log("Something went wrong in the repository layer");
            throw {error}; // No need to wrap error in an object
        }
    }
    ///these functions are async functions because the JS will be returning us a promsie as JS doesnt know directly how to connect to a DB and update it.
    async deleteCity( cityid ) {
        try {
            await City.destroy( {where: {
                id : cityid
            }  });
        } catch (error) {
            console.log("Something went wrong in the repository layer");
            throw {error};
        }
    } 
    async updateCity( cityid, data ){
        try {
            const city =  await City.update(data,{
                where: {
                    id: cityid
                }
            })
            return city;
        } catch (error) {
            Console.log("Something went wrong in the repository layer");
            throw {error};
        }
    }
    async getCity(){
        try {
            const city =  await City.findByPk(cityid); //used to find something by a singular id in the sequelize package
            return city;
        } catch (error) {
            console.log("Something went wrong in the repository layer");
        }
    }
}

module.exports = CityRepository;