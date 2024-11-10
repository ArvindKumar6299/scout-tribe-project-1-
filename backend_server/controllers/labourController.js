const Labour = require('../models/labour');

// Get labour details
const getLabourDetails = async (req, res) => {
    try {
        const labour = await Labour.findById(req.params.id).populate('assignedManager', 'username');
        res.status(200).json(labour);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching labour details', error });
    }
};

// Update labour tasks
 const updateTasks = async (req, res) => {
    try {
        const { tasks } = req.body;
        const labour = await Labour.findByIdAndUpdate(req.params.id, { tasks }, { new: true });
        res.status(200).json(labour);
    } catch (error) {
        res.status(500).json({ message: 'Error updating tasks', error });
    }
};


module.exports = {getLabourDetails,  updateTasks }
