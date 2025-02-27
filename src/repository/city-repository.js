const { City } =  require('../models/index');

class CityRepository {
    async createCity({ name }) {
        try {
            const city = await City.create({ name });
            return city; // Return the created city
        } catch (error) {
            throw error; // No need to wrap error in an object
        }
    }
    ///these functions are async functions because the JS will be returning us a promsie as JS doesnt know directly how to connect to a DB and update it.
    async deleteCity( cityid ) {
        try {
            await City.destroy( {where: {
                id : cityid
            }  });
        } catch (error) {
            throw error;
        }
    } 
}

module.exports = CityRepository;