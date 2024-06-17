const express = require('express'); // Express app
const router = express.Router();    // Router Logic

//This is where we import the controlllers we will route
const tripsController = require('../controllers/trips');

// Define route for our trips endpoint
router
    .route('/trips')
    .get(tripsController.tripsList)// Get Method routes tripList
    .post(tripsController.tripsAddTrip); //POST Method Adds a Trip

//Get Method routes tripsFindByCode - requires fparameter
router
    .route('/trips/:tripCode')
    .get(tripsController.tripsFindByCode)
    .put(tripsController.tripsUpdateTrip);

module.exports = router;