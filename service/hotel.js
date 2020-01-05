const MongoLib = require('../lib/mongo');

class HotelService {
  constructor() {
    this.collection = 'hotels';
    this.detailsCollection = 'details';
    this.mongoDB = new MongoLib();
  }

  async getHotels() {
    const hotels = await this.mongoDB.getAll(this.collection);
    return hotels || [];
  }

  async getHotelDetails({ hotelId }) {
    const hotelDetails = await this.mongoDB.get(
      this.detailsCollection,
      hotelId
    );

    return hotelDetails;
  }
}

module.exports = HotelService;
