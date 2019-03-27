const express = require('express');
const router = express.Router();
router.get('/',(req, res, next) => {
    res.status(200).json({
        gamename:"CSGO",
        gameid:"730"
    });
});
module.exports = router;