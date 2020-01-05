const express = require('express');
const HotelService = require('../service/hotel');

function hotelApi(app) {
  const router = express.Router();
  const hotelService = new HotelService();

  app.use('/api/hotels', router);

  router.get('/', async (req, res, next) => {
    try {
      const hotels = await hotelService.getHotels();

      res.status(200).json({
        data: hotels,
        message: 'hotels listed'
      });
    } catch (err) {
      next(err);
    }
  });

  router.get('/details/:hotelId', async (req, res, next) => {
    const { hotelId } = req.params;

    try {
      const details = await hotelService.getHotelDetails({ hotelId });
      res.status(200).json({
        data: details,
        message: 'details retrieved'
      });
    } catch (err) {
      next(err);
    }
  });
}

module.exports = hotelApi;
