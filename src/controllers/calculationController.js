const Calculation = require('../models/Calculation');

exports.getAllCalculations = async (req, res) => {
  try {
    const calculations = await Calculation.find()
      .sort({ timestamp: -1 })
      .limit(10);
    res.json(calculations);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.saveCalculation = async (req, res) => {
  try {
    const calculation = new Calculation({
      expression: req.body.expression,
      result: req.body.result
    });
    const savedCalculation = await calculation.save();
    res.status(201).json(savedCalculation);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.deleteCalculation = async (req, res) => {
  try {
    await Calculation.findByIdAndDelete(req.params.id);
    res.json({ message: 'Calculation deleted' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.clearAllHistory = async (req, res) => {
  try {
    await Calculation.deleteMany({});
    res.json({ message: 'History cleared' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};