const router = require('express').Router();
const books = require('./bookRoutes');

router.use('/books', books);

modeule.exports = router;