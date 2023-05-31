const router = require('express').Router();

const userRoutes = require('./api');

router.use('/api', apiRoutes);

module.exports = router;