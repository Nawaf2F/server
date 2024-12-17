const express = require('express');
const router = express.Router();
const calculationController = require('../controllers/calculationController');

router.get('/', calculationController.getAllCalculations);
router.post('/', calculationController.saveCalculation);
router.delete('/:id', calculationController.deleteCalculation);
router.delete('/', calculationController.clearAllHistory);

module.exports = router;