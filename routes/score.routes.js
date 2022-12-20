const Router = require('express');

const router = new Router();

const scoreController = require('../controller/score.controller');

router.post('/score', scoreController.createScore);
router.get('/score', scoreController.getScoresByUser);


module.exports = router;