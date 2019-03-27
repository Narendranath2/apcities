const express = require('express');
const router = express.Router();
router.get('/',(req, res, next) => {
    res.status(200).json({
        message:"Thanks for buying"
    });
});
router.post('/:gameID',(req, res, next) => {
    const gameid = req.params.gameID;
    var gameToBePurchased;
    if(gameid == "730"){
        gameToBePurchased = "CSGO";
        res.status(200).json({
            message:"Thanks for buying" + gameToBePurchased
        });
    }else{
        res.status(200).json({
            message:"Thanks for buying"
        });
    }
    
});
module.exports = router;