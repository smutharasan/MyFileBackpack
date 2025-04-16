// src/routes/api/get.js

/**
 * Get a list of MyFileBackpackData for the current user
 */
const response = require('../../response');

module.exports = (req, res) => {
  // TODO: this is just a placeholder to get something working...
  res.status(200).json(response.createSuccessResponse({ status: 'ok', myFileBackpackData: [] }));
};
