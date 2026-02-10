const Chef = require ('../models/chefModel');

// 1. GET ALL: Show all chefs
const getAllChefs = async (req, res) => {
    try {
        const chefs = await Chef.find(); // get everything
        res.status(200).json(chefs);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// 2. CREATE: Add a new chef
const createChef = async (req, res) => {
    try {
        const newChef = await Chef.create(req.body);
        res.status(201).json(newChef);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// 3. GET ONE: Find a chef by ID
const getChefByID = async (req, res) => {
    try {
        const chef = await Chef.findById(req.params.id);
        if (!chef) return res.status(404).json({ message: 'Chef not found' });
        res.status(200).json(chef);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// 4. UPDATE: Change chef details
const updateChef = async (req, res) => {
    try {
        const chef = await Chef.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
        });
        if (!chef) return res.status(404).json({ message: 'Chef not found' });
        res.status(200).json(chef);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// 5. DELETE: Remove a chef
const deleteChef = async (req, res) => {
    try {
        const chef = await Chef.findByIdAndDelete(req.params.id);
        if (!chef) return res.status(404).json({ message: 'Chef not found' });
        res.status(200).json({ message: 'Chef deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = {
    getAllChefs,
    createChef,
    getChefByID,
    updateChef,
    deleteChef,
};