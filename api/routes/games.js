const express = require('express');
const router = express.Router();
router.get('/',(req, res, next) => {
    res.status(200).json({
        gamename:"CSGO",
        gameid:"730"
    });
});
router.post('/',(req, res, next) => {
    const game = {
        name: req.body.gName,
        id: req.body.gId
    };
    console.log(req.body);
    res.status(200).json({
        message:"Thanks for purchasing",
        game_purchased:game
    });
});
router.get('/:gameId',(req, res, next) => {
    if(req.params.gameId == "730"){
        res.status(200).json({
            message:"CSGO"
        });
    }else{
        res.status(200).json({
            message:"Other Game"
        });
    }
});
module.exports = router;