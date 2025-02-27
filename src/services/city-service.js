const { CityRepository } = require('../repository/index');

class CityService{
    constructor() {
        this.cityRepository = new CityRepository();
    }

    async createCity(data){
        try {
            const city = await this.cityRepository.createCity(data);
            return city;
        } catch (error) {
            Console.log("Something went wrong in the Service layer");
            throw {error};
        }
    }
    async deleteCity(cityId){
        try {
            const response = await this.cityRepository.deleteCity(cityId);
        } catch (error) {
            Console.log("Something went wrong in the repository layer");
            throw {error};
        }
    }
    async updateCity(cityId,data){
        try {
            const city =  await this.cityRepository.updateCity(cityId,data);
            return city;
        } catch (error) {
            Console.log("Something went wrong in the repository layer");
            throw {error};
        }
    }
    async getCity(cityId){
        try {
            const city = await this.cityRepository.getCity(cityId);
            return city;
        } catch (error) {
            Console.log("Something went wrong in the repository layer");
            throw {error};
        }
    }
}